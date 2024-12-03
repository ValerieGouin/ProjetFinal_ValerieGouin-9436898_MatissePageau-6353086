class currency {
  ToUSD (value, currencyValue, fromUnit) { //Convert all to USD    
    let result = 0
    switch (fromUnit) {
      case "CAD":
        result = value / currencyValue.CAD.value
        break;
      case "EUR":
        result = value / currencyValue.EUR.value
        break
      case "USD":
        result = value
        break
      case "CHF":
        result = value / currencyValue.CHF.value
        break
      case "VND":
        result = value / currencyValue.VND.value
        break
      case "JPY":
        result = value / currencyValue.JPY.value
        break
      case "CNY":
        result = value / currencyValue.CNY.value
        break
      case "GBP":
        result = value / currencyValue.GBP.value
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromUSD (value, currencyValue, toUnit) { //Convert USD to the selected unit
    let result = 0
    switch (toUnit) {
      case "CAD":
        result = value * currencyValue.CAD.value
        break;
      case "EUR":
        result = value * currencyValue.EUR.value
        break
      case "USD":
        result = value
        break
      case "CHF":
        result = value * currencyValue.CHF.value
        break
      case "VND":
        result = value * currencyValue.VND.value
        break
      case "JPY":
        result = value * currencyValue.JPY.value
        break
      case "CNY":
        result = value * currencyValue.CNY.value
        break
      case "GBP":
        result = value * currencyValue.GBP.value
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertCurrency(response, value, fromUnit, toUnit) { // Convert from one unit to another
    let USD = this.ToUSD(value, response.data, fromUnit)
    return this.FromUSD(USD, response.data, toUnit)
  }
}

export { currency }