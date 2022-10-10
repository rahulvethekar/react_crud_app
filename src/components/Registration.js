import React from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from 'yup'

export default function Registration() {
        const regSchema = Yup.object().shape({
            fullname:Yup.string()
            .required('Full name is required!')
            .matches(/^[a-zA-Z ]+$/,'Only aplhabets are allowed!'),

            email:Yup.string()
            .required('Email id is required!'),

            password:Yup.string()
            .required('Password is required!')
            .min(8,'Minimum 8 character are required!')
            .max(24,'Maximun 24 character ared required!'),

            gender:Yup.string()
            .required('Gender is required!'),

            city:Yup.string()
            .required('City is required!'),
            // .oneOf(['Pune','Mumbai','Ahmednagar','Nashik','Nagpur'],'invalid city'),

            remark:Yup.string()
            .required('Remark is required!')
            .min(20,'Minimum 20 character are required!'),

            acceptedTerm:Yup.boolean()
            .required('Required!')
            .oneOf([true,'accept term and conditions']),

            



        
        })

  return (
    <>
    <Formik
        initialValues={{
          fullname:'',
          email:'',
          password:'',
          gender:'',
          city:'',
          remark:'',
          acceptedTerm:false
          

        }}
        validationSchema={regSchema}

        onSubmit={value=>(
          console.log(value)
        )}
    >
      {({errors,touched})=>(
      <Form>
        <div className='container'>
          <h2>Registration form</h2>
          <div className='form-group'>
            <label>Full Name</label>
            <Field type='text' name='fullname' className='form-control' />
            {errors.fullname && touched.fullname ? (<div className='alert alert-danger'>{errors.fullname}</div>):null}
          </div>

          <div className='form-group'>
            <label>Email</label>
            <Field type='email' name='email' className='form-control' />
            {errors.email && touched.email ? (<div className='alert alert-danger'>{errors.email}</div>):null}
          </div>

          <div className='form-group'>
            <label>Password</label>
            <Field type='password' name='password' className='form-control' />
            {errors.password && touched.password ? (<div className='alert alert-danger'>{errors.password}</div>):null}
          </div>
          <div className='form-group'>
            <label>Gender</label>
            <br/>
          <Field type='radio' name="gender" value='Male' />Male
          <Field type='radio' name='gender'  value='Female' />Female
          {errors.gender && touched.gender?(<div className='alert alert-danger'>{errors.gender}</div>):null}
          </div>

          <div className='form-group'>
            <label>Select City</label>
            <Field as= 'select' name='city' id='city' placeholder='select'>
            <option></option>

              <option key="Pune" value="Pune"> Pune</option>
              <option key='Mumbai' value="Mumbai"> Mumbai</option>
              <option key="Ahmednagar" value="Ahmednagar">Ahmednagar</option>
              <option key='Nagpur' value="Nagpur">Nagpur</option>
           </Field>
           {errors.city && touched.city ? (<div className='alert alert-danger'>{errors.city}</div>):null}
            </div>

          <div className='form-group'>
            <label>Remark:</label>
            <br/>
          <Field as='textarea' name='remark' rows='2' cols='40' className='from-control'/>
          {errors.remark && touched.remark ? (<div className='alert alert-danger'>{errors.remark}</div>):null}
          </div>

            

          <div className='form-group'>
            <label>Accept terms and conditions :</label>
            <Field type='checkbox' name='acceptedTerm' />
            {errors.acceptedTerm && touched.acceptedTerm ? (<div className='alert alert-danger'>{errors.acceptedTerm}</div>):null}
          </div>



          <input type='submit' value='Submit' className='btn btn-success'/>
          </div>
      </Form>
)}
      
    </Formik>
    </>
  )
}
