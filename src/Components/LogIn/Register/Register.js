
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import Social from '../Social/Social';
import { useState } from 'react';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate("/home");
    }

    const handleRegister = event => {

        navigate('/login');
    }
    const handleReg = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;
        const address = event.target.add.value;
        const number = event.target.number.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password, address, number);
        }
    }
    return (
        <div className='container my-5 p-3 register-container'>
            <h2 className='text-dark mt-5'>Register</h2>
            <form className='w-50 container' onSubmit={handleReg}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="pass" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputAddress">Address</label>
                    <input type="address" name="add" class="form-control" id="exampleInputAddress" placeholder="address" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputPhone">Phone Number</label>
                    <input type="number" name="number" class="form-control" id="exampleInputPhone" placeholder="Phone Number" required />
                </div>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept tearms & conditions.</label> <br />
                <button disabled={!agree} type="submit" className="btn btn-dark mt-2">Submit</button>
            </form>
            <p>Already registered?<span type="submit" className='text-success fw-bold' onClick={handleRegister}>Please LogIn</span></p>
            <Social></Social>
        </div>
    );
};

export default Register;