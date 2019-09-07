class UI{
    constructor(){
        this.fromCurrency = document.getElementById("from-currency");
        this.toCurrency = document.getElementById('to-currency');
        this.display = document.getElementById('display');
    }

    //Outputting the list of currencies from the api.
    addList(data){
        Object.keys(data.list.results).forEach(key => {
            this.fromCurrency.innerHTML += `<option value="${data.list.results[key].id}" id="${data.list.results[key].id}">${key}: ${data.list.results[key].currencyName}</option>`

            this.toCurrency.innerHTML += `<option value="${data.list.results[key].id}" id= "${data.list.results[key].id}">${key}: ${data.list.results[key].currencyName}</option>`
        });
    }

    //Outputting amoutn value on the exchange rate field
    outputResult(data){
        document.getElementsByName('amount')[0].placeholder = data;
    }
    //Swapping the selected currencies.
    swapCurrency(){
        const temp = document.getElementById('from-currency').value;
        document.getElementById('from-currency').value = document.getElementById('to-currency').value;
        document.getElementById('to-currency').value = temp;
    }
    //Show output in the bottom
    showOutPut(from,to,input,output){
        this.display.innerHTML = `
        <h5>${input} ${from} =<h5>
        <br>
        <h1>${output*input} <h5>${to}</h5></h1>
        `;
    }
    //Show error if user doesn't have an input for 2 seconds.
    showError(error){
        const errorDiv = document.createElement('div');
        const wrapper = document.querySelector('.wrapper');
        const row = document.querySelector('.row');
        errorDiv.className = 'alert alert-danger';
    
        errorDiv.appendChild(document.createTextNode(error));
    
        wrapper.insertBefore(errorDiv,row);
    
        setTimeout(this.clearError,2000);
    }
    //clear error 
    clearError(){
        document.querySelector('.alert').remove();
    }
}