let account = 0; 
let balance = 0;
let debit = 0; 
let credit = 0;
let current_balance = 0;

function submit (){

    account = document.getElementById("account").value;

    if(account == 1234){

        console.log("account is correct");
        balance = document.getElementById("balance").value;
        console.log("balance:");
        console.log(balance);
        debit = document.getElementById("debit").value;
        console.log("debit:");
        console.log(debit);
        credit = document.getElementById("credit").value;
        console.log("credit:");
        console.log(credit);

        current_balance = Number(balance) - (Number(debit) + Number(credit));

        document.getElementById('current-balance').innerHTML = (current_balance + "R$");

        if(current_balance < 0){
            
            document.getElementById('pos/neg').innerHTML = ("Balance Negative");

        }if(current_balance >= 0){

            document.getElementById('pos/neg').innerHTML = ("balance positive");

        }

    }if(account != 1234){

        alert("ERROR! the account number indicate is incorrect try (1234) as the account number");

    } 


}