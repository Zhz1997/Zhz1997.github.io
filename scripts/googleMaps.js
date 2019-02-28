function initMap(){
  var option = {
    zoom:6,
    center:{lat:48.4284,lng:-123.3656}
  }

  var map = new
  google.maps.Map(document.getElementById('map'),option);

  var markerCC = new google.maps.Marker({
    position:{lat:49.2718,lng:-123.0953},
    map:map
  })
  var markerUVIC = new google.maps.Marker({
    position:{lat:48.4634,lng:-123.3117},
    map:map
  })

  var infoWCC = new google.maps.InfoWindow({
    content:'<h3>Columbia College</h3><h5>Sep 2015 - Sep 2016</h5>'
  });
  var infoWUVIC = new google.maps.InfoWindow({
    content:'<h3>Uvic</h3><h5>Jan 2017 - Present</h5><p>Computer Science</p>'
  });

  markerCC.addListener('mouseover',function(){
    infoWCC.open(map,markerCC);
  })

  markerUVIC.addListener('mouseover',function(){
    infoWUVIC.open(map,markerUVIC);
  })
}
