# Securing Azure Functions with Let's Encrypt issued SSL certificates for your custom domain

## What is this?

This is a Azure Function template for your custom SSL domain Azure Functions wtih Let's Encrypt SSL certificate.
This Azure Functions template should used with [Let's Encrypt Site Extension](https://github.com/sjkp/letsencrypt-siteextension) to allow Let's Encrypt Site Extension support in Azure Functions.

## How to use

You can follow the instructions of [How-to-Install](https://github.com/sjkp/letsencrypt-siteextension/wiki/How-to-install) of Let's Encrypt Site Extention for your Azure Functions.

Before you will issue an SSL certificate for your custom domain with Let's Encrypt Site Extension, you will need to deploy this function to your Azure Functions. This is because the Azure Functions does not allow the site content access completely, which will cause the ACME Challenge site ownership verification error during the certificate issue process.

This function of Azure Functions allows returning the ACME Challenge data for the site ownership verification, which is stored in the Azure Function website.

## Notes

This is tested with Windows-based Azure Functions.
