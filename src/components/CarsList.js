import React, { useRef, useState } from "react";
import { CARS } from "../constants";
import { BiEdit } from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select'


const CarsList = () => {
    const [cars, setCars] = useState(CARS)
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")

  const [selectedCar, setSelectedCar] = useState({})
  const [editState, setEditState] = useState(false)

  const brandRef = useRef(null)
  const modelRef = useRef(null)
  const priceRef = useRef(null)

    const deleteCar = (givenId) => {
       setCars(cars.filter((car) => car.id !== givenId))
       toast.warning("Car Deleted Successfully")
    }

    const addCar  = () => {
        if(brand === '' || model === '' || price === ''){
            toast.warn("Fill the Details Properly")
        }
        setCars([...cars, {id: new Date().getTime(), brand, model, price}])
        setBrand("")
        setModel("")
        setPrice("")
        toast.warning("Car Added Successfully")
    }

    const handleEditCar = (car) => {
        setBrand(car.brand)
        setModel(car.model)
        setPrice(car.price)
        setSelectedCar(car)
        setEditState(true)
        toast.info("Update the Details")
    }

    const updateCar = () => {
        setCars(cars.map((car) => car.id === selectedCar.id ? {...car, brand, model, price} : car))
        setEditState(false)
        setSelectedCar(null)
        setBrand("")
        setModel("")
        setPrice("")
        toast.info("Car Updated Successfully")
    }

    const handleCancel = () => {
        setBrand("")
        setModel("")
        setPrice("")
        setEditState(false)
        setSelectedCar(null)
        toast.info("Cancelled")
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
                <input value={brand} ref = {brandRef} onKeyDown = {(e) => e.code === "Enter" ? modelRef?.current?.focus() : void 0}  onChange = {(e) => setBrand(e.target.value)}/>
            </div>
            <div>
                <input value={model} ref = {modelRef} onKeyDown = {(e) => e.code === "Enter" ? priceRef?.current.focus() : void 0}  onChange = {(e) => setModel(e.target.value)}/>
            </div>
            <div>
                <input value={price} ref = {priceRef} onKeyDown = {(e) => e.code === "Enter" ? (editState ? updateCar() : addCar()) : void 0} type = 'number' onChange = {(e) => setPrice(e.target.value)}/>
            </div>
           
            <div>
                <button onClick={() => editState ? updateCar() : addCar()}>{editState ? "Update" : "Add"}</button>
            </div>
            { editState && (
            <div>
                <button onClick={() => handleCancel()}>Cancel</button>
            </div>
            )
            }  
           
            </div>
            <h1>total</h1> 
            <h1>{cars.reduce((a,v) => a + +v.price, 0)}</h1>  
            <Select options={cars.map((car) => ({...car, value: car.id, label: `${car.brand}, ${car.model}, ${car.price}` }))} />
   </div>)
   
}

export default CarsList;