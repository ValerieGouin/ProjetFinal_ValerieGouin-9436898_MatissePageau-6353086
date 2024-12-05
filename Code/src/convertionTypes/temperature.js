class temperature {
  
  Tokelvin(value, fromUnit) { //Convert all to Kelvin
    let result = 0
    switch (fromUnit.toLowerCase()) {
      case "celsius":
        result = value + 273.15;
        break
      case "fahrenheit":
        result = (value - 32) * 5 / 9 + 273.15
        break;
      case "kelvin":
        result = value;
        break
      case "rankine":
        result = value * 5 / 9
        break
      default:
        throw new Error("Unitée non supportée")
    }    
    return result;
  }

  Fromkelvin(value, toUnit) { //Convert Kelvin to the selected unit
    console.log(toUnit)
    let result = 0;
    switch (toUnit) {
      case "celsius":
        result = value - 273.15
        break;
      case "fahrenheit":
        result = (value - 273.15) * 9 / 5 + 32
        break
      case "kelvin":
        result = value
        break
      case "rankine":
        result = value * (9 / 5)
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }

  ConvertTemperature(value, fromUnit, toUnit) {  
    let kelvin = this.Tokelvin(value, fromUnit)
    return this.Fromkelvin(kelvin, toUnit)
  }
}

export { temperature }