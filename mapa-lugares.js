var pointList = []
let mymap
let dibujando = false
let GrupoDeTalleres
let GrupoDeTiendas
let GrupoDeBikeFriendly
let GrupoDeEstacionamientos

document.addEventListener('DOMContentLoaded', function (event) {
  cargaMapa()
})

function cargaMapa () {
  mymap = L.map('mapid').setView([19.5, -99.2], 11)

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap)
  GrupoDeTalleres = L.layerGroup([])
  GrupoDeTiendas = L.layerGroup([])
  GrupoDeBikeFriendly = L.layerGroup([])
  GrupoDeEstacionamientos = L.layerGroup([])
  agregaGrupoDeLugares()
}

function agregaGrupoDeLugares () {

  //filter
    //  let talleres = arregloDeLugares.filter(lugar => lugar.place_type === 'taller')
    //  let tiendas = arregloDeLugares.filter((lugar, index) => {
    //   return lugar.place_type === 'tienda'
    // })
  //map'
    arregloDeLugares.forEach(lugar => {
       let marker = L.marker(lugar.location).bindPopup(lugar.name)
       agregaAGrupo(marker, lugar.place_type)
       return marker
    })
    mymap.addLayer(GrupoDeTalleres)
    mymap.addLayer(GrupoDeTiendas)
    mymap.addLayer(GrupoDeBikeFriendly)
    mymap.addLayer(GrupoDeEstacionamientos)
}

function agregaAGrupo (marker, tipo) {
  if (tipo === 'taller' ) GrupoDeTalleres.addLayer(marker)
  if (tipo === 'tienda' ) GrupoDeTiendas.addLayer(marker)
  if (tipo === 'bikefriendly' ) GrupoDeBikeFriendly.addLayer(marker)
  if (tipo === 'estacionamiento' ) GrupoDeEstacionamientos.addLayer(marker)
}

function toggleTalleres () {
  if (mymap.hasLayer(GrupoDeTalleres)) mymap.removeLayer(GrupoDeTalleres)
  else mymap.addLayer(GrupoDeTalleres)
  // let btnTaller = document.querySelector('#btn-taller').className.replace(/\bselected\b/,'')
  // if (btnTaller.hasClass('selected')) btnTaller.className.replace(/\bselected\b/,'')
  // else btnTaller.addClass('selected')
}
function toggleTiendas () {
  if (mymap.hasLayer(GrupoDeTiendas)) mymap.removeLayer(GrupoDeTiendas)
  else mymap.addLayer(GrupoDeTiendas)
  // let btnTienda = document.querySelector('#btn-tienda').className.replace(/\bselected\b/,'')
  // if (btnTienda.hasClass('selected')) btnTienda.removeClass('selected')
  // else btnTienda.addClass('selected')
}
function toggleBikefriendly () {
  if (mymap.hasLayer(GrupoDeBikeFriendly)) mymap.removeLayer(GrupoDeBikeFriendly)
  else mymap.addLayer(GrupoDeBikeFriendly)
  // let btnBikeFriendly = document.querySelector('#btn-bikeFriendly').className.replace(/\bselected\b/,'')
  // if (btnBikeFriendly.hasClass('selected')) btnBikeFriendly.className.replace(/\bselected\b/,'')
  // else btnBikeFriendly.addClass('selected')
}
function toggleEstacionamientos () {
  if (mymap.hasLayer(GrupoDeEstacionamientos)) mymap.removeLayer(GrupoDeEstacionamientos)
  else mymap.addLayer(GrupoDeEstacionamientos)
  // let btnEstacionamiento = document.querySelector('#btn-estacionamiento').className.replace(/\bselected\b/,'')
  // if (btnEstacionamiento.hasClass('selected')) btnEstacionamiento.className.replace(/\bselected\b/,'')
  // else btnEstacionamiento.addClass('selected')
}

function centraMiUbicacion () {

}
