"use client"
import React from 'react';

import './Login.css'; // Import custom CSS for additional styling
import { usePage, useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
    const { data, setData, progress, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })


    // function to handle form
    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/login", {
            onSuccess: (result) => {
                console.log(result)
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

                    <h3 className="text-center mb-4">CDC | Login</h3>
                    <form method='POST' onSubmit={handleForm}>
                        <div className="form-group p-2">
                            <label>Username <b className='text-danger'>*</b></label>
                            <input type="text" className="form-control" value={data.email} name='email' onChange={(e) => setData("email", e.target.value)} id="email" placeholder="Doe" />
                            {errors.email && <div>{errors.email}</div>}
                        </div>
                        <div className="form-group p-2">
                            <label>Password <b className='text-danger'>*</b></label>
                            <input type="password" className="form-control" value={data.password} name='password' id="password" onChange={(e) => setData("password", e.target.value)} placeholder="***********" />
                            {errors.password && <div>{errors.password}</div>}
                        </div>

                        <div className='col-md-12 my-3'>
                            <input type="submit" disabled={processing} className="form-control btn btn-primary" value="Login" />
                        </div>
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;