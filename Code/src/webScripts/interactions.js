import { temperature } from "../convertionTypes/temperature.js";
import { volume } from "../convertionTypes/volume.js";
import distance from "../convertionTypes/distances.js";
import { donnees } from "../convertionTypes/donnees.js";

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
