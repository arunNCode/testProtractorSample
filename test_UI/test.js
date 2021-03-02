var functionLibrary = require('./commonFunctions')
var loginPage = require('./pages/login.js');
var dashboardPage = require('./pages/dashboard.js');
var portOperations = require('./pages/portOperations.js');
// to open the url before each scenario execution
beforeAll(function () {
    return functionLibrary.openURL('https://dev.vm.admaren.org/login')
})

describe("dashboard test suite", function () {

    it('login to dahboard & add ', async function () {
        await loginPage.login()
        functionLibrary.elementVisibilityCheck_ByCss(("td .e-resource-cells.e-parent-node")).then(function () {
            return functionLibrary.click(dashboardPage.addNewPortButton)


        }).then(function () {

            return portOperations.addOperations(); // to add new operation (page method)
        })
            .then(function () {

                return dashboardPage.getShipIndexValue('test ship')   // to get index of ship's entry 
            })

    })


})  