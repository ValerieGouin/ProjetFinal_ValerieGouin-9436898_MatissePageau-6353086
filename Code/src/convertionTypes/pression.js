class pression {
  Tobar(value, fromUnit) { // Convert all to Bar
    let result = 0;
    switch (fromUnit) {
      case "atmosphère":
        result = value * 1.01325;
        break;
      case "bar":
        result = value;
        break;
      case "pascal":
        result = value / 100000;
        break;
      case "psi":
        result = value / 14.5037738;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  FromBar(value, toUnit) { // Convert Bar to the selected unit
    let result = 0;
    switch (toUnit) {
      case "atmosphère":
        result = value / 1.01325;
        break;
      case "bar":
        result = value;
        break;
      case "pascal":
        result = value * 100000;
        break;
      case "psi":
        result = value * 14.5037738;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  ConvertPressure(value, fromUnit, toUnit) { // Convert from one unit to another
    let bar = this.Tobar(value, fromUnit);
    return this.FromBar(bar, toUnit);
  }
}

export { pression };