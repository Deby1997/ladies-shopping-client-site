
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './LogIn.css';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // Get Input Values
    const handleEmailInput = event => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = event => {
        setPassword(event.target.value);
    }
    const resetPassword = async (event) => {

        if (email) {
            sendPasswordResetEmail(email);
            toast('Password reset email send');
        }
        else {
            toast('Please enter your email address');
        }

    }

    const handleLog = (event) => {
        event.preventDefault();
        // const email = event.target.email.value;
        // const password = event.target.pass.value;
        signInWithEmailAndPassword(email, password);
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleRegister = event => {

        navigate('/register');
    }
    let errorElement;
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (loading || sending) {
        return <p>Loading...</p>;
    }



    return (
        <div className='mt-5 container p-3 login-container'>

            <h2 className='text-dark mt-5'>Login </h2>
            <form className='w-50 container' onSubmit={handleLog}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onBlur={handleEmailInput} type="email" name='email' className="form-control" id="email" placeholder="Enter email" required autoComplete="true" />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordInput} type="password" className="form-control" id="password" name='password' required autoComplete="true" />
                </div>
                <button type="submit" className="btn btn-dark mt-2">Submit</button>
                {errorElement}
            </form>
            <p>New here?<span type="submit" className='text-success fw-bold' onClick={handleRegister}>Please Register</span></p>
            <p>Forget Password?<span type="submit" className='text-success fw-bold' onClick={resetPassword}>Reset Password</span></p>
            <Social></Social>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LogIn;