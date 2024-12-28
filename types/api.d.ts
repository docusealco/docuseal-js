import { GetTemplatesResponse, GetTemplateResponse, GetTemplatesQuery, CreateTemplateFromDocxResponse, CreateTemplateFromDocxData, CreateTemplateFromHtmlData, CreateTemplateFromHtmlResponse, CreateTemplateFromPdfData, CreateTemplateFromPdfResponse, MergeTemplateData, MergeTemplateResponse, CloneTemplateData, CloneTemplateResponse, UpdateTemplateData, UpdateTemplateResponse, AddDocumentToTemplateData, AddDocumentToTemplateResponse, ArchiveTemplateResponse, GetSubmissionsQuery, GetSubmissionsResponse, GetSubmissionResponse, CreateSubmissionData, CreateSubmissionResponse, CreateSubmissionsFromEmailsData, CreateSubmissionsFromEmailsResponse, ArchiveSubmissionResponse, GetSubmitterResponse, UpdateSubmitterData, UpdateSubmitterResponse, GetSubmittersQuery, GetSubmittersResponse } from "./types.js";
interface DocusealConfig {
    key?: string;
    url?: string;
    openTimeout?: number;
}
interface CreateSubmissionInitResponse {
    submitters: CreateSubmissionResponse;
}
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
    getSubmission(id: number): Promise<GetSubmissionResponse>;
    createSubmission(data: CreateSubmissionData): Promise<CreateSubmissionInitResponse>;
    createSubmissionFromEmails(data: CreateSubmissionsFromEmailsData): Promise<CreateSubmissionsFromEmailsResponse>;
    archiveSubmission(id: number): Promise<ArchiveSubmissionResponse>;
    permanentlyDeleteSubmission(id: number): Promise<ArchiveSubmissionResponse>;
    listSubmitters(query?: GetSubmittersQuery): Promise<GetSubmittersResponse>;
    getSubmitter(id: number): Promise<GetSubmitterResponse>;
    updateSubmitter(id: number, data: UpdateSubmitterData): Promise<UpdateSubmitterResponse>;
}
export {};
