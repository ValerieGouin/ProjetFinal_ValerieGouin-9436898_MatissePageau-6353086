class masse {

  Tolivre (value, fromUnit) { //Convert all to Livre  
    let result = 0
    switch (fromUnit) {
      case "tonne":
        result = value * 2204.622621848
        break;
      case "kilogramme":
        result = value * 2.204622621848
        break
      case "gramme":
        result = value / 453.59237
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
  
  FromLivre (value, toUnit) { //Convert Livre to the selected unit
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
  
  ConvertMasse(value, fromUnit, toUnit) { // Convert from one unit to another
    let livre = this.Tolivre(value, fromUnit)
    return this.FromLivre(livre, toUnit)
  }
}

export { masse }