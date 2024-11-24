import { temperature } from "../convertionTypes/temperature.js";
import { volume } from "../convertionTypes/volume.js";
import distance from "../convertionTypes/distances.js";

const typeBoxs = document.querySelectorAll('.conversionType');
const valueInput = document.getElementById('valueInput')
const fromUnits = document.getElementById('unitBaseSelect')
const toUnits = document.getElementById('unitConvSelect')
const resultBox = document.getElementById('valueOutput')


let fromUnitSelected = fromUnits.options[fromUnits.selectedIndex].value
let toUnitSelected = toUnits.options[toUnits.selectedIndex].value
let value = 0

function updateOutput () {  
  console.log("oui");
  
  typeBoxs.forEach(type => {
    if(type.classList.contains("active")) {
      switch (type.innerText.toLowerCase()) {
        case "température":
          editResult(new temperature().ConvertTemperature(value, fromUnitSelected, toUnitSelected).toFixed(3))
          break;
        case "volume":
          editResult(new volume().ConvertVolume(value, fromUnitSelected, toUnitSelected).toFixed(3))
          break
        case "distance":
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
    resultBox.value = result
  }
}
