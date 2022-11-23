import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [Phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [cPassword, setcPassword] = useState()

    return (
        <div>
            <div className="d-flex align-items-center auth px-0 h-100" style={{ position: 'absolute', left: 0, top: 0, height: '100vh', width: '100vw', backgroundImage: 'url("/Images/auth/user-signup.webp")', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div className="row w-100 mx-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="card text-left py-5 px-4 px-sm-5 shadow" style={{ background:'radial-gradient(black, transparent)' }} >
                            <div className="brand-logo">
                                <img  alt="logo" />
                            </div>
                            <h4 className='text-white'>New here?</h4>
                            <h6 className="font-weight-light text-white">Signing up is easy. It only takes a few steps</h6>
                            <form className="pt-3">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="form-group">
                                            <input type="text" value={fName} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="First Name"
                                                onChange={(e) => setfName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" value={lName} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Last Name"
                                                onChange={(e) => setlName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="User ID"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>

                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={cPassword} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Confirm Password"
                                                onChange={(e) => setcPassword(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <label for="" className='font-weight-light text-white'>Select Department</label>
                                            <select class="form-control form-control-lg" name="" id="" style={{ outline: 'none', border: '1px solid #ced4da' }}>
                                                <option>ACS</option>
                                                <option>IS</option>
                                            </select>
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN UP</Link>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light text-white">
                                            Already have an account? <Link to="/login" className="text-white">Login</Link>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register