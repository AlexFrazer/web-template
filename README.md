# Web Template

A template for building web applications.

## Intentions

- Keep up with recent technologies.
- Provide a base any application can work from; avoid opinionated decisions such as mobx vs redux.
- Leave everything open to extensibility.
- Put "best practices" in place, but do not assert them as the rule.

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
