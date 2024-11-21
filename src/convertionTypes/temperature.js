class temperature {
  choices = ["Celcius", "Fahrenheit", "Kelvin"]
  Tokelvin (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "celcius":
        result = value + 273.15
        break;
      case "fahrenheit":
        result = (value - 32) * 5 / 9 + 273.15
        break
      case "kelvin":
        result = value
        break
    
      default:
        throw new console.error("Unitée non supportée");
    }
    return result
  }
  
  Fromkelvin (value, toUnit) {
    let result = 0
    switch (toUnit) {
      case "celcius":
        result = value - 273.15
        break;
      case "fahrenheit":
        result = (value - 273.15) * 9/5 + 32
        break
      case "kelvin":
        result = value
        break
    
      default:
        throw new console.error("Unitée non supportée");
    }
    return result
  }
  
  ConvertTemperature(value, fromUnit, toUnit) {
    let kelvin = Tokelvin(value, fromUnit)
    return Fromkelvin(kelvin, toUnit)
  }
}