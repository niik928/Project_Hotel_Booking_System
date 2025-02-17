import React from 'react'
import { useState} from 'react';
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";


function RegisterScreen () {
      const [loading, setloading] = useState(false);
      const [error, seterror] = useState(false);
      const [success, setsuccess] = useState(false);

    const [name , setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [phone, setphone] = useState('')
    const [cpassword, setcpassword] = useState('')

    async function register(){
        if(password!=cpassword){
          alert('Passwords do not match');
            return;
            }
        
        const user={
        name,
        email,
        password,
        phone
    };
    
    try {
      setloading(true)
      const {result} = await axios.post('/api/users/register',user)
      setloading(false)
      setsuccess(true)
      
      setemail('')
      setname('')
      setphone('')
      setcpassword('')
      setpassword('')
      alert('Registered Successfully.....you can proceed to login');
    } catch (error) {
      seterror(true)
      setloading(false)
      console.log(error);
    }

    }
    return (
        <div className='register'>
          {loading&&(<Loader/>)}
          {error&&(<Error/>)}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-5 mb-5">
        {success&&(<Success message='Registered Successfully'/>)}

        
          <h2 className="text-center m-1">
            Register
          </h2>
          <div>
            <input required type="text" placeholder="name" className="form-control mt-1"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input required type="phone" placeholder="phone" className="form-control mt-1" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-1"
              value={password} onChange={(e)=>{setpassword(e.target.value)}}
              
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control mt-1"
              value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}
              
            />
           
            <button className="btn btn-primary rounded-pill mt-3 mb-3" onClick={register}>REGISTER</button>
            <br/>
            <a style={{color:'black'}} href="/login">Click Here To Login</a>
          </div>
          </div>
        </div>
      </div>
    
    );
}

export default RegisterScreen