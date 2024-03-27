import React from 'react';
import loginImg from '../../../static/assets/images/auth/login.jpg';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + loginImg + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}> 
                
            </div>
            <div className="right-column">
                <h1 className="title">About Me</h1>
                <div className="content-wrapper">
                    <p>My Bio</p>
                </div>
            </div>
        </div>
    );
}