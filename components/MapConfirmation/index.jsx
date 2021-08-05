import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const MapConfirmation = (props) => {
  return (
    <div>
      <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: -12.03531, lng: -77.04212 }} />
    </div>
  )
}

export default withScriptjs(
  withGoogleMap(MapConfirmation)
)
