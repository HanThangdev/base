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

### Project structure rundown

- `.husky/` This directory is used to create commit rules like check syntax and commit message, etc. Will be automatically generated when running `npm install`.
- `.vscode/` This folder contains settings.json file to support visual code to automatically format when saving code.
- `build/` This directory is generated from the command `npm run build`. Used to deploy later
- `coverage/` This directory is generated from the command `npm run coverage`. Contains report of unit test
- `docs/` The documentation directory guides the use of the source base.
- `node_modules/` Folder containing the code of 3rd party libraries used for the project
- `public/` The public directory of the project, the information in this will be public (accessible from the url)
- `scripts/` Directory containing nodejs scripts for background tasks like importing/exporting multilingual files, etc.
- `src/` This folder contains the main project code
  - `__tests__/` Folder containing the project's unit test files (not yet complete)
  - `Adapters/` Tasks, classes, functions that support interaction with cloud services such as ckeditor uploading images, please put them here
  - `APIs/` The declarations that interact with the api are put here
  - `Assets/` Asset files like icon, image, font, etc... are put here
  - `Components/` Common react components (reuse in many places) please put them here
  - `Config/` The declarations and configurations for providers, services, libraries such as store, http, firebase, etc... are put here
  - `Constants/` The declarations of constant, enum, etc,... are put here
  - `Hooks/` Common hooks are put here
  - `I18n/` For multi-language declarations, please put them here
  - `Layouts/` Declare layout using routes
  - `Modules/` The screens will be grouped and divided into many small modules
  - `Routes/` Define the root navigation for the application, the routes of the child modules will be imported
  - `Themes/` Declare global styles. The source base uses `styled-components` and `antd`. Separate style declarations for each component, separate screens will be defined inside
  - `Types/` Declare types for typescript objects used in code
  - `Utils/` Declare helper functions
  - `Web3/` Declare helper functions to interact with web3
- `.commitlintrc.js` Config file used for husky define rules for commit message
- `editorconfig` This file creates consistency for the code when using . Create synchronization when code on different ide, editor (avoid unnecessary changes on git)
- `.env.example` The sample file declares environment variables for the devops to rely on to deploy. Change the filename to `.env` or `.env.local` and update the values ​​to code, same for staging, development, production, etc environments. Note that the information in this is confidential (for reactjs, it is not 100% secure, so don't save the most important information here, save it on the server side.
- `.eslintignore` Files containing information about files/folders will not be affected by eslint
- `.eslintrc.json` File contains config for eslint, defines convention code for the project
- `.gitignore` File contains file/folders information that is not affected by git
- `.gitlab-ci.yml` Gitlab CI/CD script definition file. Supports automated testing, deployment, etc.
- `.prettierrc.json` Configuration definition file for `prettier` supports automatic code formatting according to eslint standards
- `craco.config.ts` Customization support file, extending project's webpack configuration in case you don't want to eject config of `create-react-app`
- `jest.config.js` Configuration file for jest (Incomplete)
- `package.json` The file contains project information such as application name, author, declared list of 3rd party libraries, scripts to run the app, test, import/export i18n, etc.
- `package-lock.json` This file is used to lock versions of libraries. Note do not remove this file from the source base
- `README` The markdown file describes some information about the source base
- `tsconfig.ts` Configuration definition file to compile typescript in source code
- `typedoc.json` This file is used to define the configuration for the `npm run typedoc` command. This command will help generate documents for helper/util functions or react components
