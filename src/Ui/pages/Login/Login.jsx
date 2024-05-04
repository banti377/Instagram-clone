import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();

        // Logging the email and password before making the API request
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const response = await axios.post('http://localhost:8000/user/signIn', {
                email,
                password
            });

            console.log('Login success:', response.data);

            // Redirect to profile page after successful login
            navigate('/profile');

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className='container'>
            <h2>V-Gram</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to="/Signup">Create Account</Link>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;