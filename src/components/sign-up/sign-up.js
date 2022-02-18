import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import HttpService from "../../shared/http.service";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [roles, setRoles] = useState([]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeRole = (e) => {
        setRole(e.target.value);
    }

    useEffect(() => {
        HttpService.getAll()
            .then((response) => {
                if (response) {
                    if (response.data) {
                        setRoles(response.data)
                    }
                } 
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        HttpService.signup('users', email, password, name, role)
            .then((response) => {
                if(response){
                    if(response.status===201){
                        navigate("/");
                    }
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
                            <h4 className='text-black text-center mb-2'>Create an Account</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group my-3'>
                                <input
                                    name='Name'
                                    type='text'
                                    placeholder='Your Name'
                                    className="form-control"
                                    onChange={onChangeName}
                                />
                            </div>
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
                            <div className="form-group my-3">
                            <select className="form-select" aria-label="Default select example">
                                <option selected
                                onChange={onChangeRole}
                                >Select Role</option>
                                <option value="2">Manager</option>
                                <option value="3">User</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-theme w-100 my-3 fw-bolder fs-5 rounded-3'>Register</button>
                            <div className='col-md-6 mb-3 justify-content-between d-flex'>
                                <div className='d-inline-flex '>
                                    <p className='mt-2 ms-1'> Already have an account?</p>
                                    <Link to='/' className='mt-2 text-dark h-75 text-nowrap mx-1'>Sign In</Link>
                                </div>
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

export default SignUp;
