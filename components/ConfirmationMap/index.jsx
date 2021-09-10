import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'

const ConfirmationMap = (props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: -9.189967, lng: -75.015152 }}
        defaultOptions={{ disableDefaultUI: true }}
      >
        {props.destinosCompleto.map((marker) => {
          return (
            <Marker
              key={marker.id}
              position={{ lat: parseFloat(marker.latitud), lng: parseFloat(marker.longitud) }}
              title={marker.nombre}
            />
          )
        })}
      </GoogleMap>
    </div>
  )
}

export default withScriptjs(withGoogleMap(ConfirmationMap))
