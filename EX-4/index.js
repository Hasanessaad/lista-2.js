let age_d = 0;
let age_g = 0;
let age_gr = 0;
let age_a = 0;
let older_man = 0;
let older_woman = 0;
let youngest_man = 0;
let youngest_woman = 0;
let sum_1 = 0;
let sum_2 = 0;

function submit(){

    age_d = document.getElementById("age-1").value;
    age_g = document.getElementById("age-2").value;
    age_gr = document.getElementById("age-3").value;
    age_a = document.getElementById("age-4").value;

    console.log("age-d:");
    console.log(age_d);
    console.log("age-g:");
    console.log(age_g);
    console.log("age-gr:");
    console.log(age_gr);
    console.log("age-a:");
    console.log(age_a);

    if(age_d < age_g){

        older_man = parseFloat(age_g);
        youngest_man = parseFloat(age_d);

    }if(age_d > age_g){

        older_man = parseFloat(age_d);
        youngest_man = parseFloat(age_g);

    }if(age_a < age_gr){

        older_woman = parseFloat(age_gr);
        youngest_woman = parseFloat(age_a);

    }if(age_a > age_gr){

        older_woman = parseFloat(age_a);
        youngest_woman = parseFloat(age_gr);

    }

    sum_1 = Number(older_man) + Number(youngest_woman);
    sum_2 = Number(older_woman) + Number(youngest_man);

    console.log("sum-1:");
    console.log(sum_1);
    console.log("sum-2:");
    console.log(sum_2);

    document.getElementById('sum-1').innerHTML = (sum_1);
    document.getElementById('sum-2').innerHTML = (sum_2);

}