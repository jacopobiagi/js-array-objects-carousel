let arrImg = document.getElementsByClassName("items");
let index = 0;

let upBotton = document.getElementById("changeUp");
let downBotton = document.getElementById("changeDown");


  downBotton.addEventListener("click",

    function(){

        arrImg[index].classList.remove("active"); 

        index == arrImg.length - 1? index = 0: index++;

        arrImg[index].classList.add("active");
    }
)

upBotton.addEventListener("click",

    function(){

        arrImg[index].classList.remove("active"); 

        index == 0 ? index = arrImg.length - 1: index--;

        arrImg[index].classList.add("active");
    }
)