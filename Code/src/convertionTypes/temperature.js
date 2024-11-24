class temperature {
  
  Tokelvin(value, fromUnit) {
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
      default:
        throw new Error("Unitée non supportée")
    }    
    return result;
  }

  Fromkelvin(value, toUnit) {
    let result = 0;
    switch (toUnit.toLowerCase()) {
      case "celsius":
        result = value - 273.15
        break;
      case "fahrenheit":
        result = (value - 273.15) * 9 / 5 + 32
        break
      case "kelvin":
        result = value
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