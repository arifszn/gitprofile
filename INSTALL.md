# INSTALL.md

Instructions for an AI agent asked to set up and deploy GitProfile for a user. If you are a human, follow the [README](README.md) instead — it covers the same ground with screenshots.

Work through the steps in order. Substitute `<USERNAME>` with the user's GitHub username and `<REPO_NAME>` with the repository name chosen in step 2.

## Prerequisites

Check both before starting, and stop and tell the user if either fails:

```shell
gh auth status   # GitHub CLI must be authenticated
node --version   # Node.js 20+
```

Without an authenticated `gh`, the user has to fork the repo, enable workflows, and configure Pages by hand in the GitHub web UI. You can still do steps 4-6 in their clone once they have forked it. Say so rather than pretending the deploy succeeded.

## 1. Collect what you need

Ask the user for their GitHub username first — it is the only required value. Then ask which fields they want filled in: social links, skills, work experience, education, certifications, publications, resume URL, SEO title, and whether to show blog posts from Medium or dev.to.

Do not invent values. Leave anything the user does not supply as an empty string or empty array; empty sections are hidden from the rendered page.

## 2. Decide the URL shape

This determines both the repository name and the `base` config value, and getting it wrong is the most common way the deploy silently breaks:

| The user wants                             | Repository name                  | `base`            |
| ------------------------------------------ | -------------------------------- | ----------------- |
| `https://<USERNAME>.github.io`             | `<USERNAME>.github.io`           | `'/'`             |
| `https://<USERNAME>.github.io/<REPO_NAME>` | `<REPO_NAME>` (e.g. `portfolio`) | `'/<REPO_NAME>/'` |

Ask which one they want. Deploying to Vercel, Netlify, or a custom domain instead means `base: '/'`.

## 3. Fork and clone

```shell
gh repo fork arifszn/gitprofile --clone --fork-name <REPO_NAME> --default-branch-only
cd <REPO_NAME>
```

## 4. Edit `gitprofile.config.ts`

This is the only file to change. Do not edit anything under `src/` — every user-facing value is a config option.

Set `base` to the value from step 2, `github.username` to the user's username, and fill in the sections they asked for. The file is commented throughout; follow the existing shape of each section.

## 5. Verify locally

```shell
npm install
npm run lint
npm run prettier
npm run build
```

All four must pass. The deploy workflow runs `npm run build`, so a build failure breaks the deploy; keep lint and formatting clean too, since pull-request CI enforces them. `npm run prettier:fix` fixes formatting.

Optionally run `npm run dev` and confirm the site loads at `http://localhost:5173<base>`.

## 6. Commit and push

```shell
git add gitprofile.config.ts
git commit -m "Configure portfolio"
git push origin main
```

## 7. Enable Actions and GitHub Pages

Forked repositories have workflows disabled, and Pages must be told to build from Actions rather than a branch. Both are required:

```shell
gh api --method PUT repos/<USERNAME>/<REPO_NAME>/actions/permissions -F enabled=true
gh api --method POST repos/<USERNAME>/<REPO_NAME>/pages -f build_type=workflow
```

If the Pages call returns `409 Conflict`, Pages is already enabled; switch it over instead:

```shell
gh api --method PUT repos/<USERNAME>/<REPO_NAME>/pages -f build_type=workflow
```

## 8. Deploy and confirm

The push in step 6 may have happened before Actions was enabled, so trigger the workflow explicitly and watch it:

```shell
gh workflow run deploy.yml --repo <USERNAME>/<REPO_NAME>
sleep 5   # the run takes a moment to appear
gh run list --repo <USERNAME>/<REPO_NAME> --workflow deploy.yml --limit 1 \
  --json databaseId --jq '.[0].databaseId' \
  | xargs gh run watch --repo <USERNAME>/<REPO_NAME> --exit-status
```

(`gh run watch` needs an explicit run ID when not running interactively; `--exit-status` makes a failed run fail the command.)

Then confirm the site is actually live before reporting success:

```shell
gh api repos/<USERNAME>/<REPO_NAME>/pages --jq '.html_url, .status'
```

Report the URL to the user. The first build can take a few minutes, and Pages may 404 briefly after the run goes green.

## If it goes wrong

- **Site loads with no CSS or JavaScript** — `base` does not match the URL shape. Recheck step 2.
- **No workflow run appears** — Actions is still disabled. Rerun step 7, or have the user enable it under the repo's **Actions** tab.
- **Pages shows the README instead of the site** — Pages is building from a branch. Rerun the `build_type=workflow` call.
- **Build fails on lint or formatting** — run `npm run lint:fix && npm run prettier:fix`, then commit again.
- **HTTP 403 from the GitHub API while running locally** — the app calls the GitHub API unauthenticated and is rate limited. It is not a bug; wait and reload.

For contributing to GitProfile itself rather than deploying a portfolio, see [AGENTS.md](AGENTS.md).
