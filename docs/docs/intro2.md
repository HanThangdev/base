---
sidebar_position: 1
---

# Getting Started

Let's discover **Docusaurus in less than 5 minutes**.

## Project structure

```
Goemon
├── .husky
├── .vscode
├── build
├── coverage
├── docs
├── node_modules
├── public
├── scripts
├── src
│ ├── __tests__
│ ├── Adapters
│ ├── APIs
│ ├── Assets
│ ├── Components
│ ├── Config
│ ├── Constants
│ ├── Hooks
│ ├── I18n
│ ├── Layouts
│ ├── Modules
│ ├── Routes
│ ├── Themes
│ ├── Types
│ ├── Utils
│ ├── Web3
│ ├── App.tsx
│ ├── index.tsx
│ ├── react-app-env.d.ts
│ ├── reportWebVitals.ts
│ ├── service-worker.ts
│ ├── serviceWorkerRegistration.ts
│ ├── setupTests.ts
│ └── types.d.ts
├── .commitlintrc.js
├── .editorconfig
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .gitlab-ci.yml
├── .prettierrc.json
├── craco.config.ts
├── jest.config.js
├── package.json
├── package-lock.json
├── README
├── tsconfig.json
└── typedoc.json
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
