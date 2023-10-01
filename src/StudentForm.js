import React, { useState } from 'react'
import {useFormik } from 'formik'
import * as Yup from 'yup'

function StudentForm() {
   var [students, setStudents] = useState([])
   var studentform = useFormik({
    initialValues:{
        firstname:'',
        lastname:'',
        age:''
    },
    validationSchema:Yup.object({
        firstname:Yup.string().required("*firstname must"),
        lastname:Yup.string().required("*lastname must"),
        age:Yup.number().required("*age must"),
    }),
    onSubmit:(values)=>{
        setStudents([...students, values]);
    }
   })
   console.log(studentform)
  

  return (
    <div style={{padding: '10px',width:'500px',height:'auto',margin:'10px auto', border:'2px solid'}}>
        <h1 style={{marginBottom: '10px'}}>Student form</h1>
       <form onSubmit={studentform.handleSubmit}> 
          <label htmlFor='fname'>Firstname</label>
          <input type='text' name='firstname' id='fname' placeholder='First name' onBlur={studentform.handleBlur} onChange={studentform.handleChange} />{<br/>}
          <p>{studentform.touched.firstname && studentform.errors.firstname}</p>
        {console.log(studentform.touched)}
          <label htmlFor='lname'>Lasstname</label>
          <input type='text' name='lastname' id='lname' placeholder='Last name' onBlur={studentform.handleBlur} onChange={studentform.handleChange}/>{<br/>}
          <p>{ studentform.touched.lastname && studentform.errors.lastname}</p>
         
          <label htmlFor='age'>Age</label>
          <input type='number' name='age' id='age' placeholder='Age' onBlur={studentform.handleBlur}  onChange={studentform.handleChange}/>{<br/>}
          <p>{ studentform.touched.age && studentform.errors.age}</p>
         
          <button type='submit' style={{padding:'5px 10px', backgroundColor:'green', color:'#fff', border:'none'}}>Add Student</button>
        </form>
        <table border='2px' cellSpacing='0' style={students.length!==0 ? {display: 'inline-block', cellPadding:'20'} : {display: 'none'}}  >
            {
                students.map((a,i)=>{
                    console.log(a)
                    return <tr>
                        <td>{a.firstname}</td>
                        <td>{a.lastname}</td>
                        <td>{a.age}</td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

export default StudentForm
