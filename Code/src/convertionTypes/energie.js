class energy {

  ToWattheure (value, fromUnit) {  
    let result = 0
    switch (fromUnit) {
      case "joule":
        result = value / 3600000
        break;
      case "kilojoule":
        result = value / 3600
        break
      case "calorie":
        result = value / 860400
        break
      case "kilocalorie":
        result = value / 860.4
        break
      case "wattHeure":
        result = value
        break
      case "kilowattHeure":
        result = value * 860.4
        break
      case "btu":
        result = value / 3412
        break
      case "thermAmericain":
        result = value * 29.3
        break
      case "piedLivre":
        result = value / 2655000000
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromWattheure (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "joule":
        result = value * 3600000
        break;
      case "kilojoule":
        result = value * 3600
        break
      case "calorie":
        result = value * 860400
        break
      case "kilocalorie":
        result = value * 860.4
        break
      case "wattHeure":
        result = value
        break
      case "kilowattHeure":
        result = value / 860.4
        break
      case "btu":
        result = value * 3412
        break
      case "thermAmericain":
        result = value / 29.3
        break
      case "piedLivre":
        result = value * 2655000000
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertEnergy(value, fromUnit, toUnit) {
    let wh = this.ToWattheure(value, fromUnit)
    return this.FromWattheure(wh, toUnit)
  }
}

export { energy }