import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    return (
        <div className="carta">
            <img className="carta-imagen" src={props.image} alt="src" />
            <div className="carta-cuerpo">
                <h5 className="carta-titulo">{props.title}</h5>
                <p>{props.description}</p>
                <Link className="boton-carta" to={props.url}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Mas info
                </Link>
            </div>
        </div>
    )
}

export default MenuItem;