class frequence {

  ToHz (value, fromUnit) { //Convert all to Hz
    let result = 0
    switch (fromUnit) {
      case "hertz":
        result = value
        break;
      case "Kilohertz":
        result = value * 1000
        break
      case "Megahertz":
        result = value * 1000000
        break
      case "gigahertz":
        result = value * 1000000000
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  FromHz (value, fromUnit) { //Convert Hz to the selected unit
    let result = 0
    switch (fromUnit) {
      case "hertz":
        result = value
        break;
      case "Kilohertz":
        result = value / 1000
        break
      case "Megahertz":
        result = value / 1000000
        break
      case "gigahertz":
        result = value / 1000000000
        break
      default:
        throw new Error("Unitée non supportée");
    }
    return result
  }
  
  ConvertFrequence(value, fromUnit, toUnit) {
    let hz = this.ToHz(value, fromUnit)
    return this.FromHz(hz, toUnit)
  }
}

export { frequence }