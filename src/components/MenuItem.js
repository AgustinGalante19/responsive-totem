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


/* <div className="card" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
                <Link className="btn btn-primary btn-menu" to={props.url}>
                    Ingresar
                </Link>
            </div>
        </div> */