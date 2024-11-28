class superficie {
  ToMeterSquare(value, fromUnit) { // Convert all to Meter square
    let result = 0;
    switch (fromUnit) {
      case "kilometreCarre":
        result = value * 1000000;
        break;
      case "metreCarre":
        result = value;
        break;
      case "milleCarre":
        result = value * 2589988.11;
        break;
      case "hectare":
        result = value * 10000;
        break;
      case "pouceCarre":
        result = value / 1550;
        break;
      case "vergeCarre":
        result = value / 1.196;
        break;
      case "piedCarre":
        result = value / 10.764;
        break;
      case "acre":
        result = value * 4047;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  FromMeterSquare(value, toUnit) { // Convert Meter square to the selected unit
    let result = 0;
    switch (toUnit) {
      case "kilometreCarre":
        result = value / 1000000;
        break;
      case "metreCarre":
        result = value;
        break;
      case "milleCarre":
        result = value / 2589988.11;
        break;
      case "hectare":
        result = value / 10000;
        break;
      case "pouceCarre":
        result = value * 1550;
        break;
      case "vergeCarre":
        result = value * 1.196;
        break;
      case "piedCarre":
        result = value * 10.764;
        break;
      case "acre":
        result = value / 4047;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  ConvertSuperficie(value, fromUnit, toUnit) { // Convert from one unit to another
    let meterSquare = this.ToMeterSquare(value, fromUnit);
    return this.FromMeterSquare(meterSquare, toUnit);
  }
}

export { superficie };
