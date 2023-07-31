import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        console.log("in")
        e.preventDefault();
        axios.post("http://localhost:3001/login", {username, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success!"){
                navigate('/users');
            }
            else{
                alert(result.data);
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
            <div className='w-25 bg-white rounded p-3'>
                <h2 className='text-center'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <label htmlFor="">User Name</label>
                            <input type="text" placeholder='Enter User Name' className='form-control'
                            onChange={(e) => setUserName(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Enter Password' className='form-control'
                            onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                    </form>
                </div>
            </div>
    )

}

export default Login;