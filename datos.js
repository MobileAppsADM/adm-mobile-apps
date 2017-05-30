let arregloDeLugares = [
  {
    name: 'Pepe Refacciones',
    description: 'Se arreglan todo tipo de bicis',
    address: 'Monterrey 215',
    phone: '123456789',
    schedule: 'Lun: 12:00-8:00 pm',
    place_type: 'taller',
    img: 'http://lorempixel.com/400/200/sports/',
    location: {
      lat: '19.412182',
      lng: '-99.162828'
    },
    discounts: [
      'Servicio completo a $200',
      'Servicio completo a $300',
      'Servicio completo a $500',
      'Servicio completo a $600',
    ],
    rating: [2, 3, 5, 3, 2, 4, 1, 4, 2, 3, 4],
    links: [
      'http://www.facebook.com/peperefacciones'
    ]
  }

]

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




console.log('hola')
