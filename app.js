// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p5.dataset.number = "15";
p6.dataset.text = "nouveau texte";
p7.dataset.array = "one|two|three";
p8.dataset.test = "true";

p1.dataset.number = (parseInt(p1.dataset.number) + 10).toString();
p2.dataset.text = (p2.dataset.text.length).toString();

let arr3 =  p3.dataset.array.split("|");
for(let line of arr3){
    p3.innerHTML += "<br>" + line;
}

let val = p4.dataset.test;
p4.innerHTML = val === true ? "La valeur est vraie" : "La valeur est fause";

let newP = document.createElement("p");

document.body.appendChild(newP);

let Person = {
    name : "Doe",
    surname : "John"
}

newP.dataset.perso = JSON.stringify(Person);
