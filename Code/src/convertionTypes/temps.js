class time {
  ToHour(value, fromUnit) { // Convert all to Hour
    let result = 0;
    switch (fromUnit) {
      case "semaine":
        result = value * 168;
        break;
      case "jour":
        result = value * 24;
        break;
      case "heure":
        result = value;
        break;
      case "minute":
        result = value / 60;
        break;
      case "seconde":
        result = value / 3600;
        break;
      case "milliseconde":
        result = value / 3600000;
        break;
      case "microseconde":
        result = value / 3600000000;
        break;
      case "nanoseconde":
        result = value / 3600000000000;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  FromHour(value, toUnit) { // Convert Hour to the selected unit
    let result = 0;
    switch (toUnit) {
      case "semaine":
        result = value / 168;
        break;
      case "jour":
        result = value / 24;
        break;
      case "heure":
        result = value;
        break;
      case "minute":
        result = value * 60;
        break;
      case "seconde":
        result = value * 3600;
        break;
      case "milliseconde":
        result = value * 3600000;
        break;
      case "microseconde":
        result = value * 3600000000;
        break;
      case "nanoseconde":
        result = value * 3600000000000;
        break;
      default:
        throw new Error("Unitée non supportée");
    }
    return result;
  }

  ConvertTime(value, fromUnit, toUnit) { // Convert from one unit to another
    let hour = this.ToHour(value, fromUnit);
    return this.FromHour(hour, toUnit);
  }
}

export { time };