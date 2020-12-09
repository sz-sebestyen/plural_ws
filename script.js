function pageLoaded() {

  let rootE = document.getElementById("root");

  let aTextArray = ["szeder", "alma", "cseresznye", "eper", "egres", "meggy", "dinnye", "datolya", "barack", "kiwi", "citrom"];

  // console.log(aTextArray[2]);

  // console.log(aTextArray.length);

  for (let index = 0; index < aTextArray.length; index++) {

    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }

  let fruitDivs = rootE.querySelectorAll(".fruit");
  
  // console.log(fruitDivs[2]);

  for (let index = 0; index < fruitDivs.length; index++) {
    
    // console.log(index === 1);
    // console.log(index % 2);

    if (index % 2 === 0){

      fruitDivs[index].classList.add("trueClass");

    } else if (index % 5 === 0) {

      fruitDivs[index].classList.add("anotherClass");

    } else {
      
      fruitDivs[index].classList.add("falseClass");

    }
    
  }
}

window.addEventListener("load", pageLoaded);
