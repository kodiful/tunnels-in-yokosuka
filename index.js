var map = null;
var win = null;

function initialize() {
  try {
    //地図
    var mapOptions = {
      center: new google.maps.LatLng(35.260184,139.661938,13),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    //吹き出し
    win = new google.maps.InfoWindow();
    //乱数
    var rand = "?" + new Date().getTime();
    //ルート
    var url = "https://kodiful.github.io/tunnels-in-yokosuka/route.kml" + rand;
    var layer = new google.maps.KmlLayer(url, {map:map, suppressInfoWindows:true, zIndex:1});
    google.maps.event.addListener(layer, 'click', eventHandler);
    //トンネル区間
    var url = "https://kodiful.github.io/tunnels-in-yokosuka/tunnels2.kml" + rand;
    var layer = new google.maps.KmlLayer(url, {map:map, suppressInfoWindows:true, zIndex:2});
    google.maps.event.addListener(layer, 'click', eventHandler);
    //トンネル位置
    var url = "https://kodiful.github.io/tunnels-in-yokosuka/tunnels1.kml" + rand;
    var layer = new google.maps.KmlLayer(url, {map:map, suppressInfoWindows:true, zIndex:3});
    google.maps.event.addListener(layer, 'click', eventHandler);
  } catch(e) {
    alert(e);
  }
}

function eventHandler(evt) {
  try {
    win.setContent(evt.featureData.description||evt.featureData.name);
    win.setPosition(evt.latLng);
    win.open(map);
  } catch(e) {
    alert(e);
  }
}
