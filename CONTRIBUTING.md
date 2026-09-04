# Contributing to iView

Thank you for improving iView. This guide turns a component idea into a reviewable change while preventing duplicate implementations and accidental public API drift.

## Choose the right path

- **Bug fix:** search existing issues, then create a minimal reproduction before opening an issue.
- **Existing component improvement:** open an issue describing the user need and proposed API change.
- **New component:** check [the component status](COMPONENTS.md), submit a component proposal, and wait for `ready-to-implement` before starting.
- **Documentation:** documentation lives in the separate [iview/iview-doc](https://github.com/iview/iview-doc) repository.

Opening a proposal is not a claim. A claim becomes active only after a maintainer applies `ready-to-implement` and records the implementer on the issue. If a claimed task has no update by its stated first-PR date, maintainers may release it for another contributor.

## Local setup

Requirements are Node.js and npm versions compatible with the dependencies in `package.json`.

```bash
git clone https://github.com/iview/iview.git
cd iview
git checkout 2.0
npm install
npm run dev
```

The development server runs the examples under `test/` on port 8081. Use `npm run dev:s` when the server must listen on all interfaces.

Before opening a pull request, run:

```bash
npm run verify:components
npm run test
```

`npm run test` runs ESLint, TypeScript linting, and the Karma unit suite. The lint scripts use their historical `--fix` configuration, so review `git diff` after running them. Build commands are documented in `package.json`; generated `dist` files must not be committed.

## Component lifecycle

### 1. Propose

Use the **Component proposal or claim** issue template. A proposal must include:

- the user problem and why existing components cannot solve it by composition;
- the public API: props, events, slots, methods, and a usage example;
- keyboard, focus, ARIA, disabled, loading, empty, and error behavior;
- visual/design references and responsive behavior;
- a test and documentation plan.

Maintainers may request API changes or reject overlap before implementation begins. This review protects contributors from building an incompatible component.

### 2. Claim

After approval, comment with an expected first-PR date. A maintainer records the claim in the issue and applies `in-progress`. Link the issue from any work-in-progress pull request so others can see the active implementation.

The source of truth for work still available is the set of open `component-proposal` issues that are `ready-to-implement` and do not have an active claim. [COMPONENTS.md](COMPONENTS.md) lists the shipped public surface and explains how to find that live queue.

### 3. Implement

Follow the structure of the closest existing component:

1. Put implementation files in `src/components/<component-name>/`.
2. Export the component from that directory's `index.js`.
3. Import and register the public component in `src/index.js`.
4. Add styles and theme variables under `src/styles/` where required.
5. Add focused unit tests under `test/unit/specs/`.
6. Update English and Chinese documentation in `iview/iview-doc`.

Prefer the smallest stable API. Avoid exposing internal implementation details as props or methods. New behavior must preserve server-side rendering and supported browser behavior unless the approved proposal explicitly changes compatibility.

### 4. Verify and submit

Run the component consistency check and relevant tests. In the pull request, include exact commands and results, before/after screenshots for visual changes, and the approved issue number. Review covers:

- correctness and regression risk;
- API consistency and naming;
- code simplicity and maintainability;
- keyboard and assistive-technology behavior;
- test coverage and documentation;
- browser, SSR, and theme compatibility.

Maintainers merge only after required review changes and checks pass. Closing the proposal issue releases any stale claim; merging the implementation moves the component into the shipped inventory checked by `npm run verify:components`.

## Commit and pull-request scope

Keep each pull request focused on one approved issue. Do not include unrelated formatting, dependency upgrades, or generated bundles. Write commit messages in the imperative mood and explain behavioral tradeoffs in the pull-request description.
