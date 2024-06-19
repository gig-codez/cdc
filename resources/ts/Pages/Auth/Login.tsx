// src/Login.tsx
import React from 'react';

import './Login.css'; // Import custom CSS for additional styling
import { Link } from '@inertiajs/inertia-react';

const Login: React.FC = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    <div className="form-group p-2">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className='row'>
                        <div className="col-md-7">
                            <input type="checkbox" className="form-check-input mx-2" id="remember" />
                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                        </div>
                        <div className='col-md-5'>
                            <Link href="#" className="text-center text-pretty">Forgot password?</Link>
                        </div>
                    </div>
                    <div className='col-md-12 my-3'>
                        <input type="submit" className="form-control btn btn-primary h-[200px]" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;