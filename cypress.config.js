const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't3v4io',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
