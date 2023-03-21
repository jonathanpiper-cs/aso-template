# Contentstack Email Template Generator 

This is an example of how to generate an email template with contentstack. Currently it is using CSS libraries for rendering styles into the page, you would need to convert everything to inline styles. All the HTML is table based for email purposes. This is not a working email template generator. This is a PoC of how it can be accomplished and designed. Currently works with Live Preview to design templates on the fly.

## Get Started

First install the packages

     npm install
     npm run dev
     
to run in development mode. This will run it locally at http://localhost:3000/email/{entry-uid}

If you do not have access to the stack model go to 

    contentstack/contentmodels/contenstack_email_template.json

upload this file into contentstack for a temporary content model supported by this code base.


---
In reality, this is the flow of how an email should be generated

```mermaid
graph LR
A[Contentstack] --> B[Email Parsing System] --> C[Contentstack Verification]
C--> D[Contentstack Publish Event] --> E[Webhook Trigger Email Send]
```
