class energy {

  ToWattheure (value, fromUnit) { //Convert all to Wh
    let result = 0
    switch (fromUnit) {
      case "joule":
        result = value / 3600
        break;
      case "kilojoule":
        result = value / 3.6
        break
      case "calorie":
        result = value / 859.84522785899
        break
      case "kilocalorie":
        result = value / 0.85984522785899
        break
      case "wattHeure":
        result = value
        break
      case "kilowattHeure":
        result = value * 1000
        break
      case "btu":
        result = value / 3.4095106405145
        break
      case "thermAmericain":
        result = value * 29329.722222222
        break
      case "piedLivre":
        result = value / 2655.2237373982
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromWattheure (value, toUnit) { //Convert Wh to the selected unit
    let result = 0
    switch (toUnit) {
      case "joule":
        result = value * 3600
        break;
      case "kilojoule":
        result = value * 3.6
        break
      case "calorie":
        result = value * 859.84522785899
        break
      case "kilocalorie":
        result = value * 0.85984522785899
        break
      case "wattHeure":
        result = value
        break
      case "kilowattHeure":
        result = value / 1000
        break
      case "btu":
        result = value * 3.4095106405145
        break
      case "thermAmericain":
        result = value / 29329.722222222
        break
      case "piedLivre":
        result = value * 2655.2237373982
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertEnergy(value, fromUnit, toUnit) { // Convert from one unit to another
    let wh = this.ToWattheure(value, fromUnit)
    return this.FromWattheure(wh, toUnit)
  }
}

export { energy }