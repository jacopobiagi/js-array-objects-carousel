const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];
  
let index = 0;

let upBotton = document.getElementById("changeUp");
let downBotton = document.getElementById("changeDown");
let padre = document.getElementsByClassName("img-container")[0];
let figlio = document.createElement("div");

figlio.classList = "w-100 h-100 items";
let immagine = images[index].image;
let titolo = images[index].title;
let testo = images[index].text;
figlio.innerHTML += '<img src="'+immagine+'" alt="img-01" class="w-100 h-100 ">';
figlio.innerHTML += '<h4 class="title-desc">'+titolo+'</h4>';
figlio.innerHTML += '<p class="para-desc">'+testo+'</p>';
padre.append(figlio);


downBotton.addEventListener("click",

    function(){
        figlio.innerHTML = "";
        index == images.length - 1? index = 0: index++;
        let immagine = images[index].image;
        let titolo = images[index].title;
        let testo = images[index].text;
        figlio.innerHTML += '<img src="'+immagine+'" alt="img-01" class="w-100 h-100 ">';
        figlio.innerHTML += '<h4 class="title-desc">'+titolo+'</h4>';
        figlio.innerHTML += '<p class="para-desc">'+testo+'</p>';
        padre.append(figlio);

    }
)

upBotton.addEventListener("click",

    function(){

        figlio.innerHTML = "";
        index == 0? index = images.length - 1: index--;
        let immagine = images[index].image;
        let titolo = images[index].title;
        let testo = images[index].text;
        figlio.innerHTML += '<img src="'+immagine+'" alt="img-01" class="w-100 h-100 ">';
        figlio.innerHTML += '<h4 class="title-desc">'+titolo+'</h4>';
        figlio.innerHTML += '<p class="para-desc">'+testo+'</p>';
        padre.append(figlio);

    }
)