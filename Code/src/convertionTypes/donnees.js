class donnees {

  ToGigaoctet (value, fromUnit) { //Convert all to Go
    let result = 0
    switch (fromUnit) {
      case "bit":
        result = value / (8 * 10 ** 9)
        break;
      case "octet":
        result = value / 10**9
        break
      case "kilooctet":
        result = value / 10**6
        break
      case "megaoctet":
        result = value / 10**3
        break
      case "gigaoctet":
        result = value
        break
      case "terraoctet":
        result = value * 10**3
        break
      case "petaoctet":
        result = value * 10**6
        break
      case "exaoctet":
        result = value * 10**9
        break
      case "zettaoctet":
        result = value * 10**12
        break
      case "yottaoctet":
        result = value * 10**15
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromGigaoctet (value, fromUnit) { //Convert Go to the selected unit
    let result = 0
    switch (fromUnit) {
      case "bit":
        result = value * (8 * 10 ** 9)
        break;
      case "octet":
        result = value * 10**9
        break
      case "kilooctet":
        result = value * 10**6
        break
      case "megaoctet":
        result = value * 10**3
        break
      case "gigaoctet":
        result = value
        break
      case "terraoctet":
        result = value / 10**3
        break
      case "petaoctet":
        result = value / 10**6
        break
      case "exaoctet":
        result = value / 10**9
        break
      case "zettaoctet":
        result = value / 10**12
        break
      case "yottaoctet":
        result = value / 10**15
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertDonnee(value, fromUnit, toUnit) {
    let gigaoctet = this.ToGigaoctet(value, fromUnit)
    return this.FromGigaoctet(gigaoctet, toUnit)
  }
}

export { donnees }