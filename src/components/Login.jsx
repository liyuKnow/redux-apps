import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: ''
    });

    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(login(userData));
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder="name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                <input type="text" placeholder="age" onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
                <input type="text" placeholder="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                <button type="button" onClick={onLogin}>Login</button>
            </form>
            <button type="button" onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Login
