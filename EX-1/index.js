let blank_votes = 0;
let null_votes = 0;
let valid_votes = 0;
let total = null;
let per_blank = 0;
let per_null = 0;
let per_valid = 0;

function submit_all(){

blank_votes = Number(document.getElementById("blank-votes").value);
null_votes = Number(document.getElementById("null-votes").value);
valid_votes = Number(document.getElementById("valid-votes").value);

console.log("blank value:");
console.log(blank_votes);
console.log("null value:");
console.log(null_votes);
console.log("valid value:");
console.log(valid_votes);

total = blank_votes + null_votes + valid_votes;

console.log("total value:");
console.log(total);

per_blank = 100*(blank_votes/total);
per_null = 100*(null_votes/total);
per_valid = 100*(valid_votes/total);

document.getElementById("valid-results").innerHTML = (per_valid + "%");
document.getElementById("blank-results").innerHTML = (per_blank + "%");
document.getElementById("null-results").innerHTML = (per_null + "%");

}