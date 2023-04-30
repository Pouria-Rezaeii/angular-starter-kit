import {defineConfig} from "cypress";

export default defineConfig({
  viewportWidth: 1400,
  viewportHeight: 1200,
  e2e: {
    baseUrl: "http://localhost:4200",
    setupNodeEvents(on, config) {
      /* eslint-disable-next-line */
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
