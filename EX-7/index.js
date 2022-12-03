let num = 0;

function ADD(){

let nome = "";
let kids = 0;
let salary = 0;

nome = document.getElementById("name").value;
kids = document.getElementById("nb-kids").value;
salary = document.getElementById("salary").value;

const pai = document.getElementById('bod');

const td = document.createElement('td');
const td_1 = document.createElement('td');
const td_2 = document.createElement('td');

pai.appendChild(td);
td.appendChild(td_1);
td.appendChild(td_2);

const nome_1 = document.createTextNode(nome);
const kids_1 = document.createTextNode(kids);
const salary_1 = document.createTextNode(salary);

td.appendChild(nome_1);
td_1.appendChild(kids_1);
td_2.appendChild(salary_1);

}