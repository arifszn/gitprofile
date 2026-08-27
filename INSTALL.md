# INSTALL.md

Instructions for an AI agent asked to set up and deploy GitProfile for a user. If you are a human, follow the [README](README.md) instead — it covers the same ground with screenshots.

Work through the steps in order. Substitute `<USERNAME>` with the user's GitHub username and `<REPO_NAME>` with the repository name where one is called for.

## 1. Collect what you need

Ask the user for their GitHub username first — it is the only required value. Then ask which fields they want filled in: social links, skills, work experience, education, certifications, publications, resume URL, SEO title, and whether to show blog posts from Medium or dev.to.

Do not invent values. Leave anything the user does not supply as an empty string or empty array; empty sections are hidden from the rendered page.

## 2. Pick a deployment path

```shell
gh auth status   # is the GitHub CLI authenticated?
node --version   # Node.js 20+ is required either way
```

- **Path A — GitHub Pages** (requires an authenticated `gh`): the portfolio lives in the user's own fork and redeploys automatically on every commit. Prefer this when `gh` is available.
- **Path B — any static host** (no `gh`, no fork, no GitHub setup): clone, build, and push the static output to Surge, Vercel, or Netlify with `npx`. The portfolio still syncs profile data from the GitHub API at runtime; only config changes need a manual redeploy.

If `gh` is missing or unauthenticated, tell the user Path A needs `gh auth login` in their own terminal, and offer Path B — do not silently pretend a GitHub Pages deploy succeeded.

---

## Path A: GitHub Pages

### A1. Decide the URL shape

This determines both the repository name and the `base` config value, and getting it wrong is the most common way the deploy silently breaks:

| The user wants                             | Repository name                  | `base`            |
| ------------------------------------------ | -------------------------------- | ----------------- |
| `https://<USERNAME>.github.io`             | `<USERNAME>.github.io`           | `'/'`             |
| `https://<USERNAME>.github.io/<REPO_NAME>` | `<REPO_NAME>` (e.g. `portfolio`) | `'/<REPO_NAME>/'` |

Ask which one they want.

### A2. Fork and clone

```shell
gh repo fork arifszn/gitprofile --clone --fork-name <REPO_NAME> --default-branch-only
cd <REPO_NAME>
```

### A3. Edit `gitprofile.config.ts`

This is the only file to change. Do not edit anything under `src/` — every user-facing value is a config option.

Set `base` to the value from A1, `github.username` to the user's username, and fill in the sections they asked for. The file is commented throughout; follow the existing shape of each section.

### A4. Verify locally

```shell
npm install
npm run lint
npm run prettier
npm run build
```

All four must pass. The deploy workflow runs `npm run build`, so a build failure breaks the deploy; keep lint and formatting clean too, since pull-request CI enforces them. `npm run prettier:fix` fixes formatting.

Optionally run `npm run dev` and confirm the site loads at `http://localhost:5173<base>`.

### A5. Commit and push

```shell
git add gitprofile.config.ts
git commit -m "Configure portfolio"
git push origin main
```

### A6. Enable Actions and GitHub Pages

Forked repositories have workflows disabled, and Pages must be told to build from Actions rather than a branch. Both are required:

```shell
gh api --method PUT repos/<USERNAME>/<REPO_NAME>/actions/permissions -F enabled=true
gh api --method POST repos/<USERNAME>/<REPO_NAME>/pages -f build_type=workflow
```

If the Pages call returns `409 Conflict`, Pages is already enabled; switch it over instead:

```shell
gh api --method PUT repos/<USERNAME>/<REPO_NAME>/pages -f build_type=workflow
```

### A7. Deploy and confirm

The push in A5 may have happened before Actions was enabled, so trigger the workflow explicitly and watch it:

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

---

## Path B: any static host

No fork and no GitHub credentials needed — `arifszn/gitprofile` is public, and the build output is plain static files.

### B1. Clone and configure

```shell
git clone --depth 1 https://github.com/arifszn/gitprofile.git <REPO_NAME>
cd <REPO_NAME>
```

Edit `gitprofile.config.ts` as in step A3, with one difference: set `base` to `'/'` — static hosts serve from the domain root.

### B2. Build and verify

Run the commands from A4. The deployable site is the `dist/` directory that `npm run build` produces.

### B3. Deploy `dist/`

Offer the user a choice of free host. All three run via `npx`:

```shell
# Surge — pick a memorable subdomain
npx surge ./dist <NAME>.surge.sh

# Vercel
npx vercel deploy ./dist --prod --yes

# Netlify
npx netlify-cli deploy --dir=./dist --prod
```

**Authentication:** each host requires a one-time login, and the interactive prompts may not work through your shell. If a login prompt hangs or fails, ask the user to run the login in their own terminal (`npx surge login`, `npx vercel login`, or `npx netlify-cli login`) — credentials persist on disk, after which the deploy commands above run non-interactively. Tokens work too: `SURGE_LOGIN`/`SURGE_TOKEN`, `--token` for Vercel, `NETLIFY_AUTH_TOKEN` for Netlify.

### B4. Confirm

Fetch the reported URL and check it returns HTTP 200 before reporting success. Tell the user that profile data (avatar, bio, projects) updates automatically, but config changes need `npm run build` and a redeploy of `dist/`.

---

## If it goes wrong

- **Site loads with no CSS or JavaScript** — `base` does not match the URL shape. Recheck A1, or `'/'` for Path B.
- **No workflow run appears** (Path A) — Actions is still disabled. Rerun A6, or have the user enable it under the repo's **Actions** tab.
- **Pages shows the README instead of the site** (Path A) — Pages is building from a branch. Rerun the `build_type=workflow` call.
- **Build fails on lint or formatting** — run `npm run lint:fix && npm run prettier:fix`, then commit again.
- **HTTP 403 from the GitHub API while running locally** — the app calls the GitHub API unauthenticated and is rate limited. It is not a bug; wait and reload.

For contributing to GitProfile itself rather than deploying a portfolio, see [AGENTS.md](AGENTS.md).
