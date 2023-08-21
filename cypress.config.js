const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
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
  pageLoadTimeout: 60000,
  browsers: [
    {
    name: 'chrome',
    family: 'chromium',
    channel: 'stable',
    displayName: 'Chrome',
    version: '116.0.5845.97',
    path: 'C:\\Program Files\\Google\Chrome\\Application\\chrome.exe',
    minSupportedVersion: 64,
    majorVersion: '116',
    }
  ],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,ts,jsx,tsx}",
   // baseUrl: "",
  },
});
