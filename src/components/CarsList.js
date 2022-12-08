import React from "react";

const CarsList = () => {
    const CARS = [
        {
            id : 1,
            brand : "tesla",
            model : "teslaX",
            price : 2000
        },
    
        {
            id : 2,
            brand : "lamborghini",
            model : "Lambo",
            price : 1000
        },
    
        {
            id : 3,
            brand : "mercedez",
            model : "mercedezbenz",
            price : 3000
        },
    
        {
            id : 4,
            brand : "bentley",
            model : "bentley22",
            price : 4000
        },
    ];

   return (<div>
        {CARS.map((car, i , arr) => <div className="entry" key = {car.id}>
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
            {/* <div>
                <span>{arr[i - 1]?.price}</span>
            </div> */}
            </div>)}
   </div>)
}

export default CarsList;