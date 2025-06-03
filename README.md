# DocuSeal JavaScript / Typescript

The DocuSeal JavaScript / Typescript library provides seamless integration with the DocuSeal API, allowing developers to interact with DocuSeal's electronic signature and document management features directly within JS/TS applications. This library is designed to simplify API interactions and provide tools for efficient implementation.

## Documentation

Detailed documentation is available at [DocuSeal API Docs](https://www.docuseal.com/docs/api?lang=javascript).

## Requirements

Node 14 or higher.

## Installation

To install the library, run:

```sh
npm install @docuseal/api
```

or:

```sh
yarn add @docuseal/api
```

## Usage

### Configuration

Set up the library with your DocuSeal API key based on your deployment. Retrieve your API key from the appropriate location:

#### Global Cloud

API keys for the global cloud can be obtained from your [Global DocuSeal Console](https://console.docuseal.com/api).

```ts
const docuseal = require("@docuseal/api");

docuseal.configure({ key: "your_api_key_here" });
```

Or initiate a new api client object:

```ts
const { DocusealApi } = require("@docuseal/api");

const docuseal = new DocusealApi({ key: "your_api_key_here" });
```

#### EU Cloud

API keys for the EU cloud can be obtained from your [EU DocuSeal Console](https://console.docuseal.eu/api).

```ts
const docuseal = require("@docuseal/api");

docuseal.configure({
  key: "your_api_key_here",
  url: "https://api.docuseal.eu"
});
```

#### On-Premises

For on-premises installations, API keys can be retrieved from the API settings page of your deployed application, e.g., https://yourdocusealapp.com/settings/api.

```ts
const docuseal = require("@docuseal/api");

docuseal.configure({
  key: "your_api_key_here",
  url: "https://yourdocusealapp.com/api"
});
```

## API Methods

### listSubmissions(params)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#list-all-submissions)

Provides the ability to retrieve a list of available submissions.


```javascript
const { data, pagination } = await docuseal.listSubmissions({ limit: 10 });
```

### getSubmission(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#get-a-submission)

Provides the functionality to retrieve information about a submission.


```javascript
const submission = await docuseal.getSubmission(1001);
```

### getSubmissionDocuments(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#get-submission-documents)

This endpoint returns a list of partially filled documents for a submission. If the submission has been completed, the final signed documents are returned.


```javascript
const submission = await docuseal.getSubmissionDocuments(1001);
```

### createSubmission(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#create-a-submission)

This API endpoint allows you to create signature requests (submissions) for a document template and send them to the specified submitters (signers).

**Related Guides:**<br>
[Send documents for signature via API](https://www.docuseal.com/guides/send-documents-for-signature-via-api)
[Pre-fill PDF document form fields with API](https://www.docuseal.com/guides/pre-fill-pdf-document-form-fields-with-api)


```javascript
const submission = await docuseal.createSubmission({
  template_id: 1000001,
  send_email: true,
  submitters: [
    {
      role: "First Party",
      email: "john.doe@example.com"
    }
  ]
});
```

### createSubmissionFromPdf(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#create-a-submission-from-pdf)

Provides the functionality to create one-off submission request from a PDF file. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.pdf](https://www.docuseal.com/examples/fieldtags.pdf) for more text tag formats. Or specify the exact pixel coordinates of the document fields using `fields` param.

**Related Guides:**<br>
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)


```javascript
const submission = await docuseal.createSubmissionFromPdf({
  name: "Test PDF",
  documents: [
    {
      name: "string",
      file: "base64",
      fields: [
        {
          name: "string",
          areas: [
            {
              x: 0,
              y: 0,
              w: 0,
              h: 0,
              page: 1
            }
          ]
        }
      ]
    }
  ],
  submitters: [
    {
      role: "First Party",
      email: "john.doe@example.com"
    }
  ]
});
```

### createSubmissionFromHtml(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#create-a-submission-from-html)

This API endpoint allows you to create a one-off submission request document using the provided HTML content, with special field tags rendered as a fillable and signable form.

**Related Guides:**<br>
[Create PDF document fillable form with HTML](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api)


```javascript
const submission = await docuseal.createSubmissionFromHtml({
  name: "Test PDF",
  documents: [
    {
      name: "Test Document",
      html: `<p>Lorem Ipsum is simply dummy text of the
<text-field
  name="Industry"
  role="First Party"
  required="false"
  style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px">
</text-field>
and typesetting industry</p>
`
    }
  ],
  submitters: [
    {
      role: "First Party",
      email: "john.doe@example.com"
    }
  ]
});
```

### archiveSubmission(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#archive-a-submission)

Allows you to archive a submission.


```javascript
await docuseal.archiveSubmission(1001);
```

### listSubmitters(params)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#list-all-submitters)

Provides the ability to retrieve a list of submitters.


```javascript
const { data, pagination } = await docuseal.listSubmitters({ limit: 10 });
```

### getSubmitter(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#get-a-submitter)

Provides functionality to retrieve information about a submitter, along with the submitter documents and field values.


```javascript
const submitter = await docuseal.getSubmitter(500001);
```

### updateSubmitter(id, data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#update-a-submitter)

Allows you to update submitter details, pre-fill or update field values and re-send emails.

**Related Guides:**<br>
[Automatically sign documents via API](https://www.docuseal.com/guides/pre-fill-pdf-document-form-fields-with-api#automatically_sign_documents_via_api)


```javascript
const submitter = await docuseal.updateSubmitter(500001, {
  email: "john.doe@example.com",
  fields: [
    {
      name: "First Name",
      default_value: "Acme"
    }
  ]
});
```

### listTemplates(params)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#list-all-templates)

Provides the ability to retrieve a list of available document templates.


```javascript
const { data, pagination } = await docuseal.listTemplates({ limit: 10 });
```

### getTemplate(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#get-a-template)

Provides the functionality to retrieve information about a document template.


```javascript
const template = await docuseal.getTemplate(1000001);
```

### createTemplateFromPdf(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#create-a-template-from-pdf)

Provides the functionality to create a fillable document template for a PDF file. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.pdf](https://www.docuseal.com/examples/fieldtags.pdf) for more text tag formats. Or specify the exact pixel coordinates of the document fields using `fields` param.

**Related Guides:**<br>
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)


```javascript
const template = await docuseal.createTemplateFromPdf({
  name: "Test PDF",
  documents: [
    {
      name: "string",
      file: "base64",
      fields: [
        {
          name: "string",
          areas: [
            {
              x: 0,
              y: 0,
              w: 0,
              h: 0,
              page: 1
            }
          ]
        }
      ]
    }
  ]
});
```

### createTemplateFromDocx(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#create-a-template-from-word-docx)

Provides the functionality to create a fillable document template for existing Microsoft Word document. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.docx](https://www.docuseal.com/examples/fieldtags.docx) for more text tag formats. Or specify the exact pixel coordinates of the document fields using `fields` param.

**Related Guides:**<br>
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)


```javascript
const template = await docuseal.createTemplateFromDocx({
  name: "Test DOCX",
  documents: [
    {
      name: "string",
      file: "base64"
    }
  ]
});
```

### createTemplateFromHtml(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#create-a-template-from-html)

Provides the functionality to seamlessly generate a PDF document template by utilizing the provided HTML content while incorporating pre-defined fields.

**Related Guides:**<br>
[Create PDF document fillable form with HTML](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api)


```javascript
const template = await docuseal.createTemplateFromHtml({
  html: `<p>Lorem Ipsum is simply dummy text of the
<text-field
  name="Industry"
  role="First Party"
  required="false"
  style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px">
</text-field>
and typesetting industry</p>
`,
  name: "Test Template"
});
```

### cloneTemplate(id, data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#clone-a-template)

Allows you to clone existing template into a new template.


```javascript
const template = await docuseal.cloneTemplate(1000001, {
  name: "Cloned Template"
});
```

### mergeTemplates(data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#merge-templates)

Allows you to merge multiple templates with documents and fields into a new combined template.


```javascript
const template = await docuseal.mergeTemplates({
  template_ids: [
    321,
    432
  ],
  name: "Merged Template"
});
```

### updateTemplate(id, data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#update-a-template)

Provides the functionality to move a document template to a different folder and update the name of the template.


```javascript
const template = await docuseal.updateTemplate(1000001, {
  name: "New Document Name",
  folder_name: "New Folder"
});
```

### updateTemplateDocuments(id, data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#update-template-documents)

Allows you to add, remove or replace documents in the template with provided PDF/DOCX file or HTML content.


```javascript
const template = await docuseal.updateTemplateDocuments(1000001, {
  documents: [
    {
      file: "string"
    }
  ]
});
```

### archiveTemplate(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#archive-a-template)

Allows you to archive a document template.


```javascript
await docuseal.archiveTemplate(1000001);
```

### updateTemplateDocuments(id, data)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#update-template-documents)

Allows you to add, remove or replace documents in the template with provided PDF/DOCX file or HTML content.


```javascript
const template = await docuseal.updateTemplateDocuments(1000001, {
  documents: [
    {
      file: "string"
    }
  ]
});
```

### archiveTemplate(id)

[Documentation](https://www.docuseal.com/docs/api?lang=javascript#archive-a-template)

Allows you to archive a document template.


```javascript
await docuseal.archiveTemplate(1000001);
```

### Configuring Timeouts

Set timeouts to avoid hanging requests:

```ts
const { DocusealApi } = require('@docuseal/api')

const docuseal = new DocusealApi({
  key: 'your_api_key_here',
  openTimeout: 30000
});
```

## Support

For feature requests or bug reports, visit our [GitHub Issues page](https://github.com/docusealco/docuseal-js/issues).


## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
