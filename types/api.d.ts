import { GetTemplatesResponse, GetTemplateResponse, GetTemplatesQuery, CreateTemplateFromDocxResponse, CreateTemplateFromDocxData, CreateTemplateFromHtmlData, CreateTemplateFromHtmlResponse, CreateTemplateFromPdfData, CreateTemplateFromPdfResponse, MergeTemplateData, MergeTemplateResponse, CloneTemplateData, CloneTemplateResponse, UpdateTemplateData, UpdateTemplateResponse, AddDocumentToTemplateData, AddDocumentToTemplateResponse, ArchiveTemplateResponse, GetSubmissionsQuery, GetSubmissionsResponse, GetSubmissionResponse, CreateSubmissionData, CreateSubmissionResponse as CreateSubmissionLegacyResponse, CreateSubmissionsFromEmailsData, CreateSubmissionsFromEmailsResponse, CreateSubmissionFromPdfData, CreateSubmissionFromPdfResponse, CreateSubmissionFromHtmlData, CreateSubmissionFromHtmlResponse, ArchiveSubmissionResponse, GetSubmitterResponse, UpdateSubmitterData, UpdateSubmitterResponse, GetSubmittersQuery, GetSubmittersResponse, GetSubmissionDocumentsResponse } from "./types.js";
export type { GetTemplatesResponse, GetTemplateResponse, GetTemplatesQuery, CreateTemplateFromDocxResponse, CreateTemplateFromDocxData, CreateTemplateFromHtmlData, CreateTemplateFromHtmlResponse, CreateTemplateFromPdfData, CreateTemplateFromPdfResponse, MergeTemplateData, MergeTemplateResponse, CloneTemplateData, CloneTemplateResponse, UpdateTemplateData, UpdateTemplateResponse, AddDocumentToTemplateData, AddDocumentToTemplateResponse, ArchiveTemplateResponse, GetSubmissionsQuery, GetSubmissionsResponse, GetSubmissionResponse, CreateSubmissionData, CreateSubmissionsFromEmailsData, CreateSubmissionsFromEmailsResponse, CreateSubmissionFromPdfData, CreateSubmissionFromPdfResponse, CreateSubmissionFromHtmlData, CreateSubmissionFromHtmlResponse, ArchiveSubmissionResponse, GetSubmitterResponse, UpdateSubmitterData, UpdateSubmitterResponse, GetSubmittersQuery, GetSubmittersResponse, GetSubmissionDocumentsResponse };
export type DocusealConfig = {
    key?: string;
    url?: string;
    openTimeout?: number;
};
export type CreateSubmissionResponse = {
    id: number;
    submitters: CreateSubmissionLegacyResponse;
    expired_at: string | null;
    created_at: string;
};
type IncludeQuery = {
    include?: string;
};
export type GetTemplateQuery = IncludeQuery;
export type GetSubmissionQuery = IncludeQuery;
export type GetSubmitterQuery = IncludeQuery;
export type GetSubmissionDocumentsQuery = IncludeQuery;
export declare class DocusealApi {
    private http;
    key: string;
    url: string;
    openTimeout: number;
    constructor(config?: DocusealConfig);
    configure(config?: DocusealConfig): void;
    listTemplates(query?: GetTemplatesQuery): Promise<GetTemplatesResponse>;
    getTemplate(id: number, query?: GetTemplateQuery): Promise<GetTemplateResponse>;
    createTemplateFromDocx(data: CreateTemplateFromDocxData): Promise<CreateTemplateFromDocxResponse>;
    createTemplateFromHtml(data: CreateTemplateFromHtmlData): Promise<CreateTemplateFromHtmlResponse>;
    createTemplateFromPdf(data: CreateTemplateFromPdfData): Promise<CreateTemplateFromPdfResponse>;
    mergeTemplates(data: MergeTemplateData): Promise<MergeTemplateResponse>;
    cloneTemplate(id: number, data: CloneTemplateData): Promise<CloneTemplateResponse>;
    updateTemplate(id: number, data: UpdateTemplateData): Promise<UpdateTemplateResponse>;
    updateTemplateDocuments(id: number, data: AddDocumentToTemplateData): Promise<AddDocumentToTemplateResponse>;
    archiveTemplate(id: number): Promise<ArchiveTemplateResponse>;
    permanentlyDeleteTemplate(id: number): Promise<ArchiveTemplateResponse>;
    listSubmissions(query?: GetSubmissionsQuery): Promise<GetSubmissionsResponse>;
    getSubmission(id: number, query?: GetSubmissionQuery): Promise<GetSubmissionResponse>;
    getSubmissionDocuments(id: number, query?: GetSubmissionDocumentsQuery): Promise<GetSubmissionDocumentsResponse>;
    createSubmission(data: CreateSubmissionData): Promise<CreateSubmissionResponse>;
    createSubmissionFromEmails(data: CreateSubmissionsFromEmailsData): Promise<CreateSubmissionsFromEmailsResponse>;
    createSubmissionFromPdf(data: CreateSubmissionFromPdfData): Promise<CreateSubmissionFromPdfResponse>;
    createSubmissionFromHtml(data: CreateSubmissionFromHtmlData): Promise<CreateSubmissionFromHtmlResponse>;
    archiveSubmission(id: number): Promise<ArchiveSubmissionResponse>;
    permanentlyDeleteSubmission(id: number): Promise<ArchiveSubmissionResponse>;
    listSubmitters(query?: GetSubmittersQuery): Promise<GetSubmittersResponse>;
    getSubmitter(id: number, query?: GetSubmitterQuery): Promise<GetSubmitterResponse>;
    updateSubmitter(id: number, data: UpdateSubmitterData): Promise<UpdateSubmitterResponse>;
}
