# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        'react-x': reactX,
        'react-dom': reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs['recommended-typescript'].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```

---

Functionality:

-   Statistic Dashboard:

    -   Median
    -   Average
    -   Budget Current Overview
    -   Budget Overview 3 month
    -   Budget Overview 6 month
    -   Budget Overview 12 month

-   Category Dashboard

    -   Custom Category
    -   Grocery
    -   Housing
    -   Entertainment
        ...
    -   Camembert Overview

-   Transaction

    -   CRUD Expenses
    -   CRUD Incomes
    -   CRUD Investments

-   Budget

    -   Custom Limit per Budget category
    -   Multiple Custom Budget
    -   Transfer Expenses / Incomes / Investments into another distinct budget

-   Other
    -   Add Dark Mode / Light Mode

---

## Things I have learned

-   Bug: I encountered a bug in my HistoryForm because it wasn't a Controlled Component.
    => Because the form submission and reset logic weren't mine, many data where reset causing many design flaws.
    Use "value" for Controlled Component instead of "defaultValue" which rely on the DOM.
