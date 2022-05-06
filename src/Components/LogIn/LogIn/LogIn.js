
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './LogIn.css';

const LogIn = () => {
    const navigate = useNavigate();
    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = () => {
        // const email = event.target.email.value;
        // await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    const handleLog = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;
        signInWithEmailAndPassword(email, password)
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
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='mt-5 container p-3 login-container'>

            <h2 className='text-dark mt-5'>Login </h2>
            <form className='w-50 container' onSubmit={handleLog}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name='pass' class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <button type="submit" class="btn btn-dark mt-2">Submit</button>
                {errorElement}
            </form>
            <p>New here?<span type="submit" className='text-success fw-bold' onClick={handleRegister}>Please Register</span></p>
            <p>Forget Password?<span type="submit" className='text-success fw-bold' onClick={resetPassword}>Reset Password</span></p>
            <Social></Social>
        </div>
    );
};

export default LogIn;