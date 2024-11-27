class donnees {
  ToGigaoctet(value, fromUnit) { // Convert all to Go
    let result = 0;
    switch (fromUnit) {
      case "bit":
        result = value / (8 * 1_073_741_824); // Binary: 1 Go = 8 * 2^30 bits
        break;
      case "octet":
        result = value / 1_073_741_824; // Binary: 1 Go = 2^30 octets
        break;
      case "kilooctet":
        result = value / (1_024 * 1_024); // Binary: 1 Go = 2^20 kilooctets
        break;
      case "megaoctet":
        result = value / 1_024; // Binary: 1 Go = 2^10 megaoctets
        break;
      case "gigaoctet":
        result = value; // Already in gigaoctets
        break;
      case "terraoctet":
        result = value * 1_024; // Binary: 1 To = 2^10 Go
        break;
      case "petaoctet":
        result = value * 1_048_576; // Binary: 1 Po = 2^20 Go
        break;
      case "exaoctet":
        result = value * 1_073_741_824; // Binary: 1 Eo = 2^30 Go
        break;
      case "zettaoctet":
        result = value * 1_099_511_627_776; // Binary: 1 Zo = 2^40 Go
        break;
      case "yottaoctet":
        result = value * 1_125_899_906_842_624; // Binary: 1 Yo = 2^50 Go
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
        result = value * (8 * 1_073_741_824); // Binary: 1 Go = 8 * 2^30 bits
        break;
      case "octet":
        result = value * 1_073_741_824; // Binary: 1 Go = 2^30 octets
        break;
      case "kilooctet":
        result = value * (1_024 * 1_024); // Binary: 1 Go = 2^20 kilooctets
        break;
      case "megaoctet":
        result = value * 1_024; // Binary: 1 Go = 2^10 megaoctets
        break;
      case "gigaoctet":
        result = value; // Already in gigaoctets
        break;
      case "terraoctet":
        result = value / 1_024; // Binary: 1 To = 2^10 Go
        break;
      case "petaoctet":
        result = value / 1_048_576; // Binary: 1 Po = 2^20 Go
        break;
      case "exaoctet":
        result = value / 1_073_741_824; // Binary: 1 Eo = 2^30 Go
        break;
      case "zettaoctet":
        result = value / 1_099_511_627_776; // Binary: 1 Zo = 2^40 Go
        break;
      case "yottaoctet":
        result = value / 1_125_899_906_842_624; // Binary: 1 Yo = 2^50 Go
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  ConvertDonnee(value, fromUnit, toUnit) {
    let gigaoctet = this.ToGigaoctet(value, fromUnit);
    return this.FromGigaoctet(gigaoctet, toUnit);
  }
};

export { donnees };