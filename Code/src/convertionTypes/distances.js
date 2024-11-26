class distances {

  ToMeter (value, fromUnit) {  //Convert all to Meter
    let result = 0
    switch (fromUnit) {
      case "kilometre":
        result = value * 1000
        break;
      case "decimetre":
        result = value / 10
        break
      case "centimetre":
        result = value / 100
        break
      case "millimetre":
        result = value / 1000
        break
      case "mille":
        result = value * 1609
        break
      case "milleMarin":
        result = value * 1852
        break
      case "verge":
        result = value / 1.094
        break
      case "pied":
        result = value / 3.281
        break
      case "pouce":
        result = value / 39.37
        break
      case "metre":
        result = value
        break
    
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromMeter (value, fromUnit) { //Convert Meter to the selected unit
    let result = 0
    switch (fromUnit) {
      case "kilometre":
        result = value / 1000
        break;
      case "decimetre":
        result = value * 10
        break
      case "centimetre":
        result = value * 100
        break
      case "millimetre":
        result = value * 1000
        break
      case "mille":
        result = value / 1609
        break
      case "milleMarin":
        result = value / 1852
        break
      case "verge":
        result = value * 1.094
        break
      case "pied":
        result = value * 3.281
        break
      case "pouce":
        result = value * 39.37
        break
      case "metre":
        result = value
        break
    
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertDistance(value, fromUnit, toUnit) {
    let meter = this.ToMeter(value, fromUnit)
    return this.FromMeter(meter, toUnit)
  }
}

export { distances }