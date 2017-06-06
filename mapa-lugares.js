var pointA = new L.LatLng(19.502, -99.2)
var pointB = new L.LatLng(19.504, -99.21)
var pointList = [pointA, pointB];
let mymap;

document.addEventListener('DOMContentLoaded', function (event) {
  cargaMapa()
})

function cargaMapa () {
  mymap = L.map('mapid').setView([19.5, -99.2], 13)

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

  var marker = L.marker([19.5, -99.2]).addTo(mymap)

}

function onMapClick (e) {
    
    //alert("You clicked the map at " + e.latlng)
    pointList.push(e.latlng)
    //alert(pointList.length)
    dibujarRuta(pointList);
  }

function dibujarRuta (puntos){
  var firstpolyline = new L.Polyline(puntos, {
      color: 'red',
      weight: 3,
      opacity: 0.5,
      smoothFactor: 1
  })
  firstpolyline.addTo(mymap)
 }
function iniciarTrazado(){
  mymap.on('click', onMapClick)
  console.log('alog')
  document.querySelector('#mapid').style.cursor = 'copy'
  document.querySelector('#guardaRuta').style.display = 'block' 
  document.querySelector('#dibujaRuta').style.display = 'none'
}

function terminarTrazado(){
  document.querySelector('#guardaRuta').style.display = 'none' 
  document.querySelector('#dibujaRuta').style.display = 'block'
  pointList = []
}