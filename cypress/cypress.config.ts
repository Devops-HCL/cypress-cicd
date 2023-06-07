import { defineConfig } from "cypress";
import { Runnable } from "mocha";
import fs from 'fs'

const {verifyDownloadTasks} = require('cy-verify-downloads')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' || browser.family === 'chrome') {
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--no-sandbox')
        }
        return launchOptions;
      })
    },
    support: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',  
    "watchForFileChanges": true,
    "video": true,
    "viewportWidth": 1280,
    "viewportHeight": 630,
    "screenshotsFolder": "cypress/reports/screenshots/",
    "videosFolder": "cypress/reports/videos/",
    "screenshotOnRunFailure": true,
    
    "chromeWebSecurity": false,
    "retries": {
        "runMode": 0,
        "openMode": null
    },
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 5000,
    "responseTimeout": 30000,
    "execTimeout": 60000,
    "taskTimeout":60000
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "reportFilename": "Execution Report for [name] test - [status]",
    "charts": true,
    "reportPageTitle": 'Execution Report',
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "saveAllAttempts": true,
    "quiet":true,
    "code":false,
    "autoOpen":true,
    "overwrite": false
  },
});
