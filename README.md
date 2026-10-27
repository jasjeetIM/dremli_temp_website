# Dremli — Applied AI Systems

Dependency-free static website, served at `/`.

## Local review

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

## Editing

Content is maintained in `scripts/generate.py`. After editing it, run:

```sh
python3 scripts/generate.py
```

This regenerates `index.html`. The generated HTML is checked into the repository,
so Vercel does not need Python or a build step. Styling is in `styles.css` and
progressive enhancement is in `ai.js`. All content is readable without JavaScript.

Hero numbers are illustrative and engagement metrics are engineering targets.
The experience section uses organization names as typographic wordmarks.
The legacy communication-consent page was removed at the user's request.

## Validation

```sh
node --check ai.js
git diff --check
```

There is no framework, TypeScript, dependency installation, or configured linter.
Vercel configuration and security headers are preserved. Publication is handled
separately after review; generating the site does not commit, push, or deploy.
