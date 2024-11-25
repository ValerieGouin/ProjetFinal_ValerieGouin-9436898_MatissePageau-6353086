class time {

  ToHour (value, fromUnit) {  
    let result = 0
    switch (fromUnit) {
      case "semaine":
        result = value * 168
        break;
      case "jour":
        result = value * 24
        break
      case "heure":
        result = value
        break
      case "minute":
        result = value / 60
        break
      case "seconde":
        result = value / 3600
        break
      case "milliseconde":
        result = value / 36000000
        break
      case "microseconde":
        result = value / 36000000000
        break
      case "nanoseconde":
        result = value / 36000000000000
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromHour (value, fromUnit) {
    let result = 0
    switch (fromUnit) {
      case "semaine":
        result = value / 168
        break;
      case "jour":
        result = value / 24
        break
      case "heure":
        result = value
        break
      case "minute":
        result = value * 60
        break
      case "seconde":
        result = value * 3600
        break
      case "milliseconde":
        result = value * 36000000
        break
      case "microseconde":
        result = value * 36000000000
        break
      case "nanoseconde":
        result = value * 36000000000000
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertTime(value, fromUnit, toUnit) {
    let meterCube = this.ToHour(value, fromUnit)
    return this.FromHour(meterCube, toUnit)
  }
}

export { time }