import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import gchulogo from '../img/gchulogo.png';

export default function Navigation() {

    const [hora, setHora] = useState();

    const getHour = () => {
        var time = new Date();
        var h = time.getHours();
        var min = time.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        let horaFinal = h + ':' + min;
        setHora(horaFinal);
        setTimeout(getHour, 1000);
    }

    useEffect(() => {
        getHour();
    });

    return (
        <div id='navbar'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white" to="/">
                        <img src={gchulogo} width="18%" alt="logo" />
                        App Totem
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/gualeactiva">
                                    Ingresá a GualeActiva
                                </NavLink>
                            </li>
                        </ul>
                        <div className="position-absolute top-50 end-0 translate-middle-y">
                            <h4 id='hora-navbar'>{hora}</h4>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}