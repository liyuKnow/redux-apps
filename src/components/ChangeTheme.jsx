import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTheme, changeColor } from '../features/theme';

const ChangeTheme = () => {
    const [theme, setTheme] = useState('light');
    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    const onChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const handleColorChange = (e) => {
        dispatch(changeColor(color))
    }

    return (
        <div>
            <button onClick={onChangeTheme}>Change Theme</button>
            <input
                type="text"
                placeholder="enter Color Here"
                onChange={(e) => { setColor(e.target.value); }}
            />
            <button onClick={handleColorChange} >Change Color</button>
        </div>
    )
}

export default ChangeTheme
