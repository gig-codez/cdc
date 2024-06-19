"use client"
import React from 'react';

import './Login.css'; // Import custom CSS for additional styling
import { Link, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
    const { data, setData, post, progress, errors } = useForm({
        email: "",
        password: "",
    })
    // function to handle form
    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/login", {
            onSuccess: (result) => {
                console.log("Success")
            },
            onError: (error) => {
                Swal.fire(
                    'Error!',
                    error.message,
                    'error'
                )
            }
        })
    }
    return (
        <>
            {/* <Head title="Your page title" /> */}
            <div className="login-container">
                <div className="login-card">
                    {
                        errors && (
                            <div className="alert alert-danger">
                                <ul>
                                    <li>{errors.email}</li>
                                </ul>
                            </div>
                        )
                    }
                    <h3 className="text-center mb-4">CDC | Login</h3>
                    <form method='POST' onSubmit={handleForm}>
                        <div className="form-group p-2">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" value={data.email} onChange={(e) => setData("email", e.target.value)} id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" value={data.password} id="password" onChange={(e) => setData("password", e.target.value)} placeholder="Password" />
                        </div>
                        <div className='row'>
                            <div className="col-md-7">
                                {/* <input type="checkbox" className="form-check-input mx-2" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me</label> */}
                            </div>
                            <div className='col-md-5'>
                                <Link href="#" className="text-center decoration-black text-pretty">Forgot password?</Link>
                            </div>
                        </div>
                        <div className='col-md-12 my-3'>
                            <input type="submit" className="form-control btn btn-primary h-[200px]" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;