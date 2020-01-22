
require (["esri/Map", "esri/views/MapView", "esri/WebMap"],
function(Map, MapView, WebMap)
{ 
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap:"satellite"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({portalItem: {
            id: "e435d8b878604fd2aa4d62b1020fe9a7"
        }
     });

 let mapContainer = new MapView({
     container: "mapid",  
     map: map4,  
     
  });
  document.getElementById("przycisk1").onclick = function(){
      console.log('klik')
      mapContainer.map = map1;
  }
  document.getElementById("przycisk2").onclick = function(){
    console.log('klik')
    mapContainer.map = map2;
  }
  document.getElementById("przycisk3").onclick = function(){
    console.log('klik')
    mapContainer.map = map3;
  }
  document.getElementById("przycisk4").onclick = function(){
    console.log('klik')
    mapContainer.map = map4;
  } 
})