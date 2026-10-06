# Interface Terms Cheat Sheet

A dependency-free, interactive learning lab for beginning web design, programming, and AI students. Its 28 terms are taught through four different environments: an annotated working page, a disclosure workbench, an input studio, and a results console. Every concept includes a definition, purpose, rule, experiment, live feedback, and independent reset.

## Open

Open `dist/index.html` directly in a modern browser. All assets are local, and no installation is needed. Or run `python3 -m http.server 4175 --directory dist` from this directory and visit `http://127.0.0.1:4175`.

## Edit

- `dist/index.html`: page shell, introduction, and native confirmation dialog.
- `dist/styles.css`: the cobalt design system, four lab compositions, and responsive layouts.
- `dist/app.js`: term content, concept-specific teaching layouts, and isolated demo interactions.

The page uses native form controls, `<details>`, and `<dialog>`. Tabs support arrow keys, Home, and End. Autocomplete supports arrows, Enter, and Escape. Menus and the modal support Escape. Reduced motion is respected. Form values are not transmitted or saved; uploads, deletion, and settings are simulations.

## Verification checklist

- Try all demos and their Reset buttons.
- Tab through controls and verify visible focus, tooltip access, modal focus containment, and focus restoration.
- Filter and sort events, navigate all result pages, and search for matching and nonmatching destinations.
- Start an upload, reset it while running, then run it to completion.
- Review narrow and wide layouts and enlarged text.

The original badminton project in the parent folder is unchanged.
