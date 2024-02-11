import React from 'react'
import Select from 'react-select'
import './Yocketui.css'
export default function Yocketui(props) {
  const onChangeCity = (event) => { props?.selectCity(event) }

  const [selectedVehicle, setSelectedVehicle] = React.useState()
  const onChangeVehicle = (event) => { props?.setVehicle(event) }
  
  return (
    <div>
      <Select placeholder="Select City" options={props?.cities}
        className='react-select'
        label="Single select"
        value={props?.city}
        onChange={onChangeCity} />
      <Select placeholder="Select Vehicle" className='react-select' options={props?.vehicles}
        value={props?.vehicle}
        onChange={onChangeVehicle}
      />
      <h1 className='header-start'>{props.copName}</h1>
      {props?.copName === "Cop 3" && <button onClick={props?.findFugitive}>Find Fugitive</button>}
    </div>

  )
}
