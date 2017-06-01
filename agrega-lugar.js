document.addEventListener('DOMContentLoaded', function (event) {
  cargaLugares()
});

function guardaLugar () {
  let nameValue = document.querySelector('#name-input').value
  let descriptionValue = document.querySelector('#description-textarea').value
  let phoneValue = document.querySelector('#phone-input').value
  let addressValue = document.querySelector('#address-input').value
  let scheduleValue = document.querySelector('#schedule-textarea').value
  let place_typeValue = document.querySelector('#place-type-select').value
  arregloDeLugares.push(
    {
      name: nameValue,
      description: descriptionValue,
      address: addressValue,
      phone: phoneValue,
      schedule: scheduleValue,
      place_type: place_typeValue,
      img: 'http://lorempixel.com/400/200/sports/'
    }
  )
  cargaLugares()
  cierraFormulario()
}

function abreFormulario () {
  document.querySelector('#btn-agrega-lugar').style.display = 'none'
  document.querySelector('#formulario-nuevo-lugar').style.display = 'block'
}

function cierraFormulario () {
  document.querySelector('#name-input').value = ''
  document.querySelector('#description-textarea').value = ''
  document.querySelector('#phone-input').value = ''
  document.querySelector('#address-input').value = ''
  document.querySelector('#schedule-textarea').value = ''
  document.querySelector('#place-type-select').value = 'taller'
  document.querySelector('#formulario-nuevo-lugar').style.display = 'none'
  document.querySelector('#btn-agrega-lugar').style.display = 'block'
}

function llenaListaLugares (lugares) {
  var htmlLugares = ''
  for (var i = 0; i < lugares.length; i++) {
    htmlLugares += '<li>' + lugares[i].name + '</li>'
  }
  return htmlLugares
}

function cargaLugares () {
  document.querySelector('#lista-lugares').innerHTML = llenaListaLugares(arregloDeLugares)
}
