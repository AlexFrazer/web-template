# Web Template

A template for building web applications. Uses React as the main front end framework.

## Intentions

- Keep up-to-date with most recent technologies
- Provide a basic outline that anyone can work from regardless of their stack -- avoid making decisions such as mobx vs redux.
- Keep a small and manageable bundle
- No back end. This is mostly for front end engineers.

## Getting Started

```
# Install dependencies
$ yarn install

# Running in development mode
$ yarn run dev

# Building for production
# This will remove the `dist` directory
$ yarn run build
```

## What does it do?

#### Building
- Transpile js/jsx using [babel](https://www.npmjs.com/package/babel-core) and [webpack](https://www.npmjs.com/package/webpack)
- Starts up a web server via [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
- Makes a live-reloading preview via [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- Creates a minified, production-grade front end using webpack and code-splitting techniques.

#### Pipeline
- Builds an index.html file that will allow variables to be injected into it via [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- Create favicons for different platforms using [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin).
- [Auto-prefixes](https://survivejs.com/webpack/styling/autoprefixing/) CSS and allows the use of CSS modules and SASS.

## Organizational Walkthrough

```
app
├── components/             // Presentational components
├── containers/             // Bind presentational components with their "functionality".
├── styles                  // put your style sheets here
│   ├── _colors.scss        // define custom color scheme here to ensure consistency.
│   └── _transitions.scss   // define your transitions here to ensure consistency
├── views/                  // these are the individual "pages" you visit, mounted at a route.
├── index.scss              // Base styles. Could include fonts, etc.
├── index.jsx               // Entry point of the application. Where the application will inevitably be rendered.
├── index.hbs               // Template for the final HTML page. Can inject variables via `html-webpack-plugin`
└── routes.jsx              // Routing table. Defines where each page is routed to.
```
