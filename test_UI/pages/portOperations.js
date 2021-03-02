var portOperations = function () {
    var functionLibrary = require('../commonFunctions')
    this.addNewPortButton = '.mat-flat-button[type="submit"]';
    this.submitButton = '.mat-flat-button[type="submit"]';

    this.addOperations = function () {
        functionLibrary.elementVisibilityCheck_ByCss(("#mat-input-0"));
        functionLibrary.inputText("#mat-input-0", "Dubai");

        functionLibrary.elementVisibilityCheck_ByCss((".mat-option.ng-star-inserted"));
        functionLibrary.click(".mat-option.ng-star-inserted");
        functionLibrary.click("#port_operation_status");
        functionLibrary.clickArrayElement('span.mat-option-text', 1)
        functionLibrary.elementVisibilityCheck_ByCss((".mat-form-field #loadingDischarge"));
        functionLibrary.click(".mat-form-field #loadingDischarge");
        functionLibrary.click(".mat-option-text");

    }
}



module.exports = new portOperations();