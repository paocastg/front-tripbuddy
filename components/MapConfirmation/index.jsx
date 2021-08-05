import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline
} from 'react-google-maps'

const MapConfirmation = (props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: -9.189967, lng: -75.015152 }}
        defaultOptions={{ disableDefaultUI: true }}
      >
        <Marker position={{ lat: -12.03531, lng: -77.04212 }} title="name 1" />
        <Marker position={{ lat: -11.03531, lng: -76.04212 }} title="name 2" />
        <Marker position={{ lat: -13.52264, lng: -73.96734 }} title="name 3" />
        <Polyline
          // defaultPath ={{ lat: -12.03531, lng: -77.04212 }}
          path= {[{ lat: -12.03531, lng: -77.04212 }, { lat: -11.03531, lng: -76.04212 }, { lat: -13.52264, lng: -73.96734 }]}
          // geodesic= {true}
          // strokeColor= {#FF0000}
          // strokeOpacity= {1.0}
          // strokeWeight= {2}
        />
      </GoogleMap>
    </div>
  )
}

export default withScriptjs(withGoogleMap(MapConfirmation))
