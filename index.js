function initialize() {
  //地図
  var mapOptions = {
    center: new google.maps.LatLng(35.260184,139.661938,13),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  //吹き出し
  var win = new google.maps.InfoWindow();
  //ルート
  var url = "https://kodiful.github.io/tunnels-in-yokosuka/route.kml";
  var layer = new google.maps.KmlLayer(url, {map:map, suppressInfoWindows:true, zIndex:1});
  google.maps.event.addListener(layer, 'click', (evt) => {
    win.setContent(evt.featureData.description);
    win.setPosition(evt.latLng);
    win.open(map);
  });
  //トンネル区間
  var url = "https://kodiful.github.io/tunnels-in-yokosuka/tunnels2.kml";
  var layer = new google.maps.KmlLayer(url, {map:map, suppressInfoWindows:true, zIndex:2});
  google.maps.event.addListener(layer, 'click', (evt) => {
    win.setContent(evt.featureData.name);
    win.setPosition(evt.latLng);
    win.open(map);
  });
  //トンネル位置
  var url = "https://kodiful.github.io/tunnels-in-yokosuka/tunnels1.kml";
  var layer = new google.maps.KmlLayer(url, {map:map, suppressInfoWindows:true, zIndex:3});
  google.maps.event.addListener(layer, 'click', (evt) => {
    win.setContent(evt.featureData.name);
    win.setPosition(evt.latLng);
    win.open(map);
  });
}

