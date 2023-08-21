const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  env: {},
  retries: {
    runMode: 2,
    openMode: 0,
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  scrollBehavior: "center",
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  blockHosts: ["app.hushly.com", "*.cookiepro.com"],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,ts,jsx,tsx}",
   // baseUrl: "",
  },
});
