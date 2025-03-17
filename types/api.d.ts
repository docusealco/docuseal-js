import { GetTemplatesResponse, GetTemplateResponse, GetTemplatesQuery, CreateTemplateFromDocxResponse, CreateTemplateFromDocxData, CreateTemplateFromHtmlData, CreateTemplateFromHtmlResponse, CreateTemplateFromPdfData, CreateTemplateFromPdfResponse, MergeTemplateData, MergeTemplateResponse, CloneTemplateData, CloneTemplateResponse, UpdateTemplateData, UpdateTemplateResponse, AddDocumentToTemplateData, AddDocumentToTemplateResponse, ArchiveTemplateResponse, GetSubmissionsQuery, GetSubmissionsResponse, GetSubmissionResponse, CreateSubmissionData, CreateSubmissionResponse as CreateSubmissionLegacyResponse, CreateSubmissionsFromEmailsData, CreateSubmissionsFromEmailsResponse, ArchiveSubmissionResponse, GetSubmitterResponse, UpdateSubmitterData, UpdateSubmitterResponse, GetSubmittersQuery, GetSubmittersResponse } from "./types.js";
export type { GetTemplatesResponse, GetTemplateResponse, GetTemplatesQuery, CreateTemplateFromDocxResponse, CreateTemplateFromDocxData, CreateTemplateFromHtmlData, CreateTemplateFromHtmlResponse, CreateTemplateFromPdfData, CreateTemplateFromPdfResponse, MergeTemplateData, MergeTemplateResponse, CloneTemplateData, CloneTemplateResponse, UpdateTemplateData, UpdateTemplateResponse, AddDocumentToTemplateData, AddDocumentToTemplateResponse, ArchiveTemplateResponse, GetSubmissionsQuery, GetSubmissionsResponse, GetSubmissionResponse, CreateSubmissionData, CreateSubmissionsFromEmailsData, CreateSubmissionsFromEmailsResponse, ArchiveSubmissionResponse, GetSubmitterResponse, UpdateSubmitterData, UpdateSubmitterResponse, GetSubmittersQuery, GetSubmittersResponse };
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
export declare class DocusealApi {
    private http;
    key: string;
    url: string;
    openTimeout: number;
    constructor(config?: DocusealConfig);
    configure(config?: DocusealConfig): void;
    listTemplates(query?: GetTemplatesQuery): Promise<GetTemplatesResponse>;
    getTemplate(id: number): Promise<GetTemplateResponse>;
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
    getSubmission(id: number, include_combined_document_url?: boolean): Promise<GetSubmissionResponse>;
    createSubmission(data: CreateSubmissionData): Promise<CreateSubmissionResponse>;
    createSubmissionFromEmails(data: CreateSubmissionsFromEmailsData): Promise<CreateSubmissionsFromEmailsResponse>;
    archiveSubmission(id: number): Promise<ArchiveSubmissionResponse>;
    permanentlyDeleteSubmission(id: number): Promise<ArchiveSubmissionResponse>;
    listSubmitters(query?: GetSubmittersQuery): Promise<GetSubmittersResponse>;
    getSubmitter(id: number): Promise<GetSubmitterResponse>;
    updateSubmitter(id: number, data: UpdateSubmitterData): Promise<UpdateSubmitterResponse>;
}
