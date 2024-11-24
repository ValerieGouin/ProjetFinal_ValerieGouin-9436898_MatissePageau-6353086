class distances {
  choices = ["Kilimètre", "Centimètre", "Millimètre", "Mile", "Mile marin", "Yard", "Pied", "pouce", "Mètre"]
  ToMeter (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "kilomètre":
        result = value * 1000
        break;
      case "centimètre":
        result = value / 100
        break
      case "millimètre":
        result = value / 1000
        break
      case "mile":
        result = value * 1609
        break
      case "mile marin":
        result = value * 1852
        break
      case "yard":
        result = value / 1.094
        break
      case "pied":
        result = value / 3.281
        break
      case "pouce":
        result = value / 39.37
        break
      case "mètre":
        result = value
        break
    
      default:
        throw new console.error("Unitée non supportée");
    }
    return result
  }
  
  FromMeter (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "kilomètre":
        result = value / 1000
        break;
      case "centimètre":
        result = value * 100
        break
      case "millimètre":
        result = value * 1000
        break
      case "mile":
        result = value / 1609
        break
      case "mile marin":
        result = value / 1852
        break
      case "yard":
        result = value * 1.094
        break
      case "pied":
        result = value * 3.281
        break
      case "pouce":
        result = value * 39.37
        break
      case "mètre":
        result = value
        break
    
      default:
        throw new console.error("Unitée non supportée");
    }
    return result
  }
  
  ConvertDistance(value, fromUnit, toUnit) {
    let kelvin = ToMeter(value, fromUnit)
    return FromMeter(kelvin, toUnit)
  }
}

export default distances