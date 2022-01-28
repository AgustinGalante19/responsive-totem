import React from 'react';
import logo from '../img/gchulogo.png';

function CustomLoader() {
    return (
        <div className="contenedor-loader">
            <div className="custom-loader">
                <img src={logo} alt="..." />
            </div>
        </div>
    )
}

export default CustomLoader;
