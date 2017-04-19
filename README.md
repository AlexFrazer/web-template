# Web Template

A template for building web applications.

## Intentions

- Keep up to date with most recent technologies
- Keep bundle size as small as possible
- Make generic and re-usable examples where possible.

## Prerequisites

- [Yarn](https://yarnpkg.com/en/docs/install)
- [Node](https://nodejs.org/en/download/)

## Getting Started

```
# Install dependencies
$ yarn install

# Running in development mode
$ yarn start

# Run a linter on the `app/` directory
$ yarn run lint

# Building for production
# This will remove the `dist` directory
$ yarn run build
```

## Walkthrough

```
app
├── components/       // Presentational components
├── containers/       // Bind presentational components with their "functionality".
├── index.scss        // Base styles. Could include fonts, etc.
├── index.jsx         // Entry point of the application
├── index.tpl.html    // Template for the final HTML page.
└── routes.jsx        // Routing table.
```
