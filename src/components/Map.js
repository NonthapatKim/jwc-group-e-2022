import React from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

export default function Map() {

  const position = [51.505, -0.09]

  return (
    <div className='container my-5'>
        <h1>สวัสดี ร้านวัฒนาพาณิชย์กาญจนา</h1>
        <div className='row'>
          <div className='col-8 mt-3 text-center'>
          <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          </div>
        </div>
    </div>
  )
}
