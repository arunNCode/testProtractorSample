var dashboardPage = function () {
    var functionLibrary = require('../commonFunctions')
    this.getShipIndexValue = function (shipName) {
        functionLibrary.elementVisibilityCheck_ByCss(("td .e-resource-cells.e-parent-node"))
            .then(function () {

                var rows = $$(".e-resource-cells.e-parent-node")
                var ship = rows.filter(function (elem) {
                    return elem.getText().then(function (text) {

                        return text == shipName
                    });
                }).first();
                return ship;
            })
            .then(async function (shipValue) {

                await shipValue.getAttribute("data-group-index").then(function (value) {
                    console.log('data-group-index', value);
                    return value
                })

            })


    }

    this.addNewPortButton = '.mat-flat-button[type="submit"]';
}



module.exports = new dashboardPage();