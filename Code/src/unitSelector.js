let type = document.querySelector('.typeSelectionne')
let fromUnit = document.querySelector('.uniteeBaseSelect')
let toUnit = document.querySelector('.uniteeConvSelect')
let inputValue = document.querySelector('.entree')
let outputValue = document.querySelector('.resultat')

if(fromUnit != null && toUnit != null) {
  let result = 0
  switch (type.classList) {
    case "temperature":
      result = temperature.prototype.ConvertTemperature(inputValue.innerHTML, fromUnit.innerHTML.toLowerCase(), toUnit.innerHTML.toLowerCase())
      break;
    case "volume":
      result = volume.prototype.ConvertVolume(inputValue.innerHTML, fromUnit.innerHTML.toLowerCase(), toUnit.innerHTML.toLowerCase())
      break
    case "distance":
      result = distance.prototype.ConvertDistance(inputValue.innerHTML, fromUnit.innerHTML.toLowerCase(), toUnit.innerHTML.toLowerCase())
      break
  }

  outputValue.innerHTML = result
}