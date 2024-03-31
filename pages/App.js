import { useRef } from 'react';
import Map from './Map';
import '@googlemaps/extended-component-library/place_picker.js';




function App() {

  const inputRef = useRef()
  const inputStyle= {
    boxShadow: 'inset 0 0 10px #eee !important',
    border: '2px solid #eee',
    width: '456px',
    height: '40px',
    marginLeft: '16px',
    borderRadius: '20px',
    fontWeight: '300 !important',
    outline: 'none',
    padding: '10px 20px',
    marginBottom: '10px',
  }

  const input = document.getElementById("pac-input");



    const autoComplete = new window.google.maps.places.Autocomplete(
    inputRef.current,
  )
  
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.959791, lng: -82.431820 },
    zoom: 15,
    mapTypeControl: false,
  });


  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");


  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });


  autoComplete.addListener('place_changed', () => {
    infowindow.close();
    marker.setVisible(false);
    const place = autoComplete.getPlace()
    if (!place.geometry || !place.geometry.location) {
 
        alert("this location not available")
    }
    if (place.geometry.viewport || place.geometry.location) {
   
      window.alert("No details available for input: '");
      return;
    }else {
      setCenter(place.geometry.location);
      setZoom(17);
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
    infowindow.open(map, marker);


  })
  return (

    
    <div className="App " id="infowindow-content">





      <div id="map"></div>
        <input className="input"
          id="pac-input"
          placeholder='type your location'
          ref={inputRef}
          style={inputStyle}
        />
      <Map/>
    </div>
  )
}

export default App