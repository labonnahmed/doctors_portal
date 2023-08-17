import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Login/firebase';
import AuthDetails from './AuthDetails';
import './Login.css';
import loginImg from '../../images/login.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Form validation and values set on state...
    const isFieldValid = (e) => {
        let fieldValid;
        const regexForEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexForPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (e.target.name === 'email') {
            fieldValid = regexForEmail.test(e.target.value);
        };

        if (e.target.name === 'password') {
            fieldValid = regexForPassword.test(e.target.value);
        };

        if (fieldValid) {
            if (e.target.name === 'email') {
                setEmail(e.target.value);
            }
            if (e.target.name === 'password') {
                setPassword(e.target.value);
            };
        };
    }


    // firebase authentication (sign up & sign in)
    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('successfully Register');
            })
            .catch((error) => {
                console.log(error.message);
            });

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('successfully Login');
            })
            .catch((error) => {
                console.log(error.message);
            });

        e.preventDefault();
    };


    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto max-h-fit mt-10'>
            <div className="sign-container">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <h5 className="form-header">Sign in to our platform</h5>
                    <div>
                        <input onBlur={isFieldValid} type="email" name="email" id="email" className="email-field" placeholder="Your Email" required />
                    </div>
                    <div>
                        <input onBlur={isFieldValid} type="password" name="password" id="password" placeholder="Your Password" className="password-field" required />
                    </div>
                    <button type="submit" className="text-white bg-gradient-to-r from-botton-color to-primary hover:bg-gradient-to-l hover:from-teal-200 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">Sign in</button>
                </form>
                <AuthDetails />
            </div >
            <img src={loginImg} alt="login" className=" max-h-screen" />
        </div>
    );
};

export default Login;