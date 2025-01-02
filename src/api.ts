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
  CreateSubmissionResponse,
  CreateSubmissionsFromEmailsData,
  CreateSubmissionsFromEmailsResponse,
  ArchiveSubmissionResponse,
  GetSubmitterResponse,
  UpdateSubmitterData,
  UpdateSubmitterResponse,
  GetSubmittersQuery,
  GetSubmittersResponse,
} from "./types.js";

interface DocusealConfig {
  key?: string;
  url?: string;
  openTimeout?: number;
}

interface CreateSubmissionInitResponse {
  id: number;
  submitters: CreateSubmissionResponse;
  expired_at: string | null;
  created_at: string;
}

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

  async getTemplate(id: number): Promise<GetTemplateResponse> {
    return this.http.get<GetTemplateResponse>(`/templates/${id}`);
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

  async getSubmission(id: number): Promise<GetSubmissionResponse> {
    return this.http.get<GetSubmissionResponse>(`/submissions/${id}`);
  }

  async createSubmission(
    data: CreateSubmissionData,
  ): Promise<CreateSubmissionInitResponse> {
    return this.http.post<CreateSubmissionInitResponse>(
      "/submissions/init",
      data,
    );
  }

  async createSubmissionFromEmails(
    data: CreateSubmissionsFromEmailsData,
  ): Promise<CreateSubmissionsFromEmailsResponse> {
    return this.http.post("/submissions/emails", data);
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

  async getSubmitter(id: number): Promise<GetSubmitterResponse> {
    return this.http.get<GetSubmitterResponse>(`/submitters/${id}`);
  }

  async updateSubmitter(
    id: number,
    data: UpdateSubmitterData,
  ): Promise<UpdateSubmitterResponse> {
    return this.http.put<UpdateSubmitterResponse>(`/submitters/${id}`, data);
  }
}
