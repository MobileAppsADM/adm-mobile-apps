function getHTMLForDiscounts (discounts) {
  var htmlDiscounts = ''
  console.log('discounts', discounts)
  for (var i = 0; i < discounts.length; i++) {
    htmlDiscounts += '<li>' + discounts[i] + '</li>'
  }
  return htmlDiscounts
}

document.querySelector('#place-name').innerText = arregloDeLugares[0].name
document.querySelector('#place-type').innerText = arregloDeLugares[0].place_type
document.querySelector('#main-img').src = arregloDeLugares[0].img
document.querySelector('#description').innerText = arregloDeLugares[0].description
document.querySelector('#lista-descuentos').innerHTML = getHTMLForDiscounts(arregloDeLugares[0].discounts)
// document.querySelector('#place-name').innerText = arregloDeLugares[0].name
// document.querySelector('#place-name').innerText = arregloDeLugares[0].name
// document.querySelector('#place-name').innerText = arregloDeLugares[0].name
