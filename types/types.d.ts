export type GetTemplatesQuery = {
    /**
     * The unique identifier of the template to start the list from. It allows you to receive only templates with id greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of templates.
     */
    after?: number;
    /**
     * Get only archived templates instead of active ones.
     */
    archived?: boolean;
    /**
     * The unique identifier of the template to end the list with. It allows you to receive only templates with id less than the specified value.
     */
    before?: number;
    /**
     * The unique applications-specific identifier provided for the template via API or Embedded template form builder. It allows you to receive only templates with your specified external id.
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
     * Filter templates by unique slug.
     */
    slug?: string;
};
export type GetTemplatesResponse = {
    /**
     * List of templates.
     */
    data: Array<{
        /**
         * Unique identifier of the document template.
         */
        id: number;
        /**
         * Unique slug of the document template.
         */
        slug: string;
        /**
         * Name of the template.
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
        schema: Array<{
            /**
             * Unique indentifier of attached document to the template.
             */
            attachment_uuid: string;
            /**
             * Name of the attached document to the template.
             */
            name: string;
        }>;
        /**
         * List of fields to be filled in the template.
         */
        fields: Array<{
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
            type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
            /**
             * Indicates if the field is required.
             */
            required: boolean;
            preferences?: {
                /**
                 * Font size of the field value in pixels.
                 */
                font_size?: number;
                /**
                 * Font type of the field value.
                 */
                font_type?: string;
                /**
                 * Font family of the field value.
                 */
                font?: string;
                /**
                 * Font color of the field value.
                 */
                color?: string;
                /**
                 * Horizontal alignment of the field text value.
                 */
                align?: string;
                /**
                 * Vertical alignment of the field text value.
                 */
                valign?: string;
                /**
                 * The data format for different field types.
                 */
                format?: string;
                /**
                 * Price value of the payment field. Only for payment fields.
                 */
                price?: number;
                /**
                 * Currency value of the payment field. Only for payment fields.
                 */
                currency?: string;
                /**
                 * Indicates if the field is masked on the document.
                 */
                mask?: boolean;
            };
            /**
             * List of areas where the field is located in the document.
             */
            areas: Array<{
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
            }>;
        }>;
        submitters: Array<{
            /**
             * Submitter name.
             */
            name: string;
            /**
             * Unique identifier of the submitter.
             */
            uuid: string;
        }>;
        /**
         * Unique identifier of the author of the template.
         */
        author_id: number;
        /**
         * Date and time when the template was archived.
         */
        archived_at?: string | null;
        /**
         * Date and time when the template was created.
         */
        created_at: string;
        /**
         * Date and time when the template was updated.
         */
        updated_at: string;
        /**
         * Source of the template.
         */
        source: "native" | "api" | "embed";
        /**
         * Identifier of the template in the external system.
         */
        external_id: string | null;
        /**
         * Unique identifier of the folder where the template is placed.
         */
        folder_id: number;
        /**
         * Folder name where the template is placed.
         */
        folder_name: string;
        /**
         * Indicates if the template is accessible by link.
         */
        shared_link?: boolean;
        author: {
            /**
             * Unique identifier of the author.
             */
            id: number;
            /**
             * First name of the author.
             */
            first_name: string;
            /**
             * Last name of the author.
             */
            last_name: string;
            /**
             * Author email.
             */
            email: string;
        };
        /**
         * List of documents attached to the template.
         */
        documents: Array<{
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
        }>;
    }>;
    pagination: {
        /**
         * Templates count.
         */
        count: number;
        /**
         * The ID of the tempate after which the next page starts.
         */
        next: number | null;
        /**
         * The ID of the tempate before which the previous page ends.
         */
        prev: number | null;
    };
};
export type GetTemplateResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
export type ArchiveTemplateResponse = {
    /**
     * Template unique ID number.
     */
    id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
};
export type UpdateTemplateData = {
    /**
     * The name of the template
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
export type UpdateTemplateResponse = {
    /**
     * Template unique ID number.
     */
    id: number;
    /**
     * Date and time when the template was last updated.
     */
    updated_at: string;
};
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
     * Filter submissions based on submitters name, email or phone partial match.
     */
    q?: string;
    /**
     * Filter submissions by unique slug.
     */
    slug?: string;
    /**
     * Filter submissions by status.
     */
    status?: "pending" | "completed" | "declined" | "expired";
    /**
     * Filter submissions by template folder name.
     */
    template_folder?: string;
    /**
     * The template ID allows you to receive only the submissions created from that specific template.
     */
    template_id?: number;
};
export type GetSubmissionsResponse = {
    data: Array<{
        /**
         * Submission unique ID number.
         */
        id: number;
        /**
         * Name of the document submission
         */
        name?: string;
        /**
         * The source of the submission.
         */
        source: "invite" | "bulk" | "api" | "embed" | "link";
        /**
         * Unique slug of the submission.
         */
        slug: string;
        /**
         * The status of the submission.
         */
        status: "completed" | "declined" | "expired" | "pending";
        /**
         * The order of submitters.
         */
        submitters_order: "random" | "preserved";
        /**
         * Audit log file URL.
         */
        audit_log_url: string | null;
        /**
         * Combined PDF file URL with documents and Audit Log.
         */
        combined_document_url?: string | null;
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
        archived_at?: string | null;
        /**
         * The list of submitters.
         */
        submitters: Array<{
            /**
             * Submission unique ID number.
             */
            id: number;
            /**
             * Submission ID number.
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
             * The date and time when the submitter declined to complete the signing form.
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
             * Submitter name.
             */
            name: string | null;
            /**
             * Submitter phone number.
             */
            phone: string | null;
            /**
             * Your application-specific unique string key to identify this submitter within your app.
             */
            external_id?: string | null;
            /**
             * The status of signing request for the submitter.
             */
            status: "completed" | "declined" | "opened" | "sent" | "awaiting";
            /**
             * The role of the submitter.
             */
            role: string;
            /**
             * Metadata object with additional submitter information.
             */
            metadata: {
                [key: string]: unknown;
            };
            /**
             * Object with submitter preferences.
             */
            preferences: {
                [key: string]: unknown;
            };
        }>;
        template?: {
            /**
             * Template unique ID number.
             */
            id: number;
            /**
             * The name of the submission template.
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
             * The date and time when the submission template was created.
             */
            created_at: string;
            /**
             * The date and time when the submission template was last updated.
             */
            updated_at: string;
        };
        created_by_user: {
            /**
             * Unique identifier of the user who created the submission.
             */
            id: number;
            /**
             * The first name of the user who created the submission.
             */
            first_name: string;
            /**
             * The last name of the user who created the submission.
             */
            last_name: string;
            /**
             * The email address of the user who created the submission.
             */
            email: string;
        } | null;
    }>;
    pagination: {
        /**
         * Submissions count.
         */
        count: number;
        /**
         * The ID of the submission after which the next page starts.
         */
        next: number | null;
        /**
         * The ID of the submission before which the previous page ends.
         */
        prev: number | null;
    };
};
export type CreateSubmissionData = {
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
    order?: "preserved" | "random";
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
    message?: {
        /**
         * Custom signature request email subject.
         */
        subject?: string;
        /**
         * Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.
         */
        body?: string;
    };
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<{
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
        email: string;
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
        message?: {
            /**
             * Custom signature request email subject for the submitter.
             */
            subject?: string;
            /**
             * Custom signature request email body for the submitter. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.
             */
            body?: string;
        };
        /**
         * A list of configurations for template document form fields.
         */
        fields?: Array<{
            /**
             * Document template field name.
             */
            name: string;
            /**
             * Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.
             */
            default_value?: string | number | boolean | Array<string | number | boolean>;
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
            /**
             * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
             */
            validation_pattern?: string;
            /**
             * A custom message to display on pattern validation failure.
             */
            invalid_message?: string;
            preferences?: {
                /**
                 * Font size of the field value in pixels.
                 */
                font_size?: number;
                /**
                 * Font type of the field value.
                 */
                font_type?: "bold" | "italic" | "bold_italic";
                /**
                 * Font family of the field value.
                 */
                font?: "Times" | "Helvetica" | "Courier";
                /**
                 * Font color of the field value.
                 */
                color?: "black" | "white" | "blue";
                /**
                 * Horizontal alignment of the field text value.
                 */
                align?: "left" | "center" | "right";
                /**
                 * Vertical alignment of the field text value.
                 */
                valign?: "top" | "center" | "bottom";
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
                currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
                /**
                 * Set `true` to make sensitive data masked on the document.
                 */
                mask?: number | boolean;
            };
        }>;
        /**
         * A list of roles for the submitter. Use this param to merge multiple roles into one submitter.
         */
        roles?: Array<string>;
    }>;
};
export type CreateSubmissionResponse = Array<{
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission UUID.
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
     * Unique key to be used in the signing form URL.
     */
    slug: string;
    /**
     * The status of signing request for the submitter.
     */
    status: "completed" | "declined" | "opened" | "sent" | "awaiting";
    /**
     * An array of pre-filled values for the submission.
     */
    values: Array<{
        /**
         * Document template field name.
         */
        field: string;
        /**
         * Pre-filled value of the field.
         */
        value: string | number | boolean | Array<string | number | boolean>;
    }>;
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
    preferences: {
        /**
         * Indicates whether the signature request email should be sent.
         */
        send_email?: boolean;
        /**
         * Indicates whether the signature request should be sent via SMS.
         */
        send_sms?: boolean;
    };
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * The `src` URL value to embed the signing form or sign via a link.
     */
    embed_src: string;
}>;
export type GetSubmissionResponse = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Name of the document submission
     */
    name?: string;
    /**
     * Unique slug of the submission.
     */
    slug: string;
    /**
     * The source of the submission.
     */
    source: "invite" | "bulk" | "api" | "embed" | "link";
    /**
     * The order of submitters.
     */
    submitters_order: "random" | "preserved";
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
     * The list of submitters.
     */
    submitters: Array<{
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
         * Submitter name.
         */
        name: string | null;
        /**
         * Submitter phone number.
         */
        phone: string | null;
        /**
         * Your application-specific unique string key to identify this submitter within your app.
         */
        external_id: string | null;
        /**
         * The status of signing request for the submitter.
         */
        status: "completed" | "declined" | "opened" | "sent" | "awaiting";
        /**
         * An array of field values for the submitter.
         */
        values: Array<{
            /**
             * Document template field name.
             */
            field: string;
            /**
             * Pre-filled value of the field.
             */
            value: string | number | boolean | Array<string | number | boolean>;
        }>;
        /**
         * An array of completed or signed documents by the submitter.
         */
        documents: Array<{
            /**
             * Document name.
             */
            name: string;
            /**
             * Document URL.
             */
            url: string;
        }>;
        /**
         * The role of the submitter in the signing process.
         */
        role: string;
    }>;
    template?: {
        /**
         * Template unique ID number.
         */
        id: number;
        /**
         * The name of the submission template.
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
         * The date and time when the submission template was created.
         */
        created_at: string;
        /**
         * The date and time when the submission template was last updated.
         */
        updated_at: string;
    };
    created_by_user: {
        /**
         * Unique identifier of the user who created the submission.
         */
        id: number;
        /**
         * The first name of the user who created the submission.
         */
        first_name: string;
        /**
         * The last name of the user who created the submission.
         */
        last_name: string;
        /**
         * The email address of the user who created the submission.
         */
        email: string;
    } | null;
    submission_events: Array<{
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
        event_type: "send_email" | "bounce_email" | "complaint_email" | "send_reminder_email" | "send_sms" | "send_2fa_sms" | "open_email" | "click_email" | "click_sms" | "phone_verified" | "start_form" | "start_verification" | "complete_verification" | "view_form" | "invite_party" | "complete_form" | "decline_form" | "api_complete_form";
        /**
         * Date and time when the event was triggered.
         */
        event_timestamp: string;
    }>;
    /**
     * An array of completed or signed documents of the submission.
     */
    documents: Array<{
        /**
         * Document name.
         */
        name: string;
        /**
         * Document URL.
         */
        url: string;
    }>;
    /**
     * The status of the submission.
     */
    status: "completed" | "declined" | "expired" | "pending";
    /**
     * Object with custom metadata.
     */
    metadata: {
        [key: string]: unknown;
    };
    /**
     * The date and time when the submission was fully completed.
     */
    completed_at: string | null;
};
export type ArchiveSubmissionResponse = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Date and time when the submission was archived.
     */
    archived_at: string | null;
};
export type GetSubmissionDocumentsResponse = {
    /**
     * Submission unique ID number.
     */
    id: number;
    documents: Array<{
        /**
         * Document name.
         */
        name: string;
        /**
         * Document URL.
         */
        url: string;
    }>;
};
export type CreateSubmissionsFromEmailsData = {
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
    message?: {
        /**
         * Custom signature request email subject.
         */
        subject?: string;
        /**
         * Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.
         */
        body?: string;
    };
};
export type CreateSubmissionsFromEmailsResponse = Array<{
    /**
     * Submitter unique ID number.
     */
    id: number;
    /**
     * Submission UUID.
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
     * Unique key to be used in the signing form URL.
     */
    slug: string;
    /**
     * The status of signing request for the submitter.
     */
    status: "completed" | "declined" | "opened" | "sent" | "awaiting";
    /**
     * An array of pre-filled values for the submission.
     */
    values: Array<{
        /**
         * Document template field name.
         */
        field: string;
        /**
         * Pre-filled value of the field.
         */
        value: string | number | boolean | Array<string | number | boolean>;
    }>;
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
    preferences: {
        /**
         * Indicates whether the signature request email should be sent.
         */
        send_email?: boolean;
        /**
         * Indicates whether the signature request should be sent via SMS.
         */
        send_sms?: boolean;
    };
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * The `src` URL value to embed the signing form or sign via a link.
     */
    embed_src: string;
}>;
export type CreateSubmissionFromPdfData = {
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
    order?: "preserved" | "random";
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
    documents: Array<{
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
        fields?: Array<{
            /**
             * Name of the field.
             */
            name?: string;
            /**
             * Type of the field (e.g., text, signature, date, initials).
             */
            type?: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
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
            areas?: Array<{
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
            }>;
            /**
             * An array of option values for 'select' field type.
             */
            options?: Array<string>;
        }>;
    }>;
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<{
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
        email: string;
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
         * A list of configurations for document form fields.
         */
        fields?: Array<{
            /**
             * Document field name.
             */
            name: string;
            /**
             * Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.
             */
            default_value?: string | number | boolean | Array<string | number | boolean>;
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
            /**
             * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
             */
            validation_pattern?: string;
            /**
             * A custom message to display on pattern validation failure.
             */
            invalid_message?: string;
            preferences?: {
                /**
                 * Font size of the field value in pixels.
                 */
                font_size?: number;
                /**
                 * Font type of the field value.
                 */
                font_type?: "bold" | "italic" | "bold_italic";
                /**
                 * Font family of the field value.
                 */
                font?: "Times" | "Helvetica" | "Courier";
                /**
                 * Font color of the field value.
                 */
                color?: "black" | "white" | "blue";
                /**
                 * Horizontal alignment of the field text value.
                 */
                align?: "left" | "center" | "right";
                /**
                 * Vertical alignment of the field text value.
                 */
                valign?: "top" | "center" | "bottom";
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
                currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
                /**
                 * Set `true` to make sensitive data masked on the document.
                 */
                mask?: number | boolean;
            };
        }>;
        /**
         * A list of roles for the submitter. Use this param to merge multiple roles into one submitter.
         */
        roles?: Array<string>;
    }>;
    message?: {
        /**
         * Custom signature request email subject.
         */
        subject?: string;
        /**
         * Custom signature request email body. Can include the following variables: {{submission.name}}, {{submitter.link}}, {{account.name}}.
         */
        body?: string;
    };
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
export type CreateSubmissionFromPdfResponse = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Submission name.
     */
    name?: string;
    /**
     * The list of submitters.
     */
    submitters: Array<{
        /**
         * Submission unique ID number.
         */
        id: number;
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
         * The date and time when the submitter declined to complete the signing form.
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
         * Submitter name.
         */
        name: string | null;
        /**
         * Submitter phone number.
         */
        phone: string | null;
        /**
         * Your application-specific unique string key to identify this submitter within your app.
         */
        external_id?: string | null;
        /**
         * The status of signing request for the submitter.
         */
        status: "completed" | "declined" | "opened" | "sent" | "awaiting";
        /**
         * The role of the submitter.
         */
        role: string;
        /**
         * Metadata object with additional submitter information.
         */
        metadata: {
            [key: string]: unknown;
        };
        /**
         * Object with submitter preferences.
         */
        preferences: {
            [key: string]: unknown;
        };
        /**
         * The `src` URL value to embed the signing form or sign via a link.
         */
        embed_src?: string;
    }>;
    /**
     * The source of the submission.
     */
    source: "invite" | "bulk" | "api" | "embed" | "link";
    /**
     * The order of submitters.
     */
    submitters_order: "random" | "preserved";
    /**
     * The status of the submission.
     */
    status: "completed" | "declined" | "expired" | "pending";
    /**
     * The one-off submission document files.
     */
    schema?: Array<{
        /**
         * The attachment UUID.
         */
        attachment_uuid?: string;
        /**
         * The attachment name.
         */
        name?: string;
    }>;
    /**
     * List of fields to be filled in the one-off submission.
     */
    fields?: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    /**
     * List of documents attached to the one-off submission.
     */
    documents: Array<{
        /**
         * Unique indentifier of attached document to the one-off submission.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the one-off submission.
         */
        name: string;
    }>;
    /**
     * Specify the expiration date and time after which the submission becomes unavailable for signature.
     */
    expire_at: string;
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
};
export type CreateSubmissionFromHtmlData = {
    /**
     * Name of the document submission
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
    order?: "preserved" | "random";
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
    documents: Array<{
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
        size?: "Letter" | "Legal" | "Tabloid" | "Ledger" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6";
    }>;
    /**
     * The list of submitters for the submission.
     */
    submitters: Array<{
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
        email: string;
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
         * A list of configurations for document form fields.
         */
        fields?: Array<{
            /**
             * Document field name.
             */
            name: string;
            /**
             * Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.
             */
            default_value?: string | number | boolean | Array<string | number | boolean>;
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
            /**
             * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
             */
            validation_pattern?: string;
            /**
             * A custom message to display on pattern validation failure.
             */
            invalid_message?: string;
            preferences?: {
                /**
                 * Font size of the field value in pixels.
                 */
                font_size?: number;
                /**
                 * Font type of the field value.
                 */
                font_type?: "bold" | "italic" | "bold_italic";
                /**
                 * Font family of the field value.
                 */
                font?: "Times" | "Helvetica" | "Courier";
                /**
                 * Font color of the field value.
                 */
                color?: "black" | "white" | "blue";
                /**
                 * Horizontal alignment of the field text value.
                 */
                align?: "left" | "center" | "right";
                /**
                 * Vertical alignment of the field text value.
                 */
                valign?: "top" | "center" | "bottom";
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
                currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
                /**
                 * Set `true` to make sensitive data masked on the document.
                 */
                mask?: number | boolean;
            };
        }>;
        /**
         * A list of roles for the submitter. Use this param to merge multiple roles into one submitter.
         */
        roles?: Array<string>;
    }>;
    message?: {
        /**
         * Custom signature request email subject.
         */
        subject?: string;
        /**
         * Custom signature request email body. Can include the following variables: {{submission.name}}, {{submitter.link}}, {{account.name}}.
         */
        body?: string;
    };
    /**
     * Set `true` to merge the documents into a single PDF file.
     */
    merge_documents?: boolean;
};
export type CreateSubmissionFromHtmlResponse = {
    /**
     * Submission unique ID number.
     */
    id: number;
    /**
     * Submission name.
     */
    name?: string;
    /**
     * The list of submitters.
     */
    submitters: Array<{
        /**
         * Submission unique ID number.
         */
        id: number;
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
         * The date and time when the submitter declined to complete the signing form.
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
         * Submitter name.
         */
        name: string | null;
        /**
         * Submitter phone number.
         */
        phone: string | null;
        /**
         * Your application-specific unique string key to identify this submitter within your app.
         */
        external_id?: string | null;
        /**
         * The status of signing request for the submitter.
         */
        status: "completed" | "declined" | "opened" | "sent" | "awaiting";
        /**
         * The role of the submitter.
         */
        role: string;
        /**
         * Metadata object with additional submitter information.
         */
        metadata: {
            [key: string]: unknown;
        };
        /**
         * Object with submitter preferences.
         */
        preferences: {
            [key: string]: unknown;
        };
        /**
         * The `src` URL value to embed the signing form or sign via a link.
         */
        embed_src?: string;
    }>;
    /**
     * The source of the submission.
     */
    source: "invite" | "bulk" | "api" | "embed" | "link";
    /**
     * The order of submitters.
     */
    submitters_order: "random" | "preserved";
    /**
     * The status of the submission.
     */
    status: "completed" | "declined" | "expired" | "pending";
    /**
     * The one-off submission document files.
     */
    schema?: Array<{
        /**
         * The attachment UUID.
         */
        attachment_uuid?: string;
        /**
         * The attachment name.
         */
        name?: string;
    }>;
    /**
     * List of fields to be filled in the one-off submission.
     */
    fields?: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    /**
     * List of documents attached to the one-off submission.
     */
    documents: Array<{
        /**
         * Unique indentifier of attached document to the one-off submission.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the one-off submission.
         */
        name: string;
    }>;
    /**
     * Specify the expiration date and time after which the submission becomes unavailable for signature.
     */
    expire_at: string;
    /**
     * The date and time when the submission was created.
     */
    created_at: string;
};
export type GetSubmitterResponse = {
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
     * Submitter name.
     */
    name: string | null;
    /**
     * Submitter phone number.
     */
    phone: string | null;
    /**
     * Submitter's submission status.
     */
    status: "completed" | "declined" | "opened" | "sent" | "awaiting";
    /**
     * The unique applications-specific identifier
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
     * Base template details.
     */
    template: {
        /**
         * The template's unique identifier.
         */
        id: number;
        /**
         * The template's name.
         */
        name: string;
        created_at: string;
        updated_at: string;
    };
    submission_events: Array<{
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
        event_type: "send_email" | "bounce_email" | "complaint_email" | "send_reminder_email" | "send_sms" | "send_2fa_sms" | "open_email" | "click_email" | "click_sms" | "phone_verified" | "start_form" | "start_verification" | "complete_verification" | "view_form" | "invite_party" | "complete_form" | "decline_form" | "api_complete_form";
        /**
         * Date and time when the event was triggered.
         */
        event_timestamp: string;
    }>;
    /**
     * An array of pre-filled values for the submitter.
     */
    values: Array<{
        /**
         * Document template field name.
         */
        field: string;
        /**
         * Pre-filled value of the field.
         */
        value: string | number | boolean | Array<string | number | boolean>;
    }>;
    /**
     * An array of completed or signed documents by the submitter.
     */
    documents: Array<{
        /**
         * Document name.
         */
        name: string;
        /**
         * Document URL.
         */
        url: string;
    }>;
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
};
export type UpdateSubmitterData = {
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
     * Submitter specific URL to redirect to after the submission completion.
     */
    completed_redirect_url?: string;
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
    message?: {
        /**
         * Custom signature request email subject.
         */
        subject?: string;
        /**
         * Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.
         */
        body?: string;
    };
    /**
     * A list of configurations for template document form fields.
     */
    fields?: Array<{
        /**
         * Document template field name.
         */
        name: string;
        /**
         * Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.
         */
        default_value?: string | number | boolean | Array<string | number | boolean>;
        /**
         * Set `true` to make it impossible for the submitter to edit predefined field value.
         */
        readonly?: boolean;
        /**
         * Set `true` to make the field required.
         */
        required?: boolean;
        /**
         * HTML field validation pattern string based on https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern specification.
         */
        validation_pattern?: string;
        /**
         * A custom message to display on pattern validation failure.
         */
        invalid_message?: string;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: "bold" | "italic" | "bold_italic";
            /**
             * Font family of the field value.
             */
            font?: "Times" | "Helvetica" | "Courier";
            /**
             * Font color of the field value.
             */
            color?: "black" | "white" | "blue";
            /**
             * Horizontal alignment of the field text value.
             */
            align?: "left" | "center" | "right";
            /**
             * Vertical alignment of the field text value.
             */
            valign?: "top" | "center" | "bottom";
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
            currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
            /**
             * Set `true` to make sensitive data masked on the document.
             */
            mask?: number | boolean;
        };
    }>;
};
export type UpdateSubmitterResponse = {
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
     * Submitter name.
     */
    name: string | null;
    /**
     * Submitter phone number.
     */
    phone: string | null;
    /**
     * Submitter's submission status.
     */
    status: "completed" | "declined" | "opened" | "sent" | "awaiting";
    /**
     * The unique applications-specific identifier
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
    values: Array<{
        /**
         * Document template field name.
         */
        field: string;
        /**
         * Pre-filled value of the field.
         */
        value: string | number | boolean | Array<string | number | boolean>;
    }>;
    /**
     * An array of completed or signed documents by the submitter.
     */
    documents: Array<{
        /**
         * Document name.
         */
        name: string;
        /**
         * Document URL.
         */
        url: string;
    }>;
    /**
     * The role of the submitter in the signing process.
     */
    role: string;
    /**
     * The `src` URL value to embed the signing form or sign via a link.
     */
    embed_src: string;
};
export type GetSubmittersQuery = {
    /**
     * The unique identifier of the submitter to start the list from. It allows you to receive only submitters with id greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of submitters.
     */
    after?: number;
    /**
     * The unique identifier of the submitter to end the list with. It allows you to receive only submitters with id less than the specified value.
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
     * The unique applications-specific identifier provided for a submitter when initializing a signature request. It allows you to receive only submitters with a specified external id.
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
export type GetSubmittersResponse = {
    data?: Array<{
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
        email: string;
        /**
         * Unique slug of the submitter form.
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
         * Submitter name.
         */
        name: string | null;
        /**
         * Submitter phone number.
         */
        phone: string | null;
        /**
         * Submitter's submission status.
         */
        status: "completed" | "declined" | "opened" | "sent" | "awaiting";
        /**
         * The unique applications-specific identifier
         */
        external_id: string | null;
        /**
         * Submitter preferences.
         */
        preferences: {
            [key: string]: unknown;
        };
        /**
         * Metadata object with additional submitter information.
         */
        metadata: {
            [key: string]: unknown;
        };
        submission_events: Array<{
            /**
             * Unique identifier of the submission event.
             */
            id: number;
            /**
             * Unique identifier of the submitter that triggered the event.
             */
            submitter_id: number;
            /**
             * Event type.
             */
            event_type: "send_email" | "bounce_email" | "complaint_email" | "send_reminder_email" | "send_sms" | "send_2fa_sms" | "open_email" | "click_email" | "click_sms" | "phone_verified" | "start_form" | "start_verification" | "complete_verification" | "view_form" | "invite_party" | "complete_form" | "decline_form" | "api_complete_form";
            /**
             * Date and time when the event was triggered.
             */
            event_timestamp: string;
        }>;
        /**
         * An array of pre-filled values for the submission.
         */
        values: Array<{
            /**
             * Document template field name.
             */
            field: string;
            /**
             * Pre-filled value of the field.
             */
            value: string | number | boolean | Array<string | number | boolean>;
        }>;
        /**
         * An array of completed or signed documents by the submitter.
         */
        documents: Array<{
            /**
             * Document name.
             */
            name: string;
            /**
             * Document URL.
             */
            url: string;
        }>;
        /**
         * The role of the submitter in the signing process.
         */
        role: string;
    }>;
    pagination?: {
        /**
         * Submitters count.
         */
        count: number;
        /**
         * The ID of the submitter after which the next page starts.
         */
        next: number | null;
        /**
         * The ID of the submitter before which the previous page ends.
         */
        prev: number | null;
    };
};
export type AddDocumentToTemplateData = {
    /**
     * The list of documents to add or replace in the template.
     */
    documents?: Array<{
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
    }>;
    /**
     * Set to `true` to merge all existing and new documents into a single PDF document in the template.
     */
    merge?: boolean;
};
export type AddDocumentToTemplateResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
export type CloneTemplateData = {
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
export type CloneTemplateResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
export type CreateTemplateFromHtmlData = {
    /**
     * HTML template with field tags.
     */
    html: string;
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
    size?: "Letter" | "Legal" | "Tabloid" | "Ledger" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6";
    /**
     * Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new HTML.
     */
    external_id?: string;
    /**
     * The folder's name to which the template should be created.
     */
    folder_name?: string;
    /**
     * set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    /**
     * The list of documents built from HTML. Can be used to create a template with multiple documents. Leave `documents` param empty when using a top-level `html` param for a template with a single document.
     */
    documents?: Array<{
        /**
         * HTML template with field tags.
         */
        html: string;
        /**
         * Document name. Random uuid will be assigned when not specified.
         */
        name?: string;
    }>;
};
export type CreateTemplateFromHtmlResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
export type CreateTemplateFromDocxData = {
    /**
     * Name of the template
     */
    name?: string;
    /**
     * Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new document.
     */
    external_id?: string;
    /**
     * The folder's name to which the template should be created.
     */
    folder_name?: string;
    /**
     * set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    documents: Array<{
        /**
         * Name of the document.
         */
        name: string;
        /**
         * Base64-encoded content of the DOCX file or downloadable file URL
         */
        file: string;
        /**
         * Fields are optional if you use {{...}} text tags to define fields in the document.
         */
        fields?: Array<{
            /**
             * Name of the field.
             */
            name?: string;
            /**
             * Type of the field (e.g., text, signature, date, initials).
             */
            type?: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
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
            areas?: Array<{
                /**
                 * X-coordinate of the field area.
                 */
                x?: number;
                /**
                 * Y-coordinate of the field area.
                 */
                y?: number;
                /**
                 * Width of the field area.
                 */
                w?: number;
                /**
                 * Height of the field area.
                 */
                h?: number;
                /**
                 * Page number of the field area. Starts from 1.
                 */
                page?: number;
                /**
                 * Option string value for 'radio' and 'multiple' select field types.
                 */
                option?: string;
            }>;
            /**
             * An array of option values for 'select' field type.
             */
            options?: Array<string>;
            preferences?: {
                /**
                 * Font size of the field value in pixels.
                 */
                font_size?: number;
                /**
                 * Font type of the field value.
                 */
                font_type?: "bold" | "italic" | "bold_italic";
                /**
                 * Font family of the field value.
                 */
                font?: "Times" | "Helvetica" | "Courier";
                /**
                 * Font color of the field value.
                 */
                color?: "black" | "white" | "blue";
                /**
                 * Horizontal alignment of the field text value.
                 */
                align?: "left" | "center" | "right";
                /**
                 * Vertical alignment of the field text value.
                 */
                valign?: "top" | "center" | "bottom";
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
                currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
                /**
                 * Set `true` to make sensitive data masked on the document.
                 */
                mask?: number | boolean;
            };
        }>;
    }>;
};
export type CreateTemplateFromDocxResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
export type CreateTemplateFromPdfData = {
    /**
     * Name of the template
     */
    name?: string;
    /**
     * The folder's name to which the template should be created.
     */
    folder_name?: string;
    /**
     * Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new PDF.
     */
    external_id?: string;
    /**
     * set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    documents: Array<{
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
        fields?: Array<{
            /**
             * Name of the field.
             */
            name?: string;
            /**
             * Type of the field (e.g., text, signature, date, initials).
             */
            type?: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
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
            areas?: Array<{
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
            }>;
            /**
             * An array of option values for 'select' field type.
             */
            options?: Array<string>;
            preferences?: {
                /**
                 * Font size of the field value in pixels.
                 */
                font_size?: number;
                /**
                 * Font type of the field value.
                 */
                font_type?: "bold" | "italic" | "bold_italic";
                /**
                 * Font family of the field value.
                 */
                font?: "Times" | "Helvetica" | "Courier";
                /**
                 * Font color of the field value.
                 */
                color?: "black" | "white" | "blue";
                /**
                 * Horizontal alignment of the field text value.
                 */
                align?: "left" | "center" | "right";
                /**
                 * Vertical alignment of the field text value.
                 */
                valign?: "top" | "center" | "bottom";
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
                currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
                /**
                 * Set `true` to make sensitive data masked on the document.
                 */
                mask?: number | boolean;
            };
        }>;
    }>;
    /**
     * Remove PDF form fields from the documents.
     */
    flatten?: boolean;
    /**
     * Pass `false` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.
     */
    remove_tags?: boolean;
};
export type CreateTemplateFromPdfResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
export type MergeTemplateData = {
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
     * set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.
     */
    shared_link?: boolean;
    /**
     * An array of submitter role names to be used in the merged template.
     */
    roles?: Array<string>;
};
export type MergeTemplateResponse = {
    /**
     * Unique identifier of the document template.
     */
    id: number;
    /**
     * Unique slug of the document template.
     */
    slug: string;
    /**
     * Name of the template.
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
    schema: Array<{
        /**
         * Unique indentifier of attached document to the template.
         */
        attachment_uuid: string;
        /**
         * Name of the attached document to the template.
         */
        name: string;
    }>;
    /**
     * List of fields to be filled in the template.
     */
    fields: Array<{
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
        type: "heading" | "text" | "signature" | "initials" | "date" | "number" | "image" | "checkbox" | "multiple" | "file" | "radio" | "select" | "cells" | "stamp" | "payment" | "phone" | "verification";
        /**
         * Indicates if the field is required.
         */
        required: boolean;
        preferences?: {
            /**
             * Font size of the field value in pixels.
             */
            font_size?: number;
            /**
             * Font type of the field value.
             */
            font_type?: string;
            /**
             * Font family of the field value.
             */
            font?: string;
            /**
             * Font color of the field value.
             */
            color?: string;
            /**
             * Horizontal alignment of the field text value.
             */
            align?: string;
            /**
             * Vertical alignment of the field text value.
             */
            valign?: string;
            /**
             * The data format for different field types.
             */
            format?: string;
            /**
             * Price value of the payment field. Only for payment fields.
             */
            price?: number;
            /**
             * Currency value of the payment field. Only for payment fields.
             */
            currency?: string;
            /**
             * Indicates if the field is masked on the document.
             */
            mask?: boolean;
        };
        /**
         * List of areas where the field is located in the document.
         */
        areas: Array<{
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
        }>;
    }>;
    submitters: Array<{
        /**
         * Submitter name.
         */
        name: string;
        /**
         * Unique identifier of the submitter.
         */
        uuid: string;
    }>;
    /**
     * Unique identifier of the author of the template.
     */
    author_id: number;
    /**
     * Date and time when the template was archived.
     */
    archived_at: string | null;
    /**
     * Date and time when the template was created.
     */
    created_at: string;
    /**
     * Date and time when the template was updated.
     */
    updated_at: string;
    /**
     * Source of the template.
     */
    source: "native" | "api" | "embed";
    /**
     * Identifier of the template in the external system.
     */
    external_id: string | null;
    /**
     * Unique identifier of the folder where the template is placed.
     */
    folder_id: number;
    /**
     * Folder name where the template is placed.
     */
    folder_name: string;
    /**
     * Indicates if the template is accessible by link.
     */
    shared_link?: boolean;
    author: {
        /**
         * Unique identifier of the author.
         */
        id: number;
        /**
         * First name of the author.
         */
        first_name: string;
        /**
         * Last name of the author.
         */
        last_name: string;
        /**
         * Author email.
         */
        email: string;
    };
    /**
     * List of documents attached to the template.
     */
    documents: Array<{
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
    }>;
};
