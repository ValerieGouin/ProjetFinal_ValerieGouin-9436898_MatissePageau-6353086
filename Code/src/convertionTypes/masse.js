class masse {

  Tolivre (value, fromUnit) {  
    let result = 0
    switch (fromUnit) {
      case "tonne":
        result = value * 2205
        break;
      case "kilogramme":
        result = value * 2.205
        break
      case "gramme":
        result = value / 453.6
        break
      case "milligramme":
        result = value / 453600
        break
      case "microgramme":
        result = value / 453600000
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
  
  FromLivre (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "tonne":
        result = value / 2205
        break;
      case "kilogramme":
        result = value / 2.205
        break
      case "gramme":
        result = value * 453.6
        break
      case "milligramme":
        result = value * 453600
        break
      case "microgramme":
        result = value * 453600000
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
  
  ConvertMasse(value, fromUnit, toUnit) {
    let livre = this.Tolivre(value, fromUnit)
    return this.FromLivre(livre, toUnit)
  }
}

export { masse }