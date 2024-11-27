class currency {
  ToUSD (value, USDValue, fromUnit) { //Convert all to Livre  
    let result = 0
    switch (fromUnit) {
      case "CAD":
        result = 1
        break;
      case "EUR":
        result = value * 2.204622621848
        break
      case "USD":
        result = value
        break
      case "milligramme":
        result = value / 453592.37
        break
      case "microgramme":
        result = value / 453592370.000159801
        break
      case "once":
        result = value / 16
        break
      case "livre":
        result = value
        break
      case "tonneLongue":
        result = value * 2240
        break
      case "tonneCourte":
        result = value * 2000
        break
      case "stone":
        result = value * 14
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromUSD (value, toUnit) { //Convert Livre to the selected unit
    let result = 0
    switch (toUnit) {
      case "tonne":
        result = value / 2204.622621848
        break;
      case "kilogramme":
        result = value / 2.204622621848
        break
      case "gramme":
        result = value * 453.59237
        break
      case "milligramme":
        result = value * 453592.37
        break
      case "microgramme":
        result = value * 453592370.000159801
        break
      case "once":
        result = value * 16
        break
      case "livre":
        result = value
        break
      case "tonneLongue":
        result = value / 2240
        break
      case "tonneCourte":
        result = value / 2000
        break
      case "stone":
        result = value / 14
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertCurrency(value, fromUnit, toUnit) {
    let USD = this.ToUSD(value, fromUnit)
    return this.FromUSD(USD, toUnit)
  }
}

export { currency }