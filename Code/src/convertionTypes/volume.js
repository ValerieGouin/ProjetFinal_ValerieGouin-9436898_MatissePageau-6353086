class volume {

  Toliter (value, fromUnit) { //Convert all to Liter   
    let result = 0
    switch (fromUnit) {
      case "metreCube":
        result = value * 1000
        break;
      case "millilitre":
        result = value / 1000
        break
      case "onceLiquideUK":
        result = value / 35.195
        break
      case "onceLiquideUS":
        result = value / 33.814
        break
      case "pouceCube":
        result = value / 61.024
        break
      case "piedCube":
        result = value / 28.317
        break
      case "gallonUK":
        result = value * 4.546
        break
      case "gallonUS":
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
  
  FromLiter (value, toUnit) { //Convert Liter to the selected unit
    let result = 0
    
    switch (toUnit) {
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