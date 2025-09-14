import { Http } from "./http.js";
import {
  GetTemplatesResponse,
  GetTemplateResponse,
  GetTemplatesQuery,
  CreateTemplateFromDocxResponse,
  CreateTemplateFromDocxData,
  CreateTemplateFromHtmlData,
  CreateTemplateFromHtmlResponse,
  CreateTemplateFromPdfData,
  CreateTemplateFromPdfResponse,
  MergeTemplateData,
  MergeTemplateResponse,
  CloneTemplateData,
  CloneTemplateResponse,
  UpdateTemplateData,
  UpdateTemplateResponse,
  AddDocumentToTemplateData,
  AddDocumentToTemplateResponse,
  ArchiveTemplateResponse,
  GetSubmissionsQuery,
  GetSubmissionsResponse,
  GetSubmissionResponse,
  CreateSubmissionData,
  CreateSubmissionResponse as CreateSubmissionLegacyResponse,
  CreateSubmissionsFromEmailsData,
  CreateSubmissionsFromEmailsResponse,
  CreateSubmissionFromPdfData,
  CreateSubmissionFromPdfResponse,
  CreateSubmissionFromHtmlData,
  CreateSubmissionFromHtmlResponse,
  CreateSubmissionFromDocxData,
  CreateSubmissionFromDocxResponse,
  ArchiveSubmissionResponse,
  GetSubmitterResponse,
  UpdateSubmitterData,
  UpdateSubmitterResponse,
  GetSubmittersQuery,
  GetSubmittersResponse,
  GetSubmissionDocumentsResponse
} from "./types.js";

export type {
  GetTemplatesResponse,
  GetTemplateResponse,
  GetTemplatesQuery,
  CreateTemplateFromDocxResponse,
  CreateTemplateFromDocxData,
  CreateTemplateFromHtmlData,
  CreateTemplateFromHtmlResponse,
  CreateTemplateFromPdfData,
  CreateTemplateFromPdfResponse,
  MergeTemplateData,
  MergeTemplateResponse,
  CloneTemplateData,
  CloneTemplateResponse,
  UpdateTemplateData,
  UpdateTemplateResponse,
  AddDocumentToTemplateData,
  AddDocumentToTemplateResponse,
  ArchiveTemplateResponse,
  GetSubmissionsQuery,
  GetSubmissionsResponse,
  GetSubmissionResponse,
  CreateSubmissionData,
  CreateSubmissionsFromEmailsData,
  CreateSubmissionsFromEmailsResponse,
  CreateSubmissionFromPdfData,
  CreateSubmissionFromPdfResponse,
  CreateSubmissionFromHtmlData,
  CreateSubmissionFromHtmlResponse,
  CreateSubmissionFromDocxData,
  CreateSubmissionFromDocxResponse,
  ArchiveSubmissionResponse,
  GetSubmitterResponse,
  UpdateSubmitterData,
  UpdateSubmitterResponse,
  GetSubmittersQuery,
  GetSubmittersResponse,
  GetSubmissionDocumentsResponse
}

export type DocusealConfig = {
  key?: string;
  url?: string;
  openTimeout?: number;
}

export type CreateSubmissionResponse = {
  id: number;
  submitters: CreateSubmissionLegacyResponse;
  expired_at: string | null;
  created_at: string;
}

type IncludeQuery = {
  include?: string;
}

export type GetTemplateQuery = IncludeQuery;
export type GetSubmissionQuery = IncludeQuery;
export type GetSubmitterQuery = IncludeQuery;
export type GetSubmissionDocumentsQuery = IncludeQuery;

export class DocusealApi {
  private http: Http;

  public key: string;
  public url: string;
  public openTimeout: number;

  constructor(config: DocusealConfig = {}) {
    this.key = config.key || "";
    this.url = config.url || "https://api.docuseal.com";
    this.openTimeout = config.openTimeout || 60000;

    this.http = new Http(this);
  }

  configure(config: DocusealConfig = {}) {
    if (config.key) {
      this.key = config.key;
    }

    if (config.url) {
      this.url = config.url;
    }

    if (config.openTimeout) {
      this.openTimeout = config.openTimeout;
    }
  }

  async listTemplates(
    query?: GetTemplatesQuery,
  ): Promise<GetTemplatesResponse> {
    return this.http.get<GetTemplatesResponse>("/templates", query);
  }

  async getTemplate(id: number, query?: GetTemplateQuery): Promise<GetTemplateResponse> {
    return this.http.get<GetTemplateResponse>(`/templates/${id}`, query);
  }

  async createTemplateFromDocx(
    data: CreateTemplateFromDocxData,
  ): Promise<CreateTemplateFromDocxResponse> {
    return this.http.post<CreateTemplateFromDocxResponse>(
      "/templates/docx",
      data,
    );
  }

  async createTemplateFromHtml(
    data: CreateTemplateFromHtmlData,
  ): Promise<CreateTemplateFromHtmlResponse> {
    return this.http.post<CreateTemplateFromHtmlResponse>(
      "/templates/html",
      data,
    );
  }

  async createTemplateFromPdf(
    data: CreateTemplateFromPdfData,
  ): Promise<CreateTemplateFromPdfResponse> {
    return this.http.post<CreateTemplateFromPdfResponse>(
      "/templates/pdf",
      data,
    );
  }

  async mergeTemplates(
    data: MergeTemplateData,
  ): Promise<MergeTemplateResponse> {
    return this.http.post<MergeTemplateResponse>("/templates/merge", data);
  }

  async cloneTemplate(
    id: number,
    data: CloneTemplateData,
  ): Promise<CloneTemplateResponse> {
    return this.http.post<CloneTemplateResponse>(
      `/templates/${id}/clone`,
      data,
    );
  }

  async updateTemplate(
    id: number,
    data: UpdateTemplateData,
  ): Promise<UpdateTemplateResponse> {
    return this.http.put<UpdateTemplateResponse>(`/templates/${id}`, data);
  }

  async updateTemplateDocuments(
    id: number,
    data: AddDocumentToTemplateData,
  ): Promise<AddDocumentToTemplateResponse> {
    return this.http.put<AddDocumentToTemplateResponse>(
      `/templates/${id}/documents`,
      data,
    );
  }

  async archiveTemplate(id: number): Promise<ArchiveTemplateResponse> {
    return this.http.delete<ArchiveTemplateResponse>(`/templates/${id}`);
  }

  async permanentlyDeleteTemplate(
    id: number,
  ): Promise<ArchiveTemplateResponse> {
    return this.http.delete<ArchiveTemplateResponse>(`/templates/${id}`, {
      permanently: true,
    });
  }

  async listSubmissions(
    query?: GetSubmissionsQuery,
  ): Promise<GetSubmissionsResponse> {
    return this.http.get<GetSubmissionsResponse>("/submissions", query);
  }

  async getSubmission(id: number, query?: GetSubmissionQuery): Promise<GetSubmissionResponse> {
    return this.http.get<GetSubmissionResponse>(`/submissions/${id}`, query);
  }

  async getSubmissionDocuments(id: number, query?: GetSubmissionDocumentsQuery): Promise<GetSubmissionDocumentsResponse> {
    return this.http.get<GetSubmissionDocumentsResponse>(`/submissions/${id}/documents`, query);
  }

  async createSubmission(
    data: CreateSubmissionData,
  ): Promise<CreateSubmissionResponse> {
    return this.http.post<CreateSubmissionResponse>(
      "/submissions/init",
      data,
    );
  }

  async createSubmissionFromEmails(
    data: CreateSubmissionsFromEmailsData,
  ): Promise<CreateSubmissionsFromEmailsResponse> {
    return this.http.post("/submissions/emails", data);
  }

  async createSubmissionFromPdf(
    data: CreateSubmissionFromPdfData,
  ): Promise<CreateSubmissionFromPdfResponse> {
    return this.http.post("/submissions/pdf", data);
  }

  async createSubmissionFromHtml(
    data: CreateSubmissionFromHtmlData,
  ): Promise<CreateSubmissionFromHtmlResponse> {
    return this.http.post("/submissions/html", data);
  }

  async createSubmissionFromDocx(
    data: CreateSubmissionFromDocxData,
  ): Promise<CreateSubmissionFromDocxResponse> {
    return this.http.post("/submissions/docx", data);
  }

  async archiveSubmission(id: number): Promise<ArchiveSubmissionResponse> {
    return this.http.delete(`/submissions/${id}`);
  }

  async permanentlyDeleteSubmission(
    id: number,
  ): Promise<ArchiveSubmissionResponse> {
    return this.http.delete(`/submissions/${id}`, { permanently: true });
  }

  async listSubmitters(
    query?: GetSubmittersQuery,
  ): Promise<GetSubmittersResponse> {
    return this.http.get<GetSubmittersResponse>("/submitters", query);
  }

  async getSubmitter(id: number, query?: GetSubmitterQuery): Promise<GetSubmitterResponse> {
    return this.http.get<GetSubmitterResponse>(`/submitters/${id}`, query);
  }

  async updateSubmitter(
    id: number,
    data: UpdateSubmitterData,
  ): Promise<UpdateSubmitterResponse> {
    return this.http.put<UpdateSubmitterResponse>(`/submitters/${id}`, data);
  }
}
