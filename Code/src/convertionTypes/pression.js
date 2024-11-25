class pression {

  Tobar (value, fromUnit) {  
    let result = 0
    switch (fromUnit) {
      case "atmosphère":
        result = value * 1.013
        break;
      case "bar":
        result = value
        break
      case "pascal":
        result = value / 100000
        break
      case "psi":
        result = value / 14.504
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromBar (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "atmosphère":
        result = value / 1.013
        break;
      case "bar":
        result = value
        break
      case "pascal":
        result = value * 100000
        break
      case "psi":
        result = value * 14.504
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertPressure(value, fromUnit, toUnit) {
    let bar = this.Tobar(value, fromUnit)
    return this.FromBar(bar, toUnit)
  }
}

export { pression }