const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f1ivcu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 25000, // Removed brackets and underscores from number
  },

  // For Integrating Qase Reporter
  // reporter: "cypress-multi-reporter",
  // reporterOptions: {
  //   reporterEnabled: "cypress-qase-reporter",
  //   cypressMochawesomeReporterReporterOptions: {
  //     charts: true,
  //   },
  //   cypressQaseReporterReporterOptions: {
  //     apiToken: "",
  //     projectCode: "f1ivcu",
  //     runId: 81,
  //     logging: true,
  //     rootSuiteTitle: "e2e",
  //   },
  // },

  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "cypress-qase-reporter, mochawesome",
    "mochawesomeReporterOptions": {
      "charts": true
    },
    "cypressQaseReporterReporterOptions": {
      "apiToken": "${process.env.REACT_APP_QASE_API_TOKEN}",
      "projectCode": "${process.env.REACT_APP_QASE_PROJECT_CODE}",
      "runName": "Cypress-Automation-Run",
      "runDescription": "Automated test run using Cypress",
      "environmentId": 1
    }
  }
});
