import React, { useContext } from 'react'

import { MapContainer,TileLayer,Marker,Popup,useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { assets, sellers } from '../assets/assets'

const Map = ({items}) => {

  return (
    <div>
    <MapContainer center={[22.7450891, 88.4529538]} className='w-[100%] h-[600px]' zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      Array.isArray(items) ?(
      items.map((item,index)=>(
      <Marker key={index} position={[item.latitute, item.longitute]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
      ))
    ):
      <Marker position={[items.latitute, items.longitute]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

    }
    
  </MapContainer>
    </div>
  )
}

export default Map
