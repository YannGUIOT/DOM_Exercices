function puts(texte) {console.log(texte);}

// MODIF N°1

function changeTitles()
{
    document.title = "Title Changed";                                             // changement du titre de la page

    let sous_title = document.getElementsByClassName('lead text-muted'); 
    sous_title[0].innerHTML = "Sous-Titre Modifié by JS";                         // changement du sous-titre
}
changeTitles();


// MODIF N°2

function changeCallToActions()
{
    let primary_button = document.getElementsByClassName('btn btn-primary my-2'); 
    primary_button[0].innerHTML = "Primary Button Text Changed";                  // changement du texte du 1er button

    primary_button[0].setAttribute("href","http://www.google.fr");                // changement du lien du 1er button

    let secondary_button = document.getElementsByClassName('btn btn-secondary my-2');
    secondary_button[0].innerHTML = "Secondary Button Text Changed";              // changement du texte du 2nd button

    secondary_button[0].setAttribute("href","http://www.google.fr");              // changement du lien du 2nd button
}
changeCallToActions();


// MODIF N°3

function changeLogoName()
{
    let nav_Title = document.getElementsByTagName('strong');
    nav_Title[0].style.fontSize = "2em";
    nav_Title[0].innerHTML = "This Title was Changed & his size in 2em";          // changement titre navbar + fontsize
}
changeLogoName();


// MODIF N°4

function populateImages()
{
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let class_card = document.getElementsByClassName('card-img-top');
    for (let i=0 ; i < 9 ; i++){class_card[i].setAttribute("src", imagesArray[i]);}  // changement des images des cards
}
populateImages();


// MODIF N°5

function deleteLastCards()
{
    let class_card = document.getElementsByClassName('col-md-4');
    for (let i=0 ; i < 3 ; i++){class_card[6].remove();}                            // supprime les 3 dernières cards
}
deleteLastCards();


// MODIF N°6

function changeCardsText()
{
    let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
    "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
    "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
    let class_card_text = document.getElementsByClassName('card-text');
    for (let i=0 ; i < 3 ; i++){class_card_text[i].innerHTML = textArray[i];}    // remplace le texte des 3 premières cards            
}
changeCardsText();


// MODIF N°7

function changeViewButtons()
{
    let class_btn = document.getElementsByClassName('btn-group');                // modif des boutton view
    for ( i=0 ; i<6 ; i++) {class_btn[i].querySelector('button').setAttribute("class","btn btn-sm btn-success");}
}
changeViewButtons();


// MODIF N°8

function unknow_modif()
{
    let div = document.createElement("div")
    let class_row = document.getElementsByClassName('row');
    class_row[0].appendChild(div).setAttribute("class","row");

    // manque déplacement d'un élément card dans cette new class row
  
}
unknow_modif();


