const currency = new Currency;
const ui = new UI();

//Loads list
getList();

//Get user input amount
const userInput = document.getElementById('amount');
document.getElementById('swap').addEventListener('click', () => {
    ui.swapCurrency();
});

//Check if user has an input, if yes run calculation else show error.
document.getElementById('button').addEventListener('click', () => {

    if (userInput.value.length == 0) {
        ui.showError("please enter a number for the conversion amount");
    } else {
        currency.getExchangeRate(document.getElementById('from-currency').value, document.getElementById('to-currency').value).then(data => {
            //We can be sure there is only one pair of values in data.list because of the API call link.
            for (var key in data.list) {
                if (data.list.hasOwnProperty(key)) {
                    ui.outputResult(data.list[key] * parseFloat(userInput.value));
                    ui.showOutPut(document.getElementById('from-currency').value, document.getElementById('to-currency').value, parseFloat(userInput.value), data.list[key]);
                }
            }
        });
    }
});

//Load the list of currencies from the beginning.
function getList() {
    currency.getCurrencyList().then(data => {
        ui.addList(data);
    })
}
