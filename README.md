# Documetnation

npm init solid@latest
Used tailwind solidstart template
npm install
Used nvm to get node v18.0.0

# to start a local server

npm run dev

# or start the server and open the app in a new browser tab

npm run dev -- --open

```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
```
