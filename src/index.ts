import { DocusealApi } from "./api.js";
import { DocusealApiError } from "./http.js";

const docuseal = new DocusealApi();

export * from "./api.js";
export { DocusealApi, DocusealApiError };

export default docuseal;
