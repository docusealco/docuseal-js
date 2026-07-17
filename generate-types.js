const { createClient, defaultPlugins } = require("@hey-api/openapi-ts");
const fs = require("fs");

createClient({
  client: "@hey-api/client-fetch",
  input: "https://console.docuseal.com/openapi.yml",
  output: "src/temps",
  plugins: [...defaultPlugins],
}).then(() => {
  const filePath = "./src/temps/types.gen.ts";
  let content = fs.readFileSync(filePath, "utf8");

  content = content
    .replace(/path:\s*{\s*[^}]*\s*},?;?/gs, "")
    .replace(/export\s+type\s+\w+\s*=\s*{\s*};?\n?/gs, "")
    .replace(/export\s+type\s+\w+\s*=\s*(unknown|any|never);?\n?/gs, "")
    .trim();

  const lines = content.split("\n");

  let result = [];
  let openBraces = 0;

  for (const line of lines) {
    if (line.match(/^\s{4}(body|query)\??:\s{/)) {
      openBraces++;
      continue;
    }

    if (line === "    };") {
      if (openBraces > 0) {
        openBraces--;
        continue;
      }
    }

    result.push(line);
  }

  content = result.join("\n").trim();

  // components spec: request bodies are $refs, so Data types come out as
  // `{ body: XRequest }` wrappers - unwrap them to the request type itself
  content = content.replace(
    /export\s+type\s+(\w+Data)\s*=\s*{\s*body\??:\s*(\w+);?\s*};?/g,
    "export type $1 = $2;",
  );

  ["GetTemplatesData", "GetSubmittersData", "GetSubmissionsData", "GetSubmissionDocumentsData"].forEach(
    (name) => {
      content = content.replace(
        new RegExp(name, "g"),
        name.replace("Data", "Query"),
      );
    },
  );

  fs.writeFileSync(filePath, content, "utf8");
  fs.rename("src/temps/types.gen.ts", "src/types.ts", () => {});
  fs.rm("src/temps", { recursive: true }, () => {});
});
