# Web Template

A quick template I use for making front end applications.

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
├── actions/          // Actions which will update the store.
├── components/       // Presentational components
├── containers/       // Bind presentational components with their "functionality".
├── icons/            // .svg icons, you can also include a library if you want.
├── reducers          // Decides how your application state will update.
│   └── index.js        // Combine your reducers here.
├── store/            // Configures the "storage" of app state. Also handles middlewares like loggers.
├── styles            // Stylesheets.
├── types             // Flow types.
├── utils             // Miscellaneous re-usable functionality.
│   └── api.js          // handling of API responses
├── index.js          // Entry point of the application
├── index.tpl.html    // Template for the final HTML page.
└── routes.jsx        // Routing table.
```
