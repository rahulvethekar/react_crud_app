import {React,useState} from 'react'
import { postAddProduct } from '../services/ProductServices'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Formik,Form,Field } from 'formik'  
import * as Yup from 'yup'

const proSchema = Yup.object().shape({
  name: Yup.string()
  .required('Name is Required')
  .matches(/^[a-zA-Z ]+$/, "Only alphabate allow")
  .min(2,'Minimum 2 character are allowed')
  .max(5,'Maximum 5 characters are allowed'),
  price: Yup.string()
  .required('Price is Required')
  .matches(/^[0-9]{1,5}$/, "Only Digit allow"),
  quantity: Yup.string()
  .required('Quantity Required')
  .matches(/^[0-9]{1,5}$/, "Only Digit allow"),
  image: Yup.string()
  .required(' Image is Required'),
        })

export default function AddProduct() {
  // let [state,setState] = useState({name:'',price:0,quantity:0,image:''})
       let navigate = useNavigate()
  //     function handler(event){
  //       let {name,value}=event.target
  //       setState({...state,[name]:value})
  //       console.log(state)


  //     }


  //     const postData=(e)=>{
  //         e.preventDefault()
  //         postAddProduct(state)
  //         .then((resp)=>{if(resp.data){
  //           navigate('/products')
  //           Swal.fire('Data added successfully!')

  //         }

  //         })
  //     }



   
           
  return (
    <><h1>Add PRoduct components</h1>
    {/* <form onSubmit={postData}>
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

        </form> */}


  <Formik
    initialValues={{  
                    name:'',
                    price:'',
                    quantity:'',
                    image:''

                    }}
validationSchema={proSchema}

    onSubmit={values => {
          // same shape as initial values
          //  console.log(values);
          postAddProduct(values)
            .then(res => {
              if (res.data) {
                navigate("/products");//navigate to products
                Swal.fire("Product Added");

              }
            })
        }}
    >
      {({errors,touched}) => (
        <Form>
        <div className='container'>
          <div className='form-group'>
            <label>Name</label>
            <Field type='text' name='name' className='form-control' />
            {errors.name && touched.name? (<div className='alert alert-danger'>{errors.name}</div>):null}
          </div>
          <div className='form-group'>
            <label>Price</label>
            <Field type='text' name='price' className='form-control'/>
            {errors.price && touched.price ? (<div className='alert alert-danger'>{errors.price}</div>):null}
          </div>

          <div className='form-group'>
            <label>Quantity</label>
            <Field type='text' name='quantity' className='form-control'/>
            {errors.quantity && touched.quantity?(<div className='alert alert-danger'>{errors.quantity}</div>):null}
          </div>

          <div className='form-group'>
            <label>Image</label>
            <Field type='text' name='image' className='form-control' />
            {errors.image && touched.image ? (<div className='alert alert-danger'>{errors.image}</div>):null}
          </div>
          <input type='submit' value='Add' className='btn btn-success'/>
          </div>
        </Form>
      )}
  </Formik>

    </>
    
  )
}
