const printToDom = (stringToPrint) => {
    const selectedDiv = document.getElementById("print");
    selectedDiv.innerHTML = stringToPrint;
};
export{printToDom};