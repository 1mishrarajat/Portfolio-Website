'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export default function Page() {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const Router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        validator(name, value);
    };

    const validator = (name, value) => {
        if (name === 'username' && value.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Username is required'
            }));
        } else if (name === 'password' && value.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Password is required'
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Run validation before submission
        validator('username', formData.username);
        validator('password', formData.password);

        // Check for errors
        if (errors.username || errors.password) {
            toast.error('Please fill up the required details');
            return;
        }

        try {
            let res = await axios.post('https://dummyjson.com/auth/login', formData);
            if (res.status === 200) {
                toast.success(`Welcome ${res.data.username}`);
               
                Router.push('/Dashboard'); // Navigate to another page upon success
            }
        } catch (error) {
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    name="username"
                                    className="login__input"
                                    placeholder="User name / Email"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}

                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    className="login__input"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

                            </div>
                            <button type="submit" className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <button type="submit" className="button login__submit" onClick={()=>Router.push("./Sign")}>
                                <span className="button__text">Sign In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
