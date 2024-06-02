const btnAgain = document.querySelector("#open-again");
const btnOpen = document.querySelector("#open-cookie")
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let phraseRandom = document.querySelector("#opened")

var demoArray = [
    'Viva cada dia como se fosse o último e torne-o o melhor que puder.',
    'Cada dia é uma nova oportunidade para crescer, aprender e viver a vida ao máximo.',
    'Quem não é feliz com pouco não será com muito.',
  ];

function handleOpenCookie() {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector("#opened").innerText = demoArray[0]
    
}

function handleTryClick() {
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    window.location.reload();
}

btnOpen.addEventListener('click',handleOpenCookie)
btnAgain.addEventListener('click', handleTryClick)

function RandomSort(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
  }

  RandomSort(demoArray);