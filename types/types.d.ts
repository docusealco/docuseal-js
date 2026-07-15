export type CloneTemplateRequest = {
    /**
     * Template name. Existing name with (Clone) suffix will be used if not specified.
     */
    name?: string;
    /**
     * The folder's name to which the template should be cloned.
     */
    folder_name?: string;
    /**
     * Your application-specific unique string key to identify this template within your app.
     */
    external_id?: string;
};
export type CreateSubmissionDocumentFieldAreaParams = {
    /**
     * X-coordinate of the field area.
     */
    x: number;
    /**
     * Y-coordinate of the field area.
     */
    y: number;
    /**
     * Width of the field area.
     */
    w: number;
    /**
     * Height of the field area.
     */
    h: number;
    /**
     * Page number of the field area. Starts from 1.
     */
    page: number;
    /**
     * Option string value for 'radio' and 'multiple' select field types.
     */
    option?: string;
};
export type CreateSubmissionDocumentFieldParams = {
    /**
     * Name of the field.
     */
    name?: string;
    /**
     * Type of the field (e.g., text, signature, date, initials).
     */
    type?: FieldType;
    /**
     * Role name of the signer.
     */
    role?: string;
    /**
     * Indicates if the field is required.
     */
    required?: boolean;
    /**
     * Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.
     */
    title?: string;
    /**
     * Field description displayed on the signing form. Supports Markdown.
     */
    description?: string;
    /**
     * List of areas where the field is located in the document.
     */
    areas?: Array<CreateSubmissionDocumentFieldAreaParams>;
    /**
     * An array of option values for 'select' field type.
     */
    options?: Array<string>;
};
export type CreateSubmissionFromDocxDocumentParams = {
    /**
     * Name of the document.
     */
    name: string;
    /**
     * Base64-encoded content of the PDF or DOCX file or downloadable file URL.
     */
    file: string;
    /**
     * Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.
     */
    position?: number;
};
export type CreateSubmissionFromDocxRequest = {
    /**
     * Name of the document submission.
     */
    name?: string;
    /**
     * Set `false` to disable signature request emails sending.
     */
    send_email?: boolean;
    /**
     * Set `true` to send signature request via phone number and SMS.
     */
    send_sms?: boolean;
    /**
     * Dynamic content variables object. Variable values can be strings, numbers, arrays, objects, or HTML content used to generate styled text, paragraphs, and tables in DOCX.
     */
    variables?: {
        [key: string]: unknown;
    };
    /**
     * Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.
     */
    order?: SubmittersOrder;
    /**
     * Specify URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
    /**
     * Specify BCC address to send signed documents to after the completion.
     */
    bcc_completed?: string;
    /**
     * Specify Reply-To address to use in the notification emails.
     */
    reply_to?: string;
    /**
     * Specify the expiration date and time after which the submission becomes unavailable for signature.
     */
    expire_at?: string;
    /**
     * An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.
     */
    template_ids?: Array<number>;
    /**
     * An array of DOCX documents to create a submission.
     */
    documents: Array<CreateSubmissionFromDocxDocumentParams>;
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<CreateSubmissionSubmitterParams>;
    message?: CreateSubmissionMessageParams;
    /**
     * Set `true` to merge the documents into a single PDF file.
     */
    merge_documents?: boolean;
    /**
     * Pass `false` to disable the removal of {{text}} tags from the document. This can be used along with transparent text tags for faster and more robust document processing.
     */
    remove_tags?: boolean;
};
export type CreateSubmissionFromHtmlDocumentParams = {
    /**
     * Document name. Random uuid will be assigned when not specified.
     */
    name?: string;
    /**
     * HTML document content with field tags.
     */
    html: string;
    /**
     * HTML document content of the header to be displayed on every page.
     */
    html_header?: string;
    /**
     * HTML document content of the footer to be displayed on every page.
     */
    html_footer?: string;
    /**
     * Page size. Letter 8.5 x 11 will be assigned when not specified.
     */
    size?: PageSize;
    /**
     * Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.
     */
    position?: number;
};
export type CreateSubmissionFromHtmlRequest = {
    /**
     * Name of the document submission.
     */
    name?: string;
    /**
     * Set `false` to disable signature request emails sending.
     */
    send_email?: boolean;
    /**
     * Set `true` to send signature request via phone number and SMS.
     */
    send_sms?: boolean;
    /**
     * Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.
     */
    order?: SubmittersOrder;
    /**
     * Specify URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
    /**
     * Specify BCC address to send signed documents to after the completion.
     */
    bcc_completed?: string;
    /**
     * Specify Reply-To address to use in the notification emails.
     */
    reply_to?: string;
    /**
     * Specify the expiration date and time after which the submission becomes unavailable for signature.
     */
    expire_at?: string;
    /**
     * An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.
     */
    template_ids?: Array<number>;
    /**
     * The list of documents built from HTML. Can be used to create a submission with multiple documents.
     */
    documents: Array<CreateSubmissionFromHtmlDocumentParams>;
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<CreateSubmissionSubmitterParams>;
    message?: CreateSubmissionMessageParams;
    /**
     * Set `true` to merge the documents into a single PDF file.
     */
    merge_documents?: boolean;
};
export type CreateSubmissionFromPdfDocumentParams = {
    /**
     * Name of the document.
     */
    name: string;
    /**
     * Base64-encoded content of the PDF file or downloadable file URL.
     */
    file: string;
    /**
     * Fields are optional if you use {{...}} text tags to define fields in the document.
     */
    fields?: Array<CreateSubmissionDocumentFieldParams>;
    /**
     * Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.
     */
    position?: number;
};
export type CreateSubmissionFromPdfRequest = {
    /**
     * Name of the document submission.
     */
    name?: string;
    /**
     * Set `false` to disable signature request emails sending.
     */
    send_email?: boolean;
    /**
     * Set `true` to send signature request via phone number and SMS.
     */
    send_sms?: boolean;
    /**
     * Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.
     */
    order?: SubmittersOrder;
    /**
     * Specify URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
    /**
     * Specify BCC address to send signed documents to after the completion.
     */
    bcc_completed?: string;
    /**
     * Specify Reply-To address to use in the notification emails.
     */
    reply_to?: string;
    /**
     * Specify the expiration date and time after which the submission becomes unavailable for signature.
     */
    expire_at?: string;
    /**
     * An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.
     */
    template_ids?: Array<number>;
    /**
     * An array of PDF documents to create a submission.
     */
    documents: Array<CreateSubmissionFromPdfDocumentParams>;
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<CreateSubmissionSubmitterParams>;
    message?: CreateSubmissionMessageParams;
    /**
     * Remove PDF form fields from the documents.
     */
    flatten?: boolean;
    /**
     * Set `true` to merge the documents into a single PDF file.
     */
    merge_documents?: boolean;
    /**
     * Pass `false` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.
     */
    remove_tags?: boolean;
};
/**
 * Custom signature request email message.
 */
export type CreateSubmissionMessageParams = {
    /**
     * Custom signature request email subject.
     */
    subject?: string;
    /**
     * Custom signature request email body. Can include variables such as {{template.name}}, {{submission.name}}, {{submitter.link}}, {{account.name}}.
     */
    body?: string;
};
export type CreateSubmissionRequest = {
    /**
     * The unique identifier of the template. Document template forms can be created via the Web UI, <a href="https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form" class="link">PDF and DOCX API</a>, or <a href="https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api" class="link">HTML API</a>.
     */
    template_id: number;
    /**
     * Set `false` to disable signature request emails sending.
     */
    send_email?: boolean;
    /**
     * Set `true` to send signature request via phone number and SMS.
     */
    send_sms?: boolean;
    /**
     * Pass 'random' to send signature request emails to all parties right away. The order is 'preserved' by default so the second party will receive a signature request email only after the document is signed by the first party.
     */
    order?: SubmittersOrder;
    /**
     * Specify URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
    /**
     * Specify BCC address to send signed documents to after the completion.
     */
    bcc_completed?: string;
    /**
     * Specify Reply-To address to use in the notification emails.
     */
    reply_to?: string;
    /**
     * Specify the expiration date and time after which the submission becomes unavailable for signature.
     */
    expire_at?: string;
    /**
     * Dynamic content variables object. Variable values can be strings, numbers, arrays, objects, or HTML content used to generate styled text, paragraphs, and tables in dynamic template documents.
     */
    variables?: {
        [key: string]: unknown;
    };
    message?: CreateSubmissionMessageParams;
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<CreateSubmissionSubmitterParams>;
};
export type CreateSubmissionsFromEmailsRequest = {
    /**
     * The unique identifier of the template.
     */
    template_id: number;
    /**
     * A comma-separated list of email addresses to send the submission to.
     */
    emails: string;
    /**
     * Set `false` to disable signature request emails sending.
     */
    send_email?: boolean;
    message?: CreateSubmissionMessageParams;
};
export type CreateSubmissionSubmitterFieldParams = {
    /**
     * Document template field name.
     */
    name: string;
    default_value?: DefaultValue;
    /**
     * Set `true` to make it impossible for the submitter to edit predefined field value.
     */
    readonly?: boolean;
    /**
     * Set `true` to make the field required.
     */
    required?: boolean;
    /**
     * Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.
     */
    title?: string;
    /**
     * Field description displayed on the signing form. Supports Markdown.
     */
    description?: string;
    validation?: CreateSubmissionSubmitterFieldValidationParams;
    preferences?: CreateSubmissionSubmitterFieldPreferencesParams;
};
/**
 * Field display preferences.
 */
export type CreateSubmissionSubmitterFieldPreferencesParams = {
    /**
     * Font size of the field value in pixels.
     */
    font_size?: number;
    /**
     * Font type of the field value.
     */
    font_type?: FieldFontType;
    /**
     * Font family of the field value.
     */
    font?: FieldFont;
    /**
     * Font color of the field value.
     */
    color?: string;
    /**
     * Field box background color.
     */
    background?: string;
    /**
     * Horizontal alignment of the field text value.
     */
    align?: FieldAlign;
    /**
     * Vertical alignment of the field text value.
     */
    valign?: FieldValign;
    /**
     * The data format for different field types.<br>- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).<br>- Signature field: accepts drawn, typed, drawn_or_typed (default), or upload.<br>- Number field: accepts currency formats such as usd, eur, gbp.
     */
    format?: string;
    /**
     * Price value of the payment field. Only for payment fields.
     */
    price?: number;
    /**
     * Currency value of the payment field. Only for payment fields.
     */
    currency?: Currency;
    /**
     * Set `true` to make sensitive data masked on the document.
     */
    mask?: number | boolean;
    /**
     * An array of signature reasons to choose from.
     */
    reasons?: Array<string>;
};
/**
 * Field validation rules.
 */
export type CreateSubmissionSubmitterFieldValidationParams = {
    /**
     * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
     */
    pattern?: string;
    /**
     * A custom error message to display on validation failure.
     */
    message?: string;
    /**
     * Minimum allowed number value or date depending on field type.
     */
    min?: number | string;
    /**
     * Maximum allowed number value or date depending on field type.
     */
    max?: number | string;
    /**
     * Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.
     */
    step?: number;
};
/**
 * Custom signature request email message for the submitter.
 */
export type CreateSubmissionSubmitterMessageParams = {
    /**
     * Custom signature request email subject for the submitter.
     */
    subject?: string;
    /**
     * Custom signature request email body for the submitter. Can include variables such as {{template.name}}, {{submission.name}}, {{submitter.link}}, {{account.name}}.
     */
    body?: string;
};
export type CreateSubmissionSubmitterParams = {
    /**
     * The name of the submitter.
     */
    name?: string;
    /**
     * The role name or title of the submitter.
     */
    role?: string;
    /**
     * The email address of the submitter.
     */
    email?: string;
    /**
     * The phone number of the submitter, formatted according to the E.164 standard.
     */
    phone?: string;
    /**
     * An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see `fields` param.
     */
    values?: {
        [key: string]: unknown;
    };
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id?: string;
    /**
     * Pass `true` to mark submitter as completed and auto-signed via API.
     */
    completed?: boolean;
    /**
     * Metadata object with additional submitter information.
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Set `false` to disable signature request emails sending only for this submitter.
     */
    send_email?: boolean;
    /**
     * Set `true` to send signature request via phone number and SMS.
     */
    send_sms?: boolean;
    /**
     * Specify Reply-To address to use in the notification emails for this submitter.
     */
    reply_to?: string;
    /**
     * Submitter specific URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
    /**
     * The order of the submitter in the workflow (e.g., 0 for the first signer, 1 for the second, etc.). Use the same order number to create order groups. By default, submitters are ordered as in the submitters array.
     */
    order?: number;
    /**
     * Set to `true` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.
     */
    require_phone_2fa?: boolean;
    /**
     * Set to `true` to require email 2FA verification via a one-time code sent to the email address in order to access the documents.
     */
    require_email_2fa?: boolean;
    /**
     * Set the role name of the previous party that should invite this party via email.
     */
    invite_by?: string;
    message?: CreateSubmissionSubmitterMessageParams;
    /**
     * A list of configurations for template document form fields.
     */
    fields?: Array<CreateSubmissionSubmitterFieldParams>;
    /**
     * A list of roles for the submitter. Use this param to merge multiple roles into one submitter.
     */
    roles?: Array<string>;
};
export type CreateTemplateDocumentFieldAreaParams = {
    /**
     * X-coordinate of the field area.
     */
    x: number;
    /**
     * Y-coordinate of the field area.
     */
    y: number;
    /**
     * Width of the field area.
     */
    w: number;
    /**
     * Height of the field area.
     */
    h: number;
    /**
     * Page number of the field area. Starts from 1.
     */
    page: number;
    /**
     * Option string value for 'radio' and 'multiple' select field types.
     */
    option?: string;
};
export type CreateTemplateDocumentFieldParams = {
    /**
     * Name of the field.
     */
    name?: string;
    /**
     * Type of the field (e.g., text, signature, date, initials).
     */
    type?: FieldType;
    /**
     * Role name of the signer.
     */
    role?: string;
    /**
     * Indicates if the field is required.
     */
    required?: boolean;
    /**
     * Field title displayed to the user instead of the name, shown on the signing form. Supports Markdown.
     */
    title?: string;
    /**
     * Field description displayed on the signing form. Supports Markdown.
     */
    description?: string;
    /**
     * List of areas where the field is located in the document.
     */
    areas?: Array<CreateTemplateDocumentFieldAreaParams>;
    /**
     * An array of option values for 'select' field type.
     */
    options?: Array<string>;
    validation?: CreateTemplateDocumentFieldValidationParams;
    preferences?: CreateTemplateDocumentFieldPreferencesParams;
};
/**
 * Field display preferences.
 */
export type CreateTemplateDocumentFieldPreferencesParams = {
    /**
     * Font size of the field value in pixels.
     */
    font_size?: number;
    /**
     * Font type of the field value.
     */
    font_type?: FieldFontType;
    /**
     * Font family of the field value.
     */
    font?: FieldFont;
    /**
     * Font color of the field value.
     */
    color?: string;
    /**
     * Field box background color.
     */
    background?: string;
    /**
     * Horizontal alignment of the field text value.
     */
    align?: FieldAlign;
    /**
     * Vertical alignment of the field text value.
     */
    valign?: FieldValign;
    /**
     * The data format for different field types.<br>- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).<br>- Signature field: accepts drawn, typed, drawn_or_typed (default), or upload.<br>- Number field: accepts currency formats such as usd, eur, gbp.
     */
    format?: string;
    /**
     * Price value of the payment field. Only for payment fields.
     */
    price?: number;
    /**
     * Currency value of the payment field. Only for payment fields.
     */
    currency?: Currency;
    /**
     * Set `true` to make sensitive data masked on the document.
     */
    mask?: number | boolean;
    /**
     * An array of signature reasons to choose from.
     */
    reasons?: Array<string>;
};
/**
 * Field validation rules.
 */
export type CreateTemplateDocumentFieldValidationParams = {
    /**
     * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
     */
    pattern?: string;
    /**
     * A custom error message to display on validation failure.
     */
    message?: string;
    /**
     * Minimum allowed number value or date depending on field type.
     */
    min?: number | string;
    /**
     * Maximum allowed number value or date depending on field type.
     */
    max?: number | string;
    /**
     * Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.
     */
    step?: number;
};
export type CreateTemplateFromDocxDocumentParams = {
    /**
     * Name of the document.
     */
    name: string;
    /**
     * Base64-encoded content of the DOCX file or downloadable file URL.
     */
    file: string;
    /**
     * Set to `true` to make the document dynamic. When enabled, the DOCX document content can be edited or use [[variables]] in the template editor.
     */
    dynamic?: boolean;
    /**
     * Fields are optional if you use {{...}} text tags to define fields in the document.
     */
    fields?: Array<CreateTemplateDocumentFieldParams>;
};
export type CreateTemplateFromDocxRequest = {
    /**
     * Name of the template.
     */
    name?: string;
    /**
     * Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new document.
     */
    external_id?: string;
    /**
     * The folder's name in which the template should be created.
     */
    folder_name?: string;
    /**
     * Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    /**
     * An array of DOCX documents to create a template.
     */
    documents: Array<CreateTemplateFromDocxDocumentParams>;
};
export type CreateTemplateFromHtmlDocumentParams = {
    /**
     * HTML template with field tags.
     */
    html: string;
    /**
     * Document name. Random uuid will be assigned when not specified.
     */
    name?: string;
};
export type CreateTemplateFromHtmlRequest = {
    /**
     * HTML template with field tags.
     */
    html?: string;
    /**
     * HTML template of the header to be displayed on every page.
     */
    html_header?: string;
    /**
     * HTML template of the footer to be displayed on every page.
     */
    html_footer?: string;
    /**
     * Template name. Random uuid will be assigned when not specified.
     */
    name?: string;
    /**
     * Page size. Letter 8.5 x 11 will be assigned when not specified.
     */
    size?: PageSize;
    /**
     * Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new HTML.
     */
    external_id?: string;
    /**
     * The folder's name in which the template should be created.
     */
    folder_name?: string;
    /**
     * Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    /**
     * The list of documents built from HTML. Can be used to create a template with multiple documents. Leave `documents` param empty when using a top-level `html` param for a template with a single document.
     */
    documents?: Array<CreateTemplateFromHtmlDocumentParams>;
};
export type CreateTemplateFromPdfDocumentParams = {
    /**
     * Name of the document.
     */
    name: string;
    /**
     * Base64-encoded content of the PDF file or downloadable file URL.
     */
    file: string;
    /**
     * Fields are optional if you use {{...}} text tags to define fields in the document.
     */
    fields?: Array<CreateTemplateDocumentFieldParams>;
};
export type CreateTemplateFromPdfRequest = {
    /**
     * Name of the template.
     */
    name?: string;
    /**
     * The folder's name in which the template should be created.
     */
    folder_name?: string;
    /**
     * Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new PDF.
     */
    external_id?: string;
    /**
     * Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    /**
     * An array of PDF documents to create a template.
     */
    documents: Array<CreateTemplateFromPdfDocumentParams>;
    /**
     * Remove PDF form fields from the documents.
     */
    flatten?: boolean;
    /**
     * Pass `false` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.
     */
    remove_tags?: boolean;
};
export declare enum Currency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
    CAD = "CAD",
    AUD = "AUD",
    CHF = "CHF",
    SEK = "SEK"
}
/**
 * Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.
 */
export type DefaultValue = string | number | boolean | Array<DefaultValueItem>;
export type DefaultValueItem = string | number | boolean;
export type Document = {
    /**
     * Document name.
     */
    name: string;
    /**
     * Document URL.
     */
    url: string;
};
export declare enum EventType {
    FORM_VIEWED = "form.viewed",
    FORM_STARTED = "form.started",
    FORM_COMPLETED = "form.completed",
    FORM_DECLINED = "form.declined",
    SUBMISSION_CREATED = "submission.created",
    SUBMISSION_COMPLETED = "submission.completed",
    SUBMISSION_EXPIRED = "submission.expired",
    SUBMISSION_ARCHIVED = "submission.archived",
    TEMPLATE_CREATED = "template.created",
    TEMPLATE_UPDATED = "template.updated",
    TEMPLATE_ARCHIVED = "template.archived"
}
export type Field = {
    /**
     * Unique identifier of the field.
     */
    uuid: string;
    /**
     * Unique identifier of the submitter that filled the field.
     */
    submitter_uuid: string;
    /**
     * Field name.
     */
    name: string;
    /**
     * Type of the field (e.g., text, signature, date, initials).
     */
    type: FieldType;
    /**
     * Indicates if the field is required.
     */
    required: boolean;
    preferences?: FieldPreferences;
    /**
     * List of areas where the field is located in the document.
     */
    areas: Array<FieldArea>;
};
export declare enum FieldAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
export type FieldArea = {
    /**
     * X coordinate of the area where the field is located in the document.
     */
    x: number;
    /**
     * Y coordinate of the area where the field is located in the document.
     */
    y: number;
    /**
     * Width of the area where the field is located in the document.
     */
    w: number;
    /**
     * Height of the area where the field is located in the document.
     */
    h: number;
    /**
     * Unique identifier of the attached document where the field is located.
     */
    attachment_uuid: string;
    /**
     * Page number of the attached document where the field is located.
     */
    page: number;
};
export declare enum FieldFont {
    TIMES = "Times",
    HELVETICA = "Helvetica",
    COURIER = "Courier"
}
export declare enum FieldFontType {
    BOLD = "bold",
    ITALIC = "italic",
    BOLD_ITALIC = "bold_italic"
}
/**
 * Field display preferences.
 */
export type FieldPreferences = {
    /**
     * Font size of the field value in pixels.
     */
    font_size?: number | null;
    /**
     * Font type of the field value.
     */
    font_type?: string | null;
    /**
     * Font family of the field value.
     */
    font?: string | null;
    /**
     * Font color of the field value.
     */
    color?: string | null;
    /**
     * Field box background color.
     */
    background?: string | null;
    /**
     * Horizontal alignment of the field text value.
     */
    align?: string | null;
    /**
     * Vertical alignment of the field text value.
     */
    valign?: string | null;
    /**
     * The data format for different field types.
     */
    format?: string | null;
    /**
     * Price value of the payment field. Only for payment fields.
     */
    price?: number | null;
    /**
     * Currency value of the payment field. Only for payment fields.
     */
    currency?: string | null;
    /**
     * Indicates if the field is masked on the document.
     */
    mask?: boolean | null;
    /**
     * An array of signature reasons to choose from.
     */
    reasons?: Array<string> | null;
};
export declare enum FieldType {
    HEADING = "heading",
    TEXT = "text",
    SIGNATURE = "signature",
    INITIALS = "initials",
    DATE = "date",
    NUMBER = "number",
    IMAGE = "image",
    CHECKBOX = "checkbox",
    MULTIPLE = "multiple",
    FILE = "file",
    RADIO = "radio",
    SELECT = "select",
    CELLS = "cells",
    STAMP = "stamp",
    PAYMENT = "payment",
    PHONE = "phone",
    VERIFICATION = "verification",
    KBA = "kba",
    STRIKETHROUGH = "strikethrough"
}
export declare enum FieldValign {
    TOP = "top",
    CENTER = "center",
    BOTTOM = "bottom"
}
export type FieldValue = {
    /**
     * Document template field name.
     */
    field: string;
    /**
     * Pre-filled value of the field.
     */
    value: string | number | boolean | Array<string | number | boolean>;
};
export type FormCompletedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: FormData;
};
/**
 * Submitted form data object.
 */
export type FormData = {
    /**
     * The submitter's unique identifier.
     */
    id: number;
    /**
     * The unique submission identifier.
     */
    submission_id: number;
    /**
     * The submitter's email address.
     */
    email: string | null;
    /**
     * The submitter's phone number, formatted according to the E.164 standard.
     */
    phone: string | null;
    /**
     * The submitter's name.
     */
    name: string | null;
    /**
     * The user agent string that provides information about the submitter's web browser.
     */
    ua: string | null;
    /**
     * The submitter's IP address.
     */
    ip: string | null;
    /**
     * The date and time when the signing request was sent to the submitter.
     */
    sent_at: string | null;
    /**
     * The date and time when the submitter opened the signing form.
     */
    opened_at: string | null;
    /**
     * The date and time when the submitter completed the signing form.
     */
    completed_at: string | null;
    /**
     * The date and time when the submitter declined the signing form.
     */
    declined_at: string | null;
    /**
     * The reason provided by the submitter for declining the signing form.
     */
    decline_reason: string | null;
    /**
     * The date and time when the submitter was created.
     */
    created_at: string;
    /**
     * The date and time when the submitter was last updated.
     */
    updated_at: string;
    /**
     * Your application-specific unique string key to identify the submitter.
     */
    external_id: string | null;
    status: SubmitterStatus;
    /**
     * The role name of the submitter.
     */
    role: string;
    /**
     * Metadata object with additional submitter information.
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Submitter preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
    /**
     * An array of the filled values submitted by the submitter.
     */
    values: Array<FieldValue>;
    /**
     * An array of the completed documents.
     */
    documents: Array<Document>;
    /**
     * Audit log file URL.
     */
    audit_log_url: string | null;
    /**
     * The submission URL.
     */
    submission_url: string;
    template: TemplateSummary;
    submission: FormSubmission;
};
export type FormDeclinedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: FormData;
};
export type FormStartedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: FormData;
};
/**
 * Submission details of the form.
 */
export type FormSubmission = {
    /**
     * The submission unique identifier.
     */
    id: number;
    /**
     * Audit log file URL.
     */
    audit_log_url: string | null;
    /**
     * Combined PDF file URL with documents and Audit Log.
     */
    combined_document_url: string | null;
    status: SubmissionStatus;
    /**
     * The submission URL.
     */
    url: string;
    /**
     * Dynamic document content variables of the submission.
     */
    variables?: {
        [key: string]: unknown;
    };
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
};
export type FormViewedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: FormData;
};
export type MergeTemplateRequest = {
    /**
     * An array of template ids to merge into a new template.
     */
    template_ids: Array<number>;
    /**
     * Template name. Existing name with (Merged) suffix will be used if not specified.
     */
    name?: string;
    /**
     * The name of the folder in which the merged template should be placed.
     */
    folder_name?: string;
    /**
     * Your application-specific unique string key to identify this template within your app.
     */
    external_id?: string;
    /**
     * Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    /**
     * An array of submitter role names to be used in the merged template.
     */
    roles?: Array<string>;
};
export declare enum PageSize {
    LETTER = "Letter",
    LEGAL = "Legal",
    TABLOID = "Tabloid",
    LEDGER = "Ledger",
    A0 = "A0",
    A1 = "A1",
    A2 = "A2",
    A3 = "A3",
    A4 = "A4",
    A5 = "A5",
    A6 = "A6"
}
export type Pagination = {
    /**
     * Items count.
     */
    count: number;
    /**
     * The ID of the item after which the next page starts.
     */
    next: number | null;
    /**
     * The ID of the item before which the previous page ends.
     */
    prev: number | null;
};
export type SchemaDocument = {
    /**
     * Unique identifier of the attached document.
     */
    attachment_uuid: string;
    /**
     * Name of the attached document.
     */
    name: string;
};
export type Submission = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Name of the document submission.
     */
    name: string | null;
    /**
     * Unique slug of the submission.
     */
    slug: string;
    /**
     * The source of the submission.
     */
    source: SubmissionSource;
    /**
     * The order of submitters.
     */
    submitters_order: SubmittersOrder;
    /**
     * Audit log file URL.
     */
    audit_log_url: string | null;
    /**
     * Combined PDF file URL with documents and Audit Log.
     */
    combined_document_url: string | null;
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
    /**
     * The date and time when the submission was last updated.
     */
    updated_at: string;
    /**
     * The date and time when the submission was archived.
     */
    archived_at: string | null;
    /**
     * The date and time when the submission will expire and no longer be available for signing.
     */
    expire_at: string | null;
    /**
     * Dynamic content variables object used in dynamic template documents.
     */
    variables: {
        [key: string]: unknown;
    };
    /**
     * The list of submitters.
     */
    submitters: Array<SubmissionSubmitter>;
    template?: TemplateSummary;
    created_by_user?: User;
    /**
     * An array of events related to the submission.
     */
    submission_events: Array<SubmissionEvent>;
    /**
     * An array of completed or signed documents of the submission.
     */
    documents: Array<Document>;
    /**
     * The status of the submission.
     */
    status: SubmissionStatus;
    /**
     * The date and time when the submission was completed.
     */
    completed_at: string | null;
};
export type SubmissionArchivedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: SubmissionArchiveResult;
};
export type SubmissionArchiveResult = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Date and time when the submission was archived.
     */
    archived_at: string | null;
};
export type SubmissionCompletedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: Submission;
};
export type SubmissionCreatedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: Submission;
};
export type SubmissionCreateOneoffResult = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Submission name.
     */
    name: string;
    /**
     * The list of submitters.
     */
    submitters: Array<SubmitterCreateResult>;
    /**
     * The source of the submission.
     */
    source: SubmissionSource;
    /**
     * The order of submitters.
     */
    submitters_order: SubmittersOrder;
    /**
     * The status of the submission.
     */
    status: SubmissionStatus;
    /**
     * The one-off submission document files.
     */
    schema?: Array<SchemaDocument>;
    /**
     * List of fields to be filled in the one-off submission.
     */
    fields?: Array<Field>;
    /**
     * The date and time when the submission will expire and no longer be available for signing.
     */
    expire_at: string | null;
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
};
export type SubmissionDocuments = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * An array of completed or signed documents of the submission.
     */
    documents: Array<Document>;
};
export type SubmissionEvent = {
    /**
     * Submission event unique ID number.
     */
    id: number;
    /**
     * Unique identifier of the submitter that triggered the event.
     */
    submitter_id: number;
    /**
     * Event type.
     */
    event_type: SubmissionEventType;
    /**
     * Date and time when the event was triggered.
     */
    event_timestamp: string;
    /**
     * Additional event details object.
     */
    data?: {
        [key: string]: unknown;
    };
};
export declare enum SubmissionEventType {
    SEND_EMAIL = "send_email",
    BOUNCE_EMAIL = "bounce_email",
    COMPLAINT_EMAIL = "complaint_email",
    SEND_REMINDER_EMAIL = "send_reminder_email",
    SEND_SMS = "send_sms",
    SEND_2FA_SMS = "send_2fa_sms",
    OPEN_EMAIL = "open_email",
    CLICK_EMAIL = "click_email",
    CLICK_SMS = "click_sms",
    PHONE_VERIFIED = "phone_verified",
    START_FORM = "start_form",
    START_VERIFICATION = "start_verification",
    COMPLETE_VERIFICATION = "complete_verification",
    VIEW_FORM = "view_form",
    INVITE_PARTY = "invite_party",
    COMPLETE_FORM = "complete_form",
    DECLINE_FORM = "decline_form",
    API_COMPLETE_FORM = "api_complete_form"
}
export type SubmissionExpiredEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: Submission;
};
export type SubmissionList = {
    data: Array<SubmissionListItem>;
    pagination: Pagination;
};
export type SubmissionListItem = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Name of the document submission.
     */
    name: string | null;
    /**
     * The source of the submission.
     */
    source: SubmissionSource;
    /**
     * Unique slug of the submission.
     */
    slug: string;
    /**
     * The status of the submission.
     */
    status: SubmissionStatus;
    /**
     * The order of submitters.
     */
    submitters_order: SubmittersOrder;
    /**
     * Audit log file URL.
     */
    audit_log_url: string | null;
    /**
     * Combined PDF file URL with documents and Audit Log.
     */
    combined_document_url: string | null;
    /**
     * The date and time when the submission was completed.
     */
    completed_at: string | null;
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
    /**
     * The date and time when the submission was last updated.
     */
    updated_at: string;
    /**
     * The date and time when the submission was archived.
     */
    archived_at: string | null;
    /**
     * The date and time when the submission will expire and no longer be available for signing.
     */
    expire_at: string | null;
    /**
     * Dynamic content variables object used in dynamic template documents.
     */
    variables: {
        [key: string]: unknown;
    };
    /**
     * The list of submitters.
     */
    submitters: Array<SubmitterSummary>;
    template?: TemplateSummary;
    created_by_user?: User;
};
export declare enum SubmissionSource {
    INVITE = "invite",
    BULK = "bulk",
    API = "api",
    EMBED = "embed",
    LINK = "link"
}
export declare enum SubmissionStatus {
    COMPLETED = "completed",
    DECLINED = "declined",
    EXPIRED = "expired",
    PENDING = "pending"
}
export type SubmissionSubmitter = {
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission unique ID number.
     */
    submission_id: number;
    /**
     * Submitter UUID.
     */
    uuid: string;
    /**
     * The email address of the submitter.
     */
    email: string | null;
    /**
     * Unique key to be used in the form signing link and embedded form.
     */
    slug: string;
    /**
     * The date and time when the signing request was sent to the submitter.
     */
    sent_at: string | null;
    /**
     * The date and time when the submitter opened the signing form.
     */
    opened_at: string | null;
    /**
     * The date and time when the submitter completed the signing form.
     */
    completed_at: string | null;
    /**
     * The date and time when the submitter declined the signing form.
     */
    declined_at: string | null;
    /**
     * The date and time when the submitter was created.
     */
    created_at: string;
    /**
     * The date and time when the submitter was last updated.
     */
    updated_at: string;
    /**
     * The name of the submitter.
     */
    name: string | null;
    /**
     * The phone number of the submitter.
     */
    phone: string | null;
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id: string | null;
    /**
     * The status of signing request for the submitter.
     */
    status: SubmitterStatus;
    /**
     * An array of pre-filled values for the submitter.
     */
    values: Array<FieldValue>;
    /**
     * An array of completed or signed documents by the submitter.
     */
    documents: Array<Document>;
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * Metadata object with additional submitter information.
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * Submitter preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
};
export type SubmissionUpdateResult = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Name of the document submission.
     */
    name: string | null;
    /**
     * Unique slug of the submission.
     */
    slug: string;
    /**
     * The source of the submission.
     */
    source: SubmissionSource;
    /**
     * The order of submitters.
     */
    submitters_order: SubmittersOrder;
    /**
     * Audit log file URL.
     */
    audit_log_url: string | null;
    /**
     * Combined PDF file URL with documents and Audit Log.
     */
    combined_document_url: string | null;
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
    /**
     * The date and time when the submission was last updated.
     */
    updated_at: string;
    /**
     * The date and time when the submission was archived.
     */
    archived_at: string | null;
    /**
     * The date and time when the submission will expire and no longer be available for signing.
     */
    expire_at: string | null;
    /**
     * Dynamic content variables object used in dynamic template documents.
     */
    variables: {
        [key: string]: unknown;
    };
    /**
     * The list of submitters.
     */
    submitters: Array<SubmissionSubmitter>;
    template?: TemplateSummary;
    created_by_user?: User;
    /**
     * An array of completed or signed documents of the submission.
     */
    documents: Array<Document>;
    /**
     * The status of the submission.
     */
    status: SubmissionStatus;
    /**
     * The date and time when the submission was completed.
     */
    completed_at: string | null;
};
export type Submitter = {
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission unique ID number.
     */
    submission_id: number;
    /**
     * Submitter UUID.
     */
    uuid: string;
    /**
     * The email address of the submitter.
     */
    email: string | null;
    /**
     * Unique key to be used in the form signing link and embedded form.
     */
    slug: string;
    /**
     * The date and time when the signing request was sent to the submitter.
     */
    sent_at: string | null;
    /**
     * The date and time when the submitter opened the signing form.
     */
    opened_at: string | null;
    /**
     * The date and time when the submitter completed the signing form.
     */
    completed_at: string | null;
    /**
     * The date and time when the submitter declined the signing form.
     */
    declined_at: string | null;
    /**
     * The date and time when the submitter was created.
     */
    created_at: string;
    /**
     * The date and time when the submitter was last updated.
     */
    updated_at: string;
    /**
     * The name of the submitter.
     */
    name: string | null;
    /**
     * The phone number of the submitter.
     */
    phone: string | null;
    /**
     * The status of signing request for the submitter.
     */
    status: SubmitterStatus;
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id: string | null;
    /**
     * Metadata object with additional submitter information.
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * Submitter preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
    template: SubmitterTemplate;
    /**
     * An array of events related to the submission.
     */
    submission_events: Array<SubmissionEvent>;
    /**
     * An array of pre-filled values for the submitter.
     */
    values: Array<FieldValue>;
    /**
     * An array of completed or signed documents by the submitter.
     */
    documents: Array<Document>;
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
};
export type SubmitterCreateResult = {
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission unique ID number.
     */
    submission_id: number;
    /**
     * Submitter UUID.
     */
    uuid: string;
    /**
     * The email address of the submitter.
     */
    email: string | null;
    /**
     * Unique key to be used in the form signing link and embedded form.
     */
    slug: string;
    /**
     * The status of signing request for the submitter.
     */
    status: SubmitterStatus;
    /**
     * An array of pre-filled values for the submitter.
     */
    values: Array<FieldValue>;
    /**
     * Metadata object with additional submitter information.
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * The date and time when the signing request was sent to the submitter.
     */
    sent_at: string | null;
    /**
     * The date and time when the submitter opened the signing form.
     */
    opened_at: string | null;
    /**
     * The date and time when the submitter completed the signing form.
     */
    completed_at: string | null;
    /**
     * The date and time when the submitter declined the signing form.
     */
    declined_at: string | null;
    /**
     * The date and time when the submitter was created.
     */
    created_at: string;
    /**
     * The date and time when the submitter was last updated.
     */
    updated_at: string;
    /**
     * The name of the submitter.
     */
    name: string | null;
    /**
     * The phone number of the submitter.
     */
    phone: string | null;
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id: string | null;
    /**
     * Submitter preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * The `src` URL value to embed the signing form or sign via a link.
     */
    embed_src: string;
};
export type SubmitterList = {
    data?: Array<Submitter>;
    pagination?: Pagination;
};
export declare enum SubmittersOrder {
    RANDOM = "random",
    PRESERVED = "preserved"
}
export declare enum SubmitterStatus {
    COMPLETED = "completed",
    DECLINED = "declined",
    OPENED = "opened",
    SENT = "sent",
    AWAITING = "awaiting"
}
export type SubmitterSummary = {
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission unique ID number.
     */
    submission_id: number;
    /**
     * Submitter UUID.
     */
    uuid: string;
    /**
     * The email address of the submitter.
     */
    email: string | null;
    /**
     * Unique key to be used in the form signing link and embedded form.
     */
    slug: string;
    /**
     * The date and time when the signing request was sent to the submitter.
     */
    sent_at: string | null;
    /**
     * The date and time when the submitter opened the signing form.
     */
    opened_at: string | null;
    /**
     * The date and time when the submitter completed the signing form.
     */
    completed_at: string | null;
    /**
     * The date and time when the submitter declined the signing form.
     */
    declined_at: string | null;
    /**
     * The date and time when the submitter was created.
     */
    created_at: string;
    /**
     * The date and time when the submitter was last updated.
     */
    updated_at: string;
    /**
     * The name of the submitter.
     */
    name: string | null;
    /**
     * The phone number of the submitter.
     */
    phone: string | null;
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id: string | null;
    /**
     * The status of signing request for the submitter.
     */
    status: SubmitterStatus;
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * Metadata object with additional submitter information.
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * Submitter preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
};
/**
 * Base template details.
 */
export type SubmitterTemplate = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * The date and time when the template was created.
     */
    created_at: string;
    /**
     * The date and time when the template was last updated.
     */
    updated_at: string;
};
export type SubmitterUpdateResult = {
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission unique ID number.
     */
    submission_id: number;
    /**
     * Submitter UUID.
     */
    uuid: string;
    /**
     * The email address of the submitter.
     */
    email: string | null;
    /**
     * Unique key to be used in the form signing link and embedded form.
     */
    slug: string;
    /**
     * The date and time when the signing request was sent to the submitter.
     */
    sent_at: string | null;
    /**
     * The date and time when the submitter opened the signing form.
     */
    opened_at: string | null;
    /**
     * The date and time when the submitter completed the signing form.
     */
    completed_at: string | null;
    /**
     * The date and time when the submitter declined the signing form.
     */
    declined_at: string | null;
    /**
     * The date and time when the submitter was created.
     */
    created_at: string;
    /**
     * The date and time when the submitter was last updated.
     */
    updated_at: string;
    /**
     * The name of the submitter.
     */
    name: string | null;
    /**
     * The phone number of the submitter.
     */
    phone: string | null;
    /**
     * The status of signing request for the submitter.
     */
    status: SubmitterStatus;
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id: string | null;
    /**
     * Metadata object with additional submitter information.
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * Submitter preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
    /**
     * An array of pre-filled values for the submitter.
     */
    values: Array<FieldValue>;
    /**
     * An array of completed or signed documents by the submitter.
     */
    documents: Array<Document>;
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * The `src` URL value to embed the signing form or sign via a link.
     */
    embed_src: string;
};
export type Template = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * Template preferences.
     */
    preferences: {
        [key: string]: unknown;
    };
    /**
     * List of documents attached to the template.
     */
    schema: Array<SchemaDocument>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<Field>;
    /**
     * Schema of the dynamic document content variables used in the template.
     */
    variables_schema: {
        [key: string]: unknown;
    };
    /**
     * The list of submitters for the template.
     */
    submitters: Array<TemplateSubmitter>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * The date and time when the template was created.
     */
    created_at: string;
    /**
     * The date and time when the template was last updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: TemplateSource;
    /**
     * Your application-specific unique string key to identify this template within your app.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is located.
     */
    folder_id: number;
    /**
     * Folder name where the template is located.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: User;
    /**
     * List of documents attached to the template.
     */
    documents: Array<TemplateDocument>;
};
export type TemplateArchivedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: TemplateArchiveResult;
};
export type TemplateArchiveResult = {
    /**
     * Template unique ID number.
     */
    id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
};
export type TemplateCreatedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: Template;
};
export type TemplateDocument = {
    /**
     * Unique identifier of the document.
     */
    id: number;
    /**
     * Unique identifier of the document.
     */
    uuid: string;
    /**
     * URL of the document.
     */
    url: string;
    /**
     * Document preview image URL.
     */
    preview_image_url: string;
    /**
     * Document filename.
     */
    filename: string;
};
export type TemplateList = {
    /**
     * List of templates.
     */
    data: Array<Template>;
    pagination: Pagination;
};
export declare enum TemplateSource {
    NATIVE = "native",
    API = "api",
    EMBED = "embed"
}
export type TemplateSubmitter = {
    /**
     * The name of the submitter.
     */
    name: string;
    /**
     * Unique identifier of the submitter.
     */
    uuid: string;
};
export type TemplateSummary = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * Your application-specific unique string key to identify this template within your app.
     */
    external_id: string | null;
    /**
     * Folder name where the template is located.
     */
    folder_name: string;
    /**
     * The date and time when the template was created.
     */
    created_at: string;
    /**
     * The date and time when the template was last updated.
     */
    updated_at: string;
};
export type TemplateUpdatedEvent = {
    /**
     * The event type.
     */
    event_type: string;
    /**
     * The event timestamp.
     */
    timestamp: string;
    data: Template;
};
export type TemplateUpdateResult = {
    /**
     * Template unique ID number.
     */
    id: number;
    /**
     * Date and time when the template was last updated.
     */
    updated_at: string;
};
export type UpdateSubmissionRequest = {
    /**
     * The name of the submission.
     */
    name?: string;
    /**
     * The date and time when the submission will expire and no longer be available. Pass `null` to remove the expiration.
     */
    expire_at?: string;
    /**
     * Set `true` to archive the submission or `false` to unarchive it.
     */
    archived?: boolean;
};
export type UpdateSubmitterFieldParams = {
    /**
     * Document template field name.
     */
    name: string;
    default_value?: DefaultValue;
    /**
     * Set `true` to make it impossible for the submitter to edit predefined field value.
     */
    readonly?: boolean;
    /**
     * Set `true` to make the field required.
     */
    required?: boolean;
    validation?: UpdateSubmitterFieldValidationParams;
    preferences?: UpdateSubmitterFieldPreferencesParams;
};
/**
 * Field display preferences.
 */
export type UpdateSubmitterFieldPreferencesParams = {
    /**
     * Font size of the field value in pixels.
     */
    font_size?: number;
    /**
     * Font type of the field value.
     */
    font_type?: FieldFontType;
    /**
     * Font family of the field value.
     */
    font?: FieldFont;
    /**
     * Font color of the field value.
     */
    color?: string;
    /**
     * Field box background color.
     */
    background?: string;
    /**
     * Horizontal alignment of the field text value.
     */
    align?: FieldAlign;
    /**
     * Vertical alignment of the field text value.
     */
    valign?: FieldValign;
    /**
     * The data format for different field types.<br>- Date field: accepts formats such as DD/MM/YYYY (default: MM/DD/YYYY).<br>- Signature field: accepts drawn, typed, drawn_or_typed (default), or upload.<br>- Number field: accepts currency formats such as usd, eur, gbp.
     */
    format?: string;
    /**
     * Price value of the payment field. Only for payment fields.
     */
    price?: number;
    /**
     * Currency value of the payment field. Only for payment fields.
     */
    currency?: Currency;
    /**
     * Set `true` to make sensitive data masked on the document.
     */
    mask?: number | boolean;
    /**
     * An array of signature reasons to choose from.
     */
    reasons?: Array<string>;
};
/**
 * Field validation rules.
 */
export type UpdateSubmitterFieldValidationParams = {
    /**
     * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
     */
    pattern?: string;
    /**
     * A custom error message to display on validation failure.
     */
    message?: string;
    /**
     * Minimum allowed number value or date depending on field type.
     */
    min?: number | string;
    /**
     * Maximum allowed number value or date depending on field type.
     */
    max?: number | string;
    /**
     * Increment step for number field. Pass 1 to accept only integers, or 0.01 to accept decimal currency.
     */
    step?: number;
};
/**
 * Custom signature request email message.
 */
export type UpdateSubmitterMessageParams = {
    /**
     * Custom signature request email subject.
     */
    subject?: string;
    /**
     * Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.
     */
    body?: string;
};
export type UpdateSubmitterRequest = {
    /**
     * The name of the submitter.
     */
    name?: string;
    /**
     * The email address of the submitter.
     */
    email?: string;
    /**
     * The phone number of the submitter, formatted according to the E.164 standard.
     */
    phone?: string;
    /**
     * An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see `fields` param.
     */
    values?: {
        [key: string]: unknown;
    };
    /**
     * Your application-specific unique string key to identify this submitter within your app.
     */
    external_id?: string;
    /**
     * Set `true` to re-send signature request emails.
     */
    send_email?: boolean;
    /**
     * Set `true` to re-send signature request via phone number SMS.
     */
    send_sms?: boolean;
    /**
     * Specify Reply-To address to use in the notification emails.
     */
    reply_to?: string;
    /**
     * Pass `true` to mark submitter as completed and auto-signed via API.
     */
    completed?: boolean;
    /**
     * Metadata object with additional submitter information.
     */
    metadata?: {
        [key: string]: unknown;
    };
    /**
     * Submitter specific URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
    /**
     * Set to `true` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.
     */
    require_phone_2fa?: boolean;
    /**
     * Set to `true` to require email 2FA verification via a one-time code sent to the email address in order to access the documents.
     */
    require_email_2fa?: boolean;
    message?: UpdateSubmitterMessageParams;
    /**
     * A list of configurations for template document form fields.
     */
    fields?: Array<UpdateSubmitterFieldParams>;
};
export type UpdateTemplateDocumentsDocumentParams = {
    /**
     * Document name. Random uuid will be assigned when not specified.
     */
    name?: string;
    /**
     * Base64-encoded content of the PDF or DOCX file or downloadable file URL. Leave it empty if you create a new document using HTML param.
     */
    file?: string;
    /**
     * HTML template with field tags. Leave it empty if you add a document via PDF or DOCX base64 encoded file param or URL.
     */
    html?: string;
    /**
     * Position of the document. By default will be added as the last document in the template.
     */
    position?: number;
    /**
     * Set to `true` to replace existing document with a new file at `position`. Existing document fields will be transferred to the new document if it doesn't contain any fields.
     */
    replace?: boolean;
    /**
     * Set to `true` to remove existing document at given `position` or with given `name`.
     */
    remove?: boolean;
};
export type UpdateTemplateDocumentsRequest = {
    /**
     * The list of documents to add or replace in the template.
     */
    documents?: Array<UpdateTemplateDocumentsDocumentParams>;
    /**
     * Set to `true` to merge all existing and new documents into a single PDF document in the template.
     */
    merge?: boolean;
};
export type UpdateTemplateRequest = {
    /**
     * The name of the template.
     */
    name?: string;
    /**
     * The folder's name to which the template should be moved.
     */
    folder_name?: string;
    /**
     * An array of submitter role names to update the template with.
     */
    roles?: Array<string>;
    /**
     * Set `false` to unarchive template.
     */
    archived?: boolean;
};
export type User = {
    /**
     * Unique identifier of the user.
     */
    id: number;
    /**
     * The first name of the user.
     */
    first_name: string;
    /**
     * The last name of the user.
     */
    last_name: string;
    /**
     * The email address of the user.
     */
    email: string;
};
export type GetTemplatesQuery = {
    /**
     * The unique identifier of the template to start the list from. It allows you to receive only templates with an ID greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of templates.
     */
    after?: number;
    /**
     * List only archived templates instead of active ones.
     */
    archived?: boolean;
    /**
     * The unique identifier of the template to end the list with. It allows you to receive only templates with an ID less than the specified value.
     */
    before?: number;
    /**
     * The unique application-specific identifier provided for the template via API or Embedded template form builder. It allows you to receive only templates with your specified external ID.
     */
    external_id?: string;
    /**
     * Filter templates by folder name.
     */
    folder?: string;
    /**
     * The number of templates to return. Default value is 10. Maximum value is 100.
     */
    limit?: number;
    /**
     * Filter templates based on the name partial match.
     */
    q?: string;
    /**
     * List templates shared with test mode.
     */
    shared?: boolean;
    /**
     * Filter templates by unique slug.
     */
    slug?: string;
};
export type GetTemplatesResponse = TemplateList;
export type GetTemplateResponse = Template;
export type ArchiveTemplateResponse = TemplateArchiveResult;
export type UpdateTemplateData = UpdateTemplateRequest;
export type UpdateTemplateResponse = TemplateUpdateResult;
export type GetSubmissionsQuery = {
    /**
     * The unique identifier of the submission to start the list from. It allows you to receive only submissions with an ID greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of submissions.
     */
    after?: number;
    /**
     * Returns only archived submissions when `true` and only active submissions when `false`.
     */
    archived?: boolean;
    /**
     * The unique identifier of the submission that marks the end of the list. It allows you to receive only submissions with an ID less than the specified value.
     */
    before?: number;
    /**
     * The number of submissions to return. Default value is 10. Maximum value is 100.
     */
    limit?: number;
    /**
     * Filter submissions based on submitter's name, email or phone partial match.
     */
    q?: string;
    /**
     * Filter submissions by unique slug.
     */
    slug?: string;
    /**
     * Filter submissions by status.
     */
    status?: SubmissionStatus;
    /**
     * Filter submissions by template folder name.
     */
    template_folder?: string;
    /**
     * The template ID allows you to receive only the submissions created from that specific template.
     */
    template_id?: number;
};
export type GetSubmissionsResponse = SubmissionList;
export type CreateSubmissionData = CreateSubmissionRequest;
export type CreateSubmissionResponse = Array<SubmitterCreateResult>;
export type GetSubmissionResponse = Submission;
export type ArchiveSubmissionResponse = SubmissionArchiveResult;
export type UpdateSubmissionData = UpdateSubmissionRequest;
export type UpdateSubmissionResponse = SubmissionUpdateResult;
export type GetSubmissionDocumentsQuery = {
    /**
     * When `true`, merges all documents into a single PDF.
     */
    merge?: boolean;
};
export type GetSubmissionDocumentsResponse = SubmissionDocuments;
export type CreateSubmissionsFromEmailsData = CreateSubmissionsFromEmailsRequest;
export type CreateSubmissionsFromEmailsResponse = Array<SubmitterCreateResult>;
export type CreateSubmissionFromPdfData = CreateSubmissionFromPdfRequest;
export type CreateSubmissionFromPdfResponse = SubmissionCreateOneoffResult;
export type CreateSubmissionFromDocxData = CreateSubmissionFromDocxRequest;
export type CreateSubmissionFromDocxResponse = SubmissionCreateOneoffResult;
export type CreateSubmissionFromHtmlData = CreateSubmissionFromHtmlRequest;
export type CreateSubmissionFromHtmlResponse = SubmissionCreateOneoffResult;
export type GetSubmitterResponse = Submitter;
export type UpdateSubmitterData = UpdateSubmitterRequest;
export type UpdateSubmitterResponse = SubmitterUpdateResult;
export type GetSubmittersQuery = {
    /**
     * The unique identifier of the submitter to start the list from. It allows you to receive only submitters with an ID greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of submitters.
     */
    after?: number;
    /**
     * The unique identifier of the submitter to end the list with. It allows you to receive only submitters with an ID less than the specified value.
     */
    before?: number;
    /**
     * The date and time string value to filter submitters that completed the submission after the specified date and time.
     */
    completed_after?: string;
    /**
     * The date and time string value to filter submitters that completed the submission before the specified date and time.
     */
    completed_before?: string;
    /**
     * The unique application-specific identifier provided for a submitter when initializing a signature request. It allows you to receive only submitters with a specified external ID.
     */
    external_id?: string;
    /**
     * The number of submitters to return. Default value is 10. Maximum value is 100.
     */
    limit?: number;
    /**
     * Filter submitters on name, email or phone partial match.
     */
    q?: string;
    /**
     * Filter submitters by unique slug.
     */
    slug?: string;
    /**
     * The submission ID allows you to receive only the submitters related to that specific submission.
     */
    submission_id?: number;
};
export type GetSubmittersResponse = SubmitterList;
export type UpdateTemplateDocumentsData = UpdateTemplateDocumentsRequest;
export type UpdateTemplateDocumentsResponse = Template;
export type CloneTemplateData = CloneTemplateRequest;
export type CloneTemplateResponse = Template;
export type CreateTemplateFromHtmlData = CreateTemplateFromHtmlRequest;
export type CreateTemplateFromHtmlResponse = Template;
export type CreateTemplateFromDocxData = CreateTemplateFromDocxRequest;
export type CreateTemplateFromDocxResponse = Template;
export type CreateTemplateFromPdfData = CreateTemplateFromPdfRequest;
export type CreateTemplateFromPdfResponse = Template;
export type MergeTemplateData = MergeTemplateRequest;
export type MergeTemplateResponse = Template;
