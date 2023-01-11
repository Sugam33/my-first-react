import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const ProductsList2 = () => {
    const[products, setProducts] = useState([]);
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')  

    const itemRef = useRef(null)
   const quantityRef = useRef(null)
   const priceRef = useRef(null)

   const handleAddProduct = () => {
    if(item === '' || quantity === '' || price === ''){
        toast.warn("Enter details");
    }
    else{
        axios(
            {
                method: 'post',
                url: 'http://localhost:3005/api/products',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : {
                    productName: item,
                    productPrice: price,
                    productQuantity: quantity,
                    productBrand: "brand",
                    supplierName: "supplier"
                }
              })
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setItem("")
          setQuantity("")
          setPrice("")
          toast.success("product added");
          axios({
            method: 'get',
            url: 'http://localhost:3005/api/products',
            headers: {}
          })
          .then((res) => {
            setProducts(res.data.products);
          })
          .catch((err) => console.log(err));
        })
        .catch(function (error) {
          console.log(error);
        });
   }
}

    useEffect(() => {
      axios({
        method: 'get',
        url: 'http://localhost:3005/api/products',
        headers: {}
      })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
    },[])

    return(
        <div>
            <h1>Products List 2</h1>
            {products.map((p) => 
                (
                    <div key={p._id}>
                        <span>{p.productName}</span>
                    </div>
                )

          )}
          <div>
          <div>
           <p>Enter Item</p><input onChange={(e) => setItem(e.target.value)} onKeyDown = {(e) => e.code === "Enter" ? quantityRef?.current?.focus() : void 0} value={item} ref={itemRef}/> 
        </div>
        <br></br>
        <div>
           <p>Enter Quantity</p> <input type={"number"} onChange={(e) => setQuantity(e.target.value)} onKeyDown = {(e) => e.code === "Enter" ? priceRef?.current?.focus() : void 0}  value={quantity} ref={quantityRef}/> 
        </div>
        <br></br>
        <div>
            <p>Enter Price</p><input type={"number"} onChange={(e) => setPrice(e.target.value)}  value={price} ref={priceRef} onKeyDown = {(e) => e.code === "Enter" ? handleAddProduct() : void 0}/> 
        </div>
        <br></br>
        <div>
            <button onClick={() => handleAddProduct()}>Add</button>
        </div>
          </div>
        </div>
    )

}

export default ProductsList2