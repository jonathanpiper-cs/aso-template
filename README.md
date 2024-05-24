# Contentstack Email Template Generator 

This is an example of how to generate an email template with contentstack. Currently it is using CSS libraries for rendering styles into the page, you would need to convert everything to inline styles. All the HTML is table based for email purposes. This is not a working email template generator. This is a PoC of how it can be accomplished and designed. Currently works with Live Preview to design templates on the fly.

## Get Started

First install the packages

     npm install

Create a .env file defining the following variables

     NEXT_PUBLIC_CS_ENVIRONMENT=
     NEXT_PUBLIC_CS_LIVE_PREVIEW_TOKEN=
     NEXT_PUBLIC_CS_DELIVERY_TOKEN=
     NEXT_PUBLIC_CS_API_KEY=

Use this command

     npm run dev
     
to run in development mode. This will run it locally at http://localhost:3000/email/{entry-uid}

If you do not have access to the stack model go to 

    contentstack/contentmodels/contenstack_email_template.json

upload this file into contentstack for a temporary content model supported by this code base.

## Example

Using live preview to create an email template

![Example](https://github.com/nicknguyen-cs/Email-Template-Generator/blob/main/contentstack/img/demo2.gif)


Switching between template and source code
![Example](https://github.com/nicknguyen-cs/Email-Template-Generator/blob/main/contentstack/img/demo1.gif)