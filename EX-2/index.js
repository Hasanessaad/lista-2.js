let monthly_hrs = 0;
let weekly_hrs = 0;
let money_hrs = 0;
let total = 0;
let overtime = 0;
let x = 0;



function submit(){

    monthly_hrs = document.getElementById("hours/month").value;
    money_hrs = document.getElementById("money/hr").value;

    total = Number(monthly_hrs) * Number(money_hrs);
    weekly_hrs = monthly_hrs/4;

    document.getElementById("total").innerHTML = (total + "R$/month");

    console.log("weekly-hrs:");
    console.log(weekly_hrs);
    console.log("monthly-hrs:");
    console.log(money_hrs);

    if(weekly_hrs >= 40){

        x = parseFloat(total);
        overtime = Number(total) + Number(x) * 50/100;
        document.getElementById("total-overtime").innerHTML = (overtime + "R$/month");
        console.log("overtime");
    
    }if(weekly_hrs < 40){

        document.getElementById("total-overtime").innerHTML = ("you dont get overtime and an increase in salary since the work time is less than 40hrs a week");

    }
    
}
