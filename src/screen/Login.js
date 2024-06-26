
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credential, setCredential] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credential.email,
                password: credential.password
            })
        });

        const json = await result.json();
        // console.log(json);

        if (!json.success) {
            alert("Enter a valid Credential");
        } else {
            localStorage.setItem("userEmail", credential.email);
            localStorage.setItem("authToken", json.authToken);
            // console.log(localStorage.getItem("authToken"));
            // console.log(localStorage.getItem("userEmail"));
            navigate('/');
        }
    }

    const onchange = (event) => {
        setCredential({ ...credential, [event.target.name]: event.target.value });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credential.email} onChange={onchange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credential.password} onChange={onchange} />
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
                <Link to="/createuser" className='m-3 btn btn-danger'>New User</Link>
            </form>
        </div>
    )
}

export default Login;

