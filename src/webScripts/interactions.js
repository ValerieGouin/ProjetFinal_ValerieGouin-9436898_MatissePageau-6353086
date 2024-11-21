const typeBoxs = document.querySelectorAll('.type')
const fromUnits = document.getElementById('uniteeBase')
const toUnits = document.getElementById('uniteeConvertion')

typeBoxs.forEach(type => {
  type.addEventListener('click', function() {
    typeBoxs.forEach(type => {
      type.classList.remove('typeSelectionne')
    });
    type.classList.add('typeSelectionne')
    switch (type.classList) {
      case "temperature":
        populateChoices(temperature)
        break;
      case "volume":
        populateChoices(volume)
        break
      case "distance":
        populateChoices(distance)
        break
    }
  })
});

fromUnits.forEach(unit => {
  unit.addEventListener('click', function() {
    fromUnits.forEach(unit => {
      unit.classList.remove('uniteeBaseSelect')
    });
    unit.classList.add('uniteeBaseSelect')
  })
});

toUnits.forEach(unit => {
  unit.addEventListener('click', function() {
    toUnits.forEach(unit => {
      unit.classList.remove('uniteeConvSelect')
    });
    unit.classList.add('uniteeConvSelect')
  })
});

function populateChoices(classe) {
  fromUnits.innerHTML = ""
  toUnits.innerHTML = ""
  classe.prototype.choices.forEach(option => {
    let opt = document.createElement("option")
    opt.value = option.toLowerCase()
    opt.textContent = option
    fromUnits.appendChild(opt)
    toUnits.appendChild(opt)
  })
}
