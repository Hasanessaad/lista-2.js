let username = 1234;
let password = 9999;

let inputs = document.querySelectorAll('input'); 
let btnclear = document.getElementById('btnclear');

    function submit(){
    
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;

        if(username != 1234 || username == null){
            document.getElementById("error").innerHTML = ("User invalid!");
        }if(password == 9999 ){
            document.getElementById("error").innerHTML = ("Access allowed");
        }if(password != 9999 || password == null){
            document.getElementById("error").innerHTML = ("Incorrect password!");
        }

    }

    btnclear.addEventListener('click' , () => {
        inputs.forEach(input => input.value = '');
        document.getElementById("error").innerHTML = ("");
    });
        
    
    