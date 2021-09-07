let phonePlus = document.querySelector('#phone-plus');
let phoneMinus = document.querySelector('#phone-minus');
let phoneCount = document.querySelector('#phone-count');
let casePlus = document.querySelector('#case-plus');
let caseMinus = document.querySelector('#case-minus');
let caseCount = document.querySelector('#case-count');
let productChartPrices = document.querySelectorAll('#product-chart-price');
let subPrice = document.querySelector('#total-sub-price');
let tax = document.querySelector('#total-tax');
let tprice = document.querySelector('#total-price');
// total
function total(productChartPricesPera) {
    let totalSubPrice = 0;
    let totalTax = 0;
    for (productChartPrice of productChartPricesPera) {
        let price = parseInt(productChartPrice.innerText);
        totalSubPrice += price;
        totalTax += price * (15 / 100);
    }
    let roundedTotalTex = Math.round(totalTax, 2);
    let totalPrice = roundedTotalTex + totalSubPrice;
    subPrice.innerText = totalSubPrice;
    tax.innerText = roundedTotalTex;
    tprice.innerText = totalPrice

}
// product wise price
function itemCounting(product, price, symble) {
    //  product count getting
    let productCount = product.parentNode.children[1];
    let productNmbrCount = parseInt(productCount.value);
    // product price getting
    let productNmbrPrice = parseInt(price);
    // counting
    if (symble == true) {
        let addOne = productNmbrCount + 1;
        let singleProductUpdatedPrice = addOne * productNmbrPrice;
        product.parentElement.parentElement.children[1].children[0].innerText = singleProductUpdatedPrice;
        productCount.value = addOne;
    } else if (productNmbrCount > 0) {
        let reduceOne = productNmbrCount - 1;
        let singleProductUpdatedPrice = reduceOne * productNmbrPrice;
        product.parentElement.parentElement.children[1].children[0].innerText = singleProductUpdatedPrice;
        productCount.value = reduceOne;
    }
    // adding new single product price
    total(productChartPrices)
}
// add one product
function add(that) {
    let fixedPrice = that.parentElement.parentElement.children[1].children[0].attributes.price.value;
    itemCounting(that, fixedPrice, true)
}
// remove one product
function remove(that) {
    let fixedPrice = that.parentElement.parentElement.children[1].children[0].attributes.price.value;
    itemCounting(that, fixedPrice, false)
}
// call two event
function towEvent(btnOne,btnTwo){
    btnOne.addEventListener('click', function () { add(this) });
    btnTwo.addEventListener('click', function () { remove(this) });
}
// phone
towEvent(phonePlus,phoneMinus);
// case
towEvent(casePlus,caseMinus);
