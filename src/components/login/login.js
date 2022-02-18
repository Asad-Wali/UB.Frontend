import React, { useState } from "react";
import { Link } from "react-router-dom";
import HttpService from "../../shared/http.service";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        HttpService.login('auth', email, password)
            .then((response) => {
                if(response){
                    if(response.status===201 && response.data.payload.Role === 1){
                        navigate("/admin-dashboard");
                    }
                    else if (response.status===201 && response.data.payload.Role === 2){
                        navigate("/manager-dashboard");
                    }
                    else if (response.status===201 && response.data.payload.Role === 3) {
                        navigate("/user-dashboard");
                    }
                    else {
                        alert("Please Enter Valid Email or Password");
                    }
                }
                else{
                    alert("Please Enter Valid Email or Password");
                }
                    
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='background'>
            <div className='container'>
                <div className='row justify-content-sm-center'>
                    <div className='col-sm-5 login-card-container'>
                        <div className='text-center logo'>
                            <h2><span className='text-theme'>UBQARI </span><cite>PLATFORM</cite></h2>
                            <h6 className='mb-5'>Welcome to Ubqari Platform!</h6>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group my-3'>
                                <input
                                    name='email'
                                    type='text'
                                    placeholder='Email'
                                    className="form-control"
                                    onChange={onChangeUsername}
                                />
                            </div>
                            <div className='form-group my-3'>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    className="form-control"
                                    onChange={onChangePassword}
                                />
                            </div>
                            {/* <div className="form-group my-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Manager</option>
                                <option value="3">User</option>
                                </select>
                            </div> */}
                            <div className='form-group form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                />
                                <label className='form-check-label' htmlFor='exampleCheck1'>Remember me</label>
                                <Link to='/' className='text-left text-theme ml-5 forgotbtn'>Forgot your password?</Link>
                            </div>
                            <button type='submit' className='btn btn-theme w-100 my-3 fw-bolder fs-5 rounded-3'>Sign In</button>
                            <div className='d-flex justify-content-sm-between'>
                                <Link to='/sign-up' className='btn btn-dark w-100 my-3 fw-bolder fs-5 rounded-3 '>Sign Up</Link>
                            </div>

                            <div className='mb-5 mt-5'>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;