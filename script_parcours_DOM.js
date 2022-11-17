// Question 1
console.log("nbre de balises <p> : " + document.getElementsByTagName('p').length);

// Question 2
console.log("\nid = 'coucou' contenu : " + document.getElementById('coucou').innerHTML);

// Question 3
let get_url = document.getElementsByTagName('a');
console.log("\n3ème élément <a> : " + get_url[2]);

// Question 4
let class_compte_moi = document.getElementsByClassName('compte-moi');
console.log("\nnbre éléments dans la class 'compte-moi' : " + class_compte_moi.length);

// Question 5
console.log("\nnbre éléments <li> ayant la class 'compte-moi' : " + document.querySelectorAll("li.compte-moi").length);

// Question 6
let ol_select = document.querySelector('ol');
console.log("\nnbre éléments <li> dans une <ol> ayant la class 'compte-moi' : " + ol_select.querySelectorAll("li.compte-moi").length);

// Question 7
let div_select = document.querySelector("div");
let ul_select = div_select.querySelectorAll("ul");
console.log("contenu caché : " + ul_select[1].innerHTML);


