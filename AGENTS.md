# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this project is

GitProfile is a **fork-first portfolio template**. It builds a portfolio site from a GitHub username: the profile, avatar, bio and repositories are fetched from the public GitHub API at runtime, so there is no database and no backend.

Most people arrive here by forking the repo and deploying it to GitHub Pages. Assume that is the task unless told otherwise.

## Customizing a portfolio: edit one file

**`gitprofile.config.ts` is the only file that needs to change to customize a portfolio.** Do not edit anything under `src/` to change someone's name, links, jobs, skills or projects — every one of those is a config value.

`github.username` is the only required option. Every other section can be left empty or as an empty array, which hides that section from the rendered page.

### The `base` option is the most common source of breakage

`base` must match the deployment target, or the site builds fine and then loads without CSS or JavaScript:

- Deploying to `https://<USERNAME>.github.io` → `base: '/'`
- Deploying to `https://<USERNAME>.github.io/<REPO_NAME>` → `base: '/<REPO_NAME>/'` (leading and trailing slash)
- Deploying to Vercel, Netlify or a custom domain → `base: '/'`

It is read by `vite.config.ts`, not by the React app, so a change to it only takes effect on rebuild. Note that `base` is deliberately absent from the `SanitizedConfig` interface for this reason.

## Layout

| Path                                  | What lives there                                                 |
| ------------------------------------- | ---------------------------------------------------------------- |
| `gitprofile.config.ts`                | All user-facing configuration                                    |
| `src/components/gitprofile.tsx`       | Root component; GitHub API calls and data fetching               |
| `src/components/*/`                   | One folder per portfolio section (avatar, skills, experience, …) |
| `src/interfaces/sanitized-config.tsx` | The config schema, as TypeScript interfaces                      |
| `src/utils/index.tsx`                 | `getSanitizedConfig()` — applies defaults and validates config   |
| `src/constants/default-themes.tsx`    | The list of selectable themes                                    |
| `src/assets/index.css`                | Tailwind and daisyUI setup, plus custom themes                   |

## Themes

There are 36 themes: 35 from daisyUI plus one custom theme, `procyon`.

The selectable list lives in `themeConfig.themes` in `gitprofile.config.ts`; removing an entry takes it out of the dropdown. Custom themes are defined as `@plugin "daisyui/theme"` blocks in `src/assets/index.css` — `procyon` is the worked example to copy.

If you add or remove a theme, update the count in `README.md`, which states it in two places.

## Adding a config option

Changing the shape of the config means touching four places, in this order:

1. `gitprofile.config.ts` — add the option with a sensible default and a comment
2. `src/interfaces/sanitized-config.tsx` — add it to the matching interface
3. `src/utils/index.tsx` — handle it in `getSanitizedConfig()` so a missing value falls back safely
4. `README.md` — the config block under **Customization** is a verbatim copy of `gitprofile.config.ts`, so update it there too, and add or extend the relevant `###` section

Step 4 matters: the README block and the config file are kept in sync by hand and drift easily.

## Commands

```shell
npm install
npm run dev        # dev server at http://localhost:5173/gitprofile/ (path follows `base`)
npm run lint       # eslint, --max-warnings 0
npm run prettier   # format check
npm run build      # tsc + vite build
```

CI runs `lint`, `prettier` and `build` on every pull request, all three of which must pass; the deploy workflow on `main` runs only `build`. Run all three before finishing a change. `npm run prettier:fix` and `npm run lint:fix` apply fixes automatically.

There is no test suite. `npm run build` is the strongest correctness signal available, so do not claim behavior is verified beyond what it actually checks.

## Things worth knowing

- **GitHub API rate limits.** Requests are unauthenticated, so a dev session that reloads repeatedly will hit HTTP 403 rate limiting. That is expected and is not a bug in the code.
- **Node.js 20+** is required, driven by Vite 7 and ESLint 10. CI uses Node 22.
- **Blog posts** come from Medium or dev.to via `@arifszn/blog-js`. `blog.limit` defaults to 5 and is not capped in this codebase; the documented maximum of 10 comes from the upstream source.
- **`dist/` is generated** and git-ignored. Deployment builds it in CI; never commit it.
- **Deployment** is `.github/workflows/deploy.yml`, triggered on push to `main`. GitHub Pages must have **Source** set to **GitHub Actions**.

## Conventions

Match the surrounding code. TypeScript throughout, function components with hooks, Tailwind utility classes with daisyUI semantic colors (`bg-base-100`, `text-primary`) rather than hard-coded palette values, so that all 36 themes keep working. Formatting is Prettier's, enforced in CI — do not hand-format.
