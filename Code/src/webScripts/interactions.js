import { temperature } from "../convertionTypes/temperature.js";
import { volume } from "../convertionTypes/volume.js";
import { distances } from "../convertionTypes/distances.js";
import { donnees } from "../convertionTypes/donnees.js";
import { masse } from "../convertionTypes/masse.js";
import { superficie } from "../convertionTypes/superficie.js";
import { vitesse } from "../convertionTypes/vitesse.js";
import { time } from "../convertionTypes/temps.js";
import { frequence } from "../convertionTypes/frequence.js";
import { pression } from "../convertionTypes/pression.js";
import { energy } from "../convertionTypes/energie.js";
import { currency } from "../convertionTypes/currency.js";

const typeBoxs = document.querySelectorAll('.conversionType');  //The boxes on the top of the page for the desired type of convertion
const valueInput = document.getElementById('valueInput')        //The input value
const fromUnits = document.getElementById('unitBaseSelect')     //The base unit
const toUnits = document.getElementById('unitConvSelect')       //The selected unit to convert to
const resultBox = document.getElementById('valueOutput')        //The result box
let deviseApi = {}

let fromUnitSelected = fromUnits.options[fromUnits.selectedIndex].value
let toUnitSelected = toUnits.options[toUnits.selectedIndex].value
let value = 0

function updateOutput () {  //Select what convertion to do based on the type desired
  typeBoxs.forEach(type => {
    if(type.classList.contains("active")) {
      switch (type.innerText.toLowerCase()) { //switch between the type of convertion
        case "température":
          editResult(new temperature().ConvertTemperature(value, fromUnitSelected, toUnitSelected))
          break;
        case "volume":
          editResult(new volume().ConvertVolume(value, fromUnitSelected, toUnitSelected))
          break
        case "distance":
          editResult(new distances().ConvertDistance(value, fromUnitSelected, toUnitSelected))
          break
        case "données":
          editResult(new donnees().ConvertDonnee(value, fromUnitSelected, toUnitSelected))
          break
        case "masse":
          editResult(new masse().ConvertMasse(value, fromUnitSelected, toUnitSelected))
          break
        case "surface":
          editResult(new superficie().ConvertSuperficie(value, fromUnitSelected, toUnitSelected))
          break
        case "vitesse":
          editResult(new vitesse().ConvertVitesse(value, fromUnitSelected, toUnitSelected))
          break
        case "temps":
          editResult(new time().ConvertTime(value, fromUnitSelected, toUnitSelected))
          break
        case "fréquence":
          editResult(new frequence().ConvertFrequence(value, fromUnitSelected, toUnitSelected))
          break
        case "pression":
          editResult(new pression().ConvertPressure(value, fromUnitSelected, toUnitSelected))
          break
        case "énergie":
          editResult(new energy().ConvertEnergy(value, fromUnitSelected, toUnitSelected))
          break
        case "devise":
          editResult(new currency().ConvertCurrency(deviseApi, value, fromUnitSelected, toUnitSelected))
          break
      }
    }
  });
}

valueInput.addEventListener('input', (event) => { //Event listener every time the value change in the input box
  if(event.target.value == "") {
    value = 0
  }else{
    value = parseFloat(event.target.value)
  }
  updateOutput()
})

fromUnits.addEventListener('change', (event) => {  //Event listener every time the base unit change in the input box
  fromUnitSelected = event.target.options[event.target.selectedIndex].value;
  updateOutput()
})

toUnits.addEventListener('change', (event) => {  //Event listener every time the selected unit to convert to change in the input box
  toUnitSelected = event.target.options[event.target.selectedIndex].value;
  updateOutput()
})

typeBoxs.forEach(type => {
  if(type.innerText.toLowerCase() == "devise" && type.classList.contains("active")) {
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_ZlSw71Qso6zhtxIQ5dBs2amW3ymuXEOiTQ5y1MD0&currencies=EUR%2CUSD%2CCAD%2CCHF%2CVND%2CJPY%2CCNY%2CGBP')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      return response.json();
    })
    .then(data => {
      deviseApi = data
    })
    .catch(error => {
      console.error('API Request Failed:', error);
    });
  }
})

function editResult(result) { //Change the value in the result box
  if(value == 0) {
    resultBox.value = ""
  }else{
    resultBox.value = Math.round(parseFloat(result) * 100) / 100
  }
}
