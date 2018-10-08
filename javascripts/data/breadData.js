import {setBreads, allBreads,getBreadz} from '../components/petComponent.js';

function executeThisCodeAfterFileLoaded () {
const data = JSON.parse(this.responseText);//parse chnages the json file and removes the quots from the key for the Javascript fle
setBreads(data.breads);//data.characters - this prints out the array instead of the whole info
allBreads(getBreadz());
 

}
function executeThisCodeIfXhrFails() {
    console.log('it is broken');
}


const getBreads = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
myRequest.addEventListener('error', executeThisCodeIfXhrFails);
myRequest.open('GET','./db/bread.json');
myRequest.send();
};
export{getBreads};