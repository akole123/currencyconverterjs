class Currency {
    constructor(amount) {
        this.appID = 'aa5d9179c0da2a988567';
        this.amount = amount;
    }

    //Getting the list of currencies from API
    async getCurrencyList() {
        const currencyList = await fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${this.appID}`);

        const list = await currencyList.json();
        return {
            list
        }
    }
    //Get exchange rate from Api
    async getExchangeRate(fromCur, toCur) {
        const exchangeRate = await fetch(`https://free.currconv.com/api/v7/convert?q=${fromCur}_${toCur}&compact=ultra&apiKey=${this.appID}`);

        const list = await exchangeRate.json();
        return {
            list
        }

    }

}
// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=aa5d9179c0da2a988567
// /api/v7/currencies?apiKey=aa5d9179c0da2a988567
// https://free.currconv.com/api/v7/currencies?apiKey=aa5d9179c0da2a988567
