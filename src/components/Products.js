import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteProduct, getAllProducts } from '../services/ProductServices'
import Swal from 'sweetalert2'

export default function Products() {
  let [productData, setProductData] = useState([])
  const [array, setArray] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((resp) => { setProductData(resp.data) })

  }, [])

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem('mycart'));
    setArray(arr);
  }, []);


  function delProd(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
          .then((resp) => {
            if (resp.data) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }
            let updatedData = productData.filter((data) => data.id != id)
            setProductData(updatedData)
          })



      }
    })


  }

  const addCart = (id) => {
    console.log("I AM CLICK")
    if (localStorage.getItem('mycart') != undefined) {
      let arr = JSON.parse(localStorage.getItem('mycart'));
      setArray(arr);
      if (arr.includes(id)) {
        Swal.fire('Product already in cart')

      }
      else {
        arr.push(id)
        localStorage.setItem('mycart', JSON.stringify(arr))
        Swal.fire('Product added to cart!')

      }
    }
    else {
      let arr = []
      arr.push(id)
      localStorage.setItem('mycart', JSON.stringify(arr))
      Swal.fire('Product added to cart!')


    }
  }
  return (
    <div>
      <h1>All Products</h1>
      <Link to="/addproduct" className='btn btn-primary'> Add Product</Link>
      <div className='row'>
        {productData.map(pro =>
          <div key={pro.id} className="col-sm-4 card" style={{ width: '18rem' }}>
            <img src={pro.image} className="card-img-top" alt="Image not found" width={200} height={150} />
            <div className="card-body">
              <h5 className="card-title">{pro.name}</h5>
              <p className="card-text">Price : {pro.price} <br />
                Quantity : {pro.quantity} </p>
              <Link to={`/editproduct/${pro.id}`}>Edit</Link>
              <button className='btn btn-danger' onClick={() => delProd(pro.id)}> Delete</button>
              {/* <button className='btn btn-secondary' onClick={() => addCart(pro.id)}> Add Cart</button> */}
              {array.includes(pro.id) !== true ? <button className='btn btn-secondary' onClick={() => addCart(pro.id)}> Add Cart</button> : null}
            </div>
          </div>
        )}
      </div>


    </div>
  )
}
