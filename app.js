
function updatePhoneNumner(product, price, isIncrise) {
    let productInput = document.getElementById(product + '-number');
    let productCountNumber = productInput.value;
    if (isIncrise == true) {
        productCountNumber = parseInt(productCountNumber) + 1;
    }
    else if(productCountNumber > 0) {
        productCountNumber = parseInt(productCountNumber) - 1;
    }
    productInput.value = productCountNumber;

    // update phone price
    const currentPice = document.getElementById(product + '-price');
    currentPice.innerText = price * productCountNumber;
    // calculate subtotal
    updateSubTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

//sub total
function updateSubTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const maintotal = subTotal + tax;
    // update on the subtotal field
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-amount').innerText = maintotal;
}


// Phone inrement and decriment
document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumner('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneNumner('phone', 1219, false);
});

//case inrement and decriment 
document.getElementById('case-plus').addEventListener('click', function () {
    updatePhoneNumner('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updatePhoneNumner('case', 59, false);
});