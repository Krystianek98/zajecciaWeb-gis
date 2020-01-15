let map = L.map('mapid');
map.setView([51.22,24.22], 12);

let OSMlayer = L.tileLayer('http//tile.stamen.com/watercolor/z/x/y.jpg');
let Seafloor = L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}');

let baseMaps = {
    "OSM": OSMlayer,
    'Seafloor': Seafloor
}


let circle = L.circle([51.22,24.22],{
    radius: 10000,
    color: 'red'
});

let circle2 = L.circle([55.22, 25,22],{
    radius: 10000,
    color: 'red'
});

let circles = L.layerGroup([circle, circle2]);
let layersC = {
    "c": circles
}
circles.addTo(map);


L.control.layers(baseMaps, layersC).addTo(map);


//mapy
//https://www.hatarilabs.com/ih-en/how-to-add-a-google-map-in-qgis-3-tutorial