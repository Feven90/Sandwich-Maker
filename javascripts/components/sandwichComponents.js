import {printToDom} from "../helpers/util.js";

let breads = [];
const setBreads = (newArray) => {
    breads = newArray;
}

const getBreadz = () => {
    return breads; 
}

const BreadEvent = document.getElementById("orderOnline");
BreadEvent.addEventListener('click',() => {
    
});


const allBreads = (breadsArray) => {
    let newString = "";
    breadsArray.forEach((breads) => {
        newString += `<div class="card col-3 text-center">`;
  newString += `<h5 class="card-header"> ${breads.whiteBread}</h5>`;
  newString +=  ` <p class="card-title">${breads.wheatBread}</p>`;
  newString += `<div class="card-body">`;
  newString += `<h3 class="card-title"> ${breads.rosemaryParmesanBread}</h3>`;
  newString += `<p class="card-title"> ${pets.glutenFreeBread}</p>`;
  newString += `</div>`;
  newString += `</div>`;
    });
    printToDom(newString);
}

export{allBreads,setBreads,getBreadz}

