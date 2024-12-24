import { DocusealApi } from "./api.ts";
import { DocusealApiError } from "./http.ts";

export { DocusealApi, DocusealApiError };

const docuseal = new DocusealApi();

export default docuseal;
