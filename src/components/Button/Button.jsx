import React, { Component } from 'react'
import styles from './Button.scss';
import { Link } from 'react-router-dom';

const STYLES =['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({
    chilren,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    :SIZES[0];

    return (
        <Link for='sign-up' className='btn-mobile'>
            { chilren && <button
                className={`btn${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {chilren}
            </button>}
            <button>Get Started</button>
        </Link>
    )
}