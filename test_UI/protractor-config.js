exports.config = {
    // address of a running selenium server.
    seleniumAddress: 'http://localhost:4445/wd/hub',
    // Capabilities to be passed to the webdriver instance, muticapabilities can be added for cross browser testing
    capabilities: {
        browserName: 'chrome'
    },
    getPageTimeout: 70000,
    allScriptsTimeout: 70000,
     // path relative to the current config file
    specs: './test.js' , // feature file written in gherkins 
   
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
        browser.ignoreSynchronization = true; //protractor won't attempt to synchronize with the page before performing actions
    }


};