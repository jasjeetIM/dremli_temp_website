# Dremli Temporary Website

Static verification website for `dremli.com`.

This repository intentionally contains only the temporary public website. It
does not include the portal, backend, tenant routing, or application code.

## Vercel Hobby Setup

1. Create a new Vercel project from this Git repo.
2. Framework preset: `Other`.
3. Build command: leave empty.
4. Output directory: leave empty or set to `.`.
5. Install command: leave empty.
6. Add domains:
   - `dremli.com`
   - `www.dremli.com`
7. In Cloudflare DNS, add the records Vercel gives you for the apex and `www`.
8. Configure one canonical redirect in Vercel, preferably `www.dremli.com` to
   `dremli.com`.

## Contact Email

Before sending the website to vendors, configure `contact@dremli.com`.

Fast path: Cloudflare Email Routing forwarding `contact@dremli.com` to an
existing inbox.

## Local Preview

Because this is plain static HTML/CSS, you can preview by opening `index.html`
in a browser.
