import React, { useRef, useState } from "react";
import { SHOP } from "../constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
   const [product, setProduct] = useState(SHOP)
   const [item, setItem] = useState('')
   const [quantity, setQuantity] = useState('')
   const [price, setPrice] = useState('')

   const [selectedProduct, setSelectedProduct] = useState({})
   const [editState, setEditState] = useState(false)

   const itemRef = useRef(null)
   const quantityRef = useRef(null)
   const priceRef = useRef(null)
 
   const deleteProduct = (givenId) => {
    setProduct(product.filter((p) => p.id !== givenId));
    toast.error("Product Deleted")
   }

   const addProduct = () => {
    if(item === '' || quantity === '' || price === ''){
        toast.error("Enter the details")
    }
    else{
    setProduct([...product, {id: new Date().getTime(), item, quantity, price}])
    setItem("")
    setQuantity("")
    setPrice("")
    toast.success("Product Added")
   }
}
   const storeProduct = (product) => {
    setItem(product.item)
    setQuantity(product.quantity)
    setPrice(product.price)
    setSelectedProduct(product)
    setEditState(true)

   }
   
   const updateProduct = () => {
    setProduct(product.map((products) => products.id === selectedProduct.id ? {...products, item, quantity, price} : products))
    setEditState(false)
    setSelectedProduct(null)
    setItem("")
    setQuantity("")
    setPrice("")
    toast.info("Product Updated")
   }

   const cancelProduct = () => {
    setItem("")
    setQuantity("")
    setPrice("")
    setEditState(false)
    setSelectedProduct(null)
    toast.info("Cancelled")
   }

    return (
       <div>
        <h1 className="title">Products List</h1>
         <div className="saman">
        <table>
                <tr>
                <th>S.N</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Options</th>
                </tr>

                {product.map((products, j) => {
                return (
                    <tr key={j}>
                    <td>{j + 1}</td>
                    <td>{products.item}</td>
                    <td>{products.quantity}</td>
                    <td>{products.price}</td>
                    <td>{products.quantity * products.price}</td>
                    <td>{<button id="delete" onClick={() => deleteProduct(products.id)}>Delete</button>} 
                     {<button id="update" onClick={() => storeProduct(products)}>Update</button>}</td>
                  
                    </tr>
                )
                })
                }   
      </table>
            </div>
            <div className="total">
            <h1>GRAND TOTAL = {product.reduce((a,v) => a + +v.price, 0)}</h1>
        </div>
        <div>
           <p>Enter Item</p><input onChange={(e) => setItem(e.target.value)} onKeyDown = {(e) => e.code === "Enter" ? quantityRef?.current?.focus() : void 0} value={item} ref={itemRef}/> 
        </div>
        <br></br>
        <div>
           <p>Enter Quantity</p> <input type={"number"} onChange={(e) => setQuantity(e.target.value)} onKeyDown = {(e) => e.code === "Enter" ? priceRef?.current?.focus() : void 0}  value={quantity} ref={quantityRef}/> 
        </div>
        <br></br>
        <div>
            <p>Enter Price</p><input type={"number"} onChange={(e) => setPrice(e.target.value)}  value={price} ref={priceRef} onKeyDown = {(e) => e.code === "Enter" ? addProduct() : void 0}/> 
        </div>
        <br></br>
        <div>
            <button onClick={() => editState ? updateProduct() : addProduct()}>{editState ? "Update" : "Add"}</button>
        </div>
        { editState && (
        <div>
            <button onClick={() => cancelProduct()}>Cancel</button>
        </div>)
        }
      
       </div>
   
    )

}

export default ProductList