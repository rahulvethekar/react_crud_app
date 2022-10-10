import React from 'react'
import * as Yup from 'yup'
import { Formik,Form,Field } from 'formik'

export default function SignUp() {
    const loginSchema =Yup.object().shape({
        name:Yup.string()
        .required('name is required')
        .matches(/^[a-zA-Z]+$/,'Only alphabets are allowed!')
        .min(2,'Minimum 2 are alphabets required!'),
        username:Yup.string()
        .required('username is required!')
        .matches(/^[a-zA-Z0-9]+$/,'Only alphabets and numbers are allowed!'),
        password:Yup.string()
        .required('Password is required!')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Password should have atleast 1 special character,number and length should be minmum 6 and maximum 16'),
        confirmPassword:Yup.string()
        .required('confirm password is required')
        .oneOf([Yup.ref('password'),null],'Password must matched!')
    })

  return (
    <>

    <div className='container' style={{display:'flex',justifyContent:'center'}}>
    <br/>

    <Formik
        initialValues={{name:'',
                    username:'',
                    password:'',
                    confirmPassword:''
                      }}
        validationSchema={loginSchema}

        onSubmit={value=>(
          console.log(value)
        )}

    >
      {({errors,touched})=>(
          <Form>
            
                        <h2>Sign Up</h2>

                <div className='form-group'>
                  <lable>Name</lable>
                  <Field type='text' name='name' className='form-control'/>
                  {errors.name && touched.name?(<div className='alert alert-danger'>{errors.name}</div>):null}
                </div>

                <div className='form-group'>
                  <lable>Username</lable>
                  <Field type='text' name='username' className='form-control'/>
                  {errors.username && touched.username?(<div className='alert alert-danger'>{errors.username}</div>):null}
                </div>

                <div className='form-group'>
                  <lable>Password</lable>
                  <Field type='password' name='password' className='form-control'/>
                  {errors.password && touched.password?(<div className='alert alert-danger'>{errors.password}</div>):null}
                </div>

                <div className='form-group'>
                  <lable>Confirn Password</lable>
                  <Field type='password' name='confirmPassword' className='form-control'/>
                  {errors.confirmPassword && touched.confirmPassword?(<div className='alert alert-danger'>{errors.confirmPassword}</div>):null}
                </div>
                <br/>
                <input type='submit' value='Sign Up' className='btn btn-success'/>
                
          </Form>
      )}

    </Formik>
        </div>
    </>
  )
}
