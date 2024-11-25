class superficie {

  ToMeterCube (value, fromUnit) {  
    let result = 0
    switch (fromUnit) {
      case "kilometreCarre":
        result = value * 1000000
        break;
      case "metreCarre":
        result = value
        break
      case "milleCarre":
        result = value * 2589988.11
        break
      case "hectare":
        result = value * 10000
        break
      case "pouceCarre":
        result = value / 1550
        break
      case "vergeCarre":
        result = value / 1.196
        break
      case "piedCarre":
        result = value / 10.764
        break
      case "acre":
        result = value * 4047
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromMeterCube (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "kilometreCarre":
        result = value / 1000000
        break;
      case "metreCarre":
        result = value
        break
      case "milleCarre":
        result = value / 2589988.11
        break
      case "hectare":
        result = value / 10000
        break
      case "pouceCarre":
        result = value * 1550
        break
      case "vergeCarre":
        result = value * 1.196
        break
      case "piedCarre":
        result = value * 10.764
        break
      case "acre":
        result = value / 4047
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertSuperficie(value, fromUnit, toUnit) {
    let meterCube = this.ToMeterCube(value, fromUnit)
    return this.FromMeterCube(meterCube, toUnit)
  }
}

export { superficie }