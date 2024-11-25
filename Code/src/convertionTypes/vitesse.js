class vitesse {

  ToKmph (value, fromUnit) {  
    let result = 0
    switch (fromUnit) {
      case "kilomètreHeure":
        result = value
        break;
      case "metreSeconde":
        result = value * 3.6
        break
      case "milleHeure":
        result = value * 1.609
        break
      case "knot":
        result = value * 1.852
        break
      case "piedSeconde":
        result = value * 1.097
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromKmph (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "kilomètreHeure":
        result = value
        break;
      case "metreSeconde":
        result = value * 3.6
        break
      case "milleHeure":
        result = value * 1.609
        break
      case "knot":
        result = value * 1.852
        break
      case "piedSeconde":
        result = value * 1.097
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertVitesse(value, fromUnit, toUnit) {
    let meterCube = this.ToKmph(value, fromUnit)
    return this.FromKmph(meterCube, toUnit)
  }
}

export { vitesse }