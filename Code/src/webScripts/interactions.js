import { temperature } from "../convertionTypes/temperature.js";
import { volume } from "../convertionTypes/volume.js";
import distance from "../convertionTypes/distances.js";
import { donnees } from "../convertionTypes/donnees.js";
import { masse } from "../convertionTypes/masse.js";
import { superficie } from "../convertionTypes/superficie.js";
import { vitesse } from "../convertionTypes/vitesse.js";
import { time } from "../convertionTypes/temps.js";
import { frequence } from "../convertionTypes/frequence.js";
import { pression } from "../convertionTypes/pression.js";
import { energy } from "../convertionTypes/energie.js";

const typeBoxs = document.querySelectorAll('.conversionType');
const valueInput = document.getElementById('valueInput')
const fromUnits = document.getElementById('unitBaseSelect')
const toUnits = document.getElementById('unitConvSelect')
const resultBox = document.getElementById('valueOutput')


let fromUnitSelected = fromUnits.options[fromUnits.selectedIndex].value
let toUnitSelected = toUnits.options[toUnits.selectedIndex].value
let value = 0

function updateOutput () {   
  typeBoxs.forEach(type => {
    if(type.classList.contains("active")) {
      switch (type.innerText.toLowerCase()) {
        case "température":
          editResult(new temperature().ConvertTemperature(value, fromUnitSelected, toUnitSelected))
          break;
        case "volume":
          editResult(new volume().ConvertVolume(value, fromUnitSelected, toUnitSelected))
          break
        case "distance":
          editResult(new distance().ConvertDistance(value, fromUnitSelected, toUnitSelected))
          break
        case "données":
          editResult(new donnees().ConvertDonnee(value, fromUnitSelected, toUnitSelected))
          break
        case "masse":
          editResult(new masse().ConvertMasse(value, fromUnitSelected, toUnitSelected))
          break
        case "superficie":
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
          editResult()
          break
      }
    }
  });
}

valueInput.addEventListener('input', (event) => {  
  if(event.target.value == "") {
    value = 0
  }else{
    value = parseFloat(event.target.value)
  }
  updateOutput()
})

fromUnits.addEventListener('change', (event) => {
  fromUnitSelected = event.target.options[event.target.selectedIndex].value;
  updateOutput()
})

toUnits.addEventListener('change', (event) => {
  toUnitSelected = event.target.options[event.target.selectedIndex].value;
  updateOutput()
})

function editResult(result) {
  if(value == 0) {
    resultBox.value = ""
  }else{
    resultBox.value = Math.round(parseFloat(result) * 1000) / 1000
  }
}
