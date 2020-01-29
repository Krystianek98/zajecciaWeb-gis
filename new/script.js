
require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapToggle",
"esri/widgets/BasemapGallery", "esri/views/MapView",
"esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/layers/FeatureLayer" ],
function(Map, MapView, WebMap, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer)
{ 
    /*let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap:"satellite"});
    let map3 = new Map({basemap:"osm"});*/
    var graphicsLayer = new GraphicsLayer();
    let map4 = new WebMap({portalItem: {
            id: "e435d8b878604fd2aa4d62b1020fe9a7"
        }
        
     });

     let mapContainer = new MapView({
      container: "mapid",  
      map: map4, 
   });
      
  

      /*var sketch = new Sketch({
        view: mapContainer,
        layer: graphicsLayer
      });

  
      mapContainer.ui.add(sketch, "top-right");*/


  var basemapGallery = new BasemapGallery({
    view: mapContainer,
    source: {
      portal: {
        url: "https://www.arcgis.com",
        useVectorBasemaps: true  // Load vector tile basemaps
      }
    }
  });

  /*var trailsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
  });



  map4.add(trailsLayer, 0);*/
 mapContainer.ui.add(basemapGallery, "top-right");
 //view.ui.add(sketch, "top-right");
  // view.ui.add(basemapToggle, "bottom-right");

  /*document.getElementById("przycisk1").onclick = function(){
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
  }*/ 
})
