import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import social from '../../../Images/google.jpg';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
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
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center container justify-content-center'>
                <div style={{ height: "1px" }} className='bg-danger w-25'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: "1px" }} className='bg-danger w-25'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-dark'>
                <img className='me-2' src={social} width="24" height="24" alt="" />
                Sign Up With Google
            </button>
        </div>
    );
};

export default Social;