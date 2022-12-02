let product = "";
let quantity = 0;
let price = 0;
let total = 0;
let x = 0;
let result = 0;

function submit(){

    product = document.getElementById("product").value;
    quantity = document.getElementById("quantity").value;
    price = document.getElementById("price").value;

    if(quantity <= 5){

        total = Number(quantity) * Number(price);
        x = parseFloat(total);
        result = total - x * 2/100;

        document.getElementById("pro").innerHTML = (product + " will be:");
        document.getElementById("result").innerHTML = (result + " R$");

    }if(quantity > 5 && quantity <=10){

        total = Number(quantity) * Number(price);
        x = parseFloat(total);
        result = total - x * 3/100;

        document.getElementById("pro").innerHTML = (product + " will be:");
        document.getElementById("result").innerHTML = (result + " R$");

    }if(quantity > 10){

        total = Number(quantity) * Number(price);
        x = parseFloat(total);
        result = total - x * 5/100;

        document.getElementById("pro").innerHTML = (product + " will be:");
        document.getElementById("result").innerHTML = (result + " R$");

    }


}