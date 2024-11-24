class volume {
  choices = ["Mètre cube","Litre", "Millilitre", "Once liquide impériale", "Once liquide américaine", "Pouce cube", "Pied cube", "Galon impérial", "Galon américain"]

  Toliter (value, fromUnit) {
    let result = 0
    switch (fromUnit.toLowerCase()) {
      case "mètre cube":
        result = value * 1000
        break;
      case "millilitre":
        result = value / 1000
        break
      case "once liquide impériale":
        result = value / 35.195
        break
      case "once liquide américaine":
        result = value / 33.814
        break
      case "pouce cube":
        result = value / 61.024
        break
      case "pied cube":
        result = value / 28.317
        break
      case "galon impérial":
        result = value * 4.546
        break
      case "galon américain":
        result = value * 3.785
        break
      case "litre":
        result = value
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromLiter (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "metreCube":
        result = value / 1000
        break;
      case "millilitre":
        result = value * 1000
        break
      case "onceLiquideUK":
        result = value * 35.195
        break
      case "onceLiquideUS":
        result = value * 33.814
        break
      case "pouceCube":
        result = value * 61.024
        break
      case "piedCube":
        result = value * 28.317
        break
      case "gallonUK":
        result = value / 4.546
        break
      case "gallonUS":
        result = value / 3.785
        break
      case "litre":
        result = value
        break
    
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertVolume(value, fromUnit, toUnit) {
    let liter = this.Toliter(value, fromUnit)
    return this.FromLiter(liter, toUnit)
  }
}

export { volume }