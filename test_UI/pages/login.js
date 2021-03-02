var loginPage = function () {
    var functionLibrary = require('../commonFunctions')
    this.login = function () {
        functionLibrary.elementVisibilityCheck_ByCss(("#mat-input-1"));
        functionLibrary.inputText("#mat-input-0", "mnlaarun@gmail.com");
        functionLibrary.inputText("#mat-input-1", "test123$");
        functionLibrary.click('[type="submit"]');
        functionLibrary.elementVisibilityCheck_ByCss(('[ng-reflect-name="otp6"]'));
        functionLibrary.inputText('[ng-reflect-name="otp1"]', "1");
        functionLibrary.inputText('[ng-reflect-name="otp2"]', "2");
        functionLibrary.inputText('[ng-reflect-name="otp3"]', "3");
        functionLibrary.inputText('[ng-reflect-name="otp4"]', "4");
        functionLibrary.inputText('[ng-reflect-name="otp5"]', "5");
        functionLibrary.inputText('[ng-reflect-name="otp6"]', "5");
        functionLibrary.click('[type="submit"]');

    }
}

module.exports = new loginPage();