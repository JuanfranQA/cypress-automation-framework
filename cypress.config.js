const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)
  if(!fs.existsSync(pathToConfigFile)){
    console.log("No custom config file found")
    return {};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'j5soeh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
  
  specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  excludeSpecPattern: "cypress/e2e/other/*.js", //Excluiomos esa carpeta para la simulacion
  baseUrl: "http://www.webdriveruniversity.com",
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false, //No se realiza video
  videoUploadOnPasses: false,
  viewportHeight: 2080,
  viewportWidth: 1920,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  retries:{ //repetir intentos to Framework
    runMode: 0,
    openMode: 0 //Aquí tenemos uno + dos que hemos probado en el test contact-us.js
  },

  env:{
    first_name: "Pepi",
    webdriveruni_homepage: "http://www.webdriveruniversity.com"
  }
  /*$ ./node_modules/.bin/cypress run --browser chrome --headed --spec cypress/e2e/integration/webdriver-uni/contact-us.js --env 
first_name=Bill*/ //Podemos ejecutar desde el terminal e introducir otro nombre
  },
});
