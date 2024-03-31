import React, { useState, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import '@googlemaps/extended-component-library/place_picker.js';




const mapStyle = { 
    height: '300px', 
    width: '100%'
}


const Map = () => {
    const DEFAULT_ZOOM = 20;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const [map, setMap] = React.useState(null)
    const [markerPosition, setMarkerPosition] = useState({
        lat: 28.959791,
        lng: -82.431820,
      })

    const [defaultLocation, setDefaultLocation] = useState({
        lat: 28.959791,
        lng: -82.431820,
      })

    const onLoad = useCallback((map)=> {
        const bounds = new window.google.maps.LatLngBounds({
            lat: 28.959791,
            lng: -82.431820,
          });
        map.fitBounds(bounds);
        setMap(map)
      }, [])

      const onUnmount = useCallback(() =>{
        setMap(null)
      }, [])
    

    const handelClickOnMap  = ()=> {

      }
  return (
    <div>
     {
        isLoaded ? (
        <GoogleMap
        onLoad={onLoad}
        center={defaultLocation}
        zoom={DEFAULT_ZOOM}
        mapContainerStyle={mapStyle}
        onClick={handelClickOnMap}
        onUnmount={onUnmount}
        >
        <Marker position={markerPosition} />
        </GoogleMap>
        ) : <></>
     }  
   </div>
  )
}

export default Map