// létrehozunk egy függvényt amit a window load eseménye majd meghív
function pageLoaded() {
  // eltároljuk a root id-vel rendelkező div-et egy változóba
  let rootE = document.getElementById("root");

  // létrehozunk egy szövegekből álló tömböt
  let aTextArray = [
    "szeder",
    "alma",
    "cseresznye",
    "eper",
    "egres",
    "meggy",
    "dinnye",
    "datolya",
    "barack",
    "kiwi",
    "citrom",
  ];

  // kiírunk a consolra pár dolgot
  // console.log(aTextArray[2]);
  // console.log(aTextArray.length);

  // csinálunk egy for ciklust, abban létrehozunk egy index változót, amit végigléptetünk a tömb elemein
  for (let index = 0; index < aTextArray.length; index++) {
    // a root div vége elé beszúrjuk a tömb index-edik elemét egy fruit class-ú divben
    rootE.insertAdjacentHTML(
      "beforeend",
      `
      <div class="fruit">${aTextArray[index]}</div>
    `
    );
  }

  // lsd. 3. sor
  let fruitDivs = rootE.querySelectorAll(".fruit");

  // lsd. 9. sor
  // console.log(fruitDivs[2]);

  // lsd. 13. sor
  for (let index = 0; index < fruitDivs.length; index++) {
    // console.log(index === 1);
    // console.log(index % 2);

    // mivel 0-tól számoz a tömb, ezért itt a páratlanadikakat keressük meg
    if (index % 2 === 0) {
      // hozzáadunk egy új class-t az index-edik div-hez
      fruitDivs[index].classList.add("trueClass");
    }
    // keressük a 5-tel maradéktalanul osztható indexű elemeit a tömbnek
    else if (index % 5 === 0) {
      // lsd. 38. sor
      fruitDivs[index].classList.add("anotherClass");
    }
    // lefut minden egyéb eseten, amire a fölső kettő nem volt igaz
    else {
      // las. 38. sor
      fruitDivs[index].classList.add("falseClass");
    }
  }
}

// hozzáadjuk a window load eseményéhez a pageLoaded függvényünket
window.addEventListener("load", pageLoaded);
