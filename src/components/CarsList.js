import React, { useState } from "react";
import { CARS } from "../constants";
import { BiEdit } from "react-icons/bi"


const CarsList = () => {
    const [cars, setCars] = useState(CARS)
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")

 
  const [selectedCar, setSelectedCar] = useState({})
  const [editState, setEditState] = useState(false)

    const deleteCar = (givenId) => {
       setCars(cars.filter((car) => car.id !== givenId ))
    }

    const addCar  = () => {
        setCars([...cars, {id: new Date().getTime(), brand, model, price}])
        setBrand("")
        setModel("")
        setPrice("")
    }

    const handleEditCar = (car) => {
        setBrand(car.brand)
        setModel(car.model)
        setPrice(car.price)
        setSelectedCar(car)
        setEditState(true)
    }

    const updateCar = () => {
        setCars(cars.map((car) => car.id === selectedCar.id ? {...car, brand, model, price} : car))
        setEditState(false)
        setSelectedCar(null)
        setBrand("")
        setModel("")
        setPrice("")
    }


   return (<div>
        {cars.map((car, i , arr) => <div className="entry" key = {car.id}>
             <div>
                <span>{i + 1}</span>
            </div>
            <div>
                <span>{car.brand}</span>
            </div>
            <div>
                <span>{car.model}</span>
            </div>
            <div>
                <span>{car.price}</span>
            </div>
            <div>
                <BiEdit onClick={() => handleEditCar(car)}/> 
            </div>
            {/* <div>
                <span>{arr[i - 1]?.price}</span>
            </div> */}
            <div>
                <button onClick={() => deleteCar(car.id)}>X</button>
            </div>
            </div>)}

            <div className="entry">
             <div>
                {/* <span>{i + 1}</span> */}
            </div>
            <div>
                <input value={brand} onChange = {(e) => setBrand(e.target.value)}/>
            </div>
            <div>
                <input value={model} onChange = {(e) => setModel(e.target.value)}/>
            </div>
            <div>
                <input value={price} type = 'number' onChange = {(e) => setPrice(e.target.value)}/>
            </div>
            {/* <div>
                <span>{arr[i - 1]?.price}</span>
            </div> */}
            <div>
                <button onClick={() => editState ? updateCar() : addCar()}>{editState ? "Update" : "Add"}</button>
            </div>
            {/* <h1>{brand}</h1>
            <h1>{price}</h1> */}
            </div>
   </div>)
   
}

export default CarsList;