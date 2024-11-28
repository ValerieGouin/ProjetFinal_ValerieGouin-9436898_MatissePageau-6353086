class donnees {
  ToGigaoctet(value, fromUnit) { // Convert all to Go
    let result = 0;
    switch (fromUnit) {
      case "bit":
        result = value / (8 * 1_073_741_824);
        break;
      case "octet":
        result = value / 1_073_741_824;
        break;
      case "kilooctet":
        result = value / (1_024 * 1_024);
        break;
      case "megaoctet":
        result = value / 1_024;
        break;
      case "gigaoctet":
        result = value;
        break;
      case "terraoctet":
        result = value * 1_024;
        break;
      case "petaoctet":
        result = value * 1_048_576;
        break;
      case "exaoctet":
        result = value * 1_073_741_824;
        break;
      case "zettaoctet":
        result = value * 1_099_511_627_776;
        break;
      case "yottaoctet":
        result = value * 1_125_899_906_842_624;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  FromGigaoctet(value, toUnit) { // Convert Go to the selected unit
    let result = 0;
    switch (toUnit) {
      case "bit":
        result = value * (8 * 1_073_741_824);
        break;
      case "octet":
        result = value * 1_073_741_824;
        break;
      case "kilooctet":
        result = value * (1_024 * 1_024);
        break;
      case "megaoctet":
        result = value * 1_024;
        break;
      case "gigaoctet":
        result = value;
        break;
      case "terraoctet":
        result = value / 1_024;
        break;
      case "petaoctet":
        result = value / 1_048_576;
        break;
      case "exaoctet":
        result = value / 1_073_741_824;
        break;
      case "zettaoctet":
        result = value / 1_099_511_627_776;
        break;
      case "yottaoctet":
        result = value / 1_125_899_906_842_624;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  ConvertDonnee(value, fromUnit, toUnit) { // Convert from one unit to another
    let gigaoctet = this.ToGigaoctet(value, fromUnit);
    return this.FromGigaoctet(gigaoctet, toUnit);
  }
};

export { donnees };