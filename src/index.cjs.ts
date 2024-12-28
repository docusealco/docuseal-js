import { DocusealApi } from "./api.js";
import { DocusealApiError } from "./http.js";

const docuseal = new DocusealApi();

module.exports = docuseal;

module.exports.DocusealApi = DocusealApi;
module.exports.DocusealApiError = DocusealApiError;

module.exports.default = docuseal;
