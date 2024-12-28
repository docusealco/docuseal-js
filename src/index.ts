import { DocusealApi } from "./api.js";
import { DocusealApiError } from "./http.js";

const docuseal = new DocusealApi();

export { DocusealApi, DocusealApiError };

export default docuseal;
