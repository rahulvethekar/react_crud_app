import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { editProduct, getProductByid } from '../services/ProductServices'
import Swal from 'sweetalert2'

export default function EditProduct() {
  let [editData,setEditData] = useState({})
let {id} = useParams()
let navigate = useNavigate()
useEffect(()=>{
  console.log(id);
  getProductByid(id)
  .then((resp)=>{
    console.log(resp.data)
    setEditData(resp.data)
  })

},[])




function handler(event){
  let {name,value} = event.target
    setEditData({...editData,[name]:value})
    console.log(value)

}


function postData(e){
  e.preventDefault()
  editProduct(id,editData)
  .then((resp)=>{if (resp.data){
    console.log('Data updated successfully!')}
    Swal.fire('Rcord updated successfully!')
    navigate('/products') //navigate to product page


  })


}
  return (
    <>
    <h2>Update Product</h2>
    <hr/>
    <form onSubmit={postData} >
            <div className='form-group'>
                <label>Name</label>
                <input type='text' name='name' className='form-control' value={editData.name} onChange={handler}/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input type='number' name='price' className='form-control' value={editData.price} onChange={handler}/>
            </div><div className='form-group'>
                <label>Quantity</label>
                <input type='number' name='quantity' className='form-control' value={editData.quantity} onChange={handler}/>
            </div>
            <div className='form-group'>
                <label>Image</label>
                <input type='text' name='image' className='form-control' value={editData.image} onChange={handler}/>
            </div>
            <br/>
            <input type="submit" value="Update" className="btn btn-success"/>

        </form>

    </>
  )
}
