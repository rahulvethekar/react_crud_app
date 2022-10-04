import {React,useState} from 'react'
import { postAddProduct } from '../services/ProductServices'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function AddProduct() {
  let [state,setState] = useState({name:'',price:0,quantity:0,image:''})
      let navigate = useNavigate()
      function handler(event){
        let {name,value}=event.target
        setState({...state,[name]:value})
        console.log(state)


      }


      const postData=(e)=>{
          e.preventDefault()
          postAddProduct(state)
          .then((resp)=>{if(resp.data){
            navigate('/products')
            Swal.fire('Data added successfully!')

          }

          })
      }

           
  return (
    <><h1>Add PRoduct components</h1>
    <form onSubmit={postData}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' name='name' className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input type='number' name='price' className='form-control' onChange={handler}/>
            </div><div className='form-group'>
                <label>Quantity</label>
                <input type='number' name='quantity' className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label>Image</label>
                <input type='text' name='image' className='form-control' onChange={handler}/>
            </div>
            <input type="submit" value="Add" className="btn btn-success"/>

        </form>
    </>
    
  )
}
