// common functions which are required for element interactions
var EC = protractor.ExpectedConditions;
 exports.openURL = function(url) {
    return browser.get(url, 40000);
}
//function to input a text
exports.inputText = function (inputElementByCss, texttoInput) {
    return $(inputElementByCss).sendKeys(texttoInput);
}

//function to select an element 
exports.click = function (locator) {
    return element(by.css(locator)).click();
}



//function to select an element 
exports.clickArrayElement = function (locator,index) {
    return $$(locator).get(index).click();
}




//function to check that an element is present on the DOM of a page and visible
exports.elementVisibilityCheck_ByCss = function (elementName) {
    return browser.wait(EC.visibilityOf(element(by.css(elementName))), 20000);
}
//function to check that an element is present on the DOM of a page and visible
exports.elementVisibilityCheck_ByLinkText = function (elementName) {
    return browser.wait(EC.visibilityOf(element(by.linkText(elementName))), 20000);
}
// function to get text from element from UI
exports.getText = function (locator) {
    return element(by.css(locator)).getText();
}
