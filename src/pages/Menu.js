import React, { useEffect, useState } from 'react';

//components import
import MenuItem from '../components/MenuItem';

//cards img
import cardTiempo from '../img/cardTiempo.png';
import cardFarmacia from '../img/cardFarmacia.png';
import cardMapa from '../img/cardMapa.png';
import cardRest from '../img/cardRest.jpg';
import cardHotel from '../img/cardHotel.jpg';
import cardEstacion from '../img/cardEstacion.jpg';

function Menu() {

    const [temperature, setTemperature] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_MENU_ADDON)
            .then(res => res.json())
            .then(response => {
                setTemperature(Math.round(response.main.temp - 273.15) + '°C');
            });
        document.title = 'Inicio';
    });

    return (
        <div className="container menu-an">
            <div className="row">
                <div className="col-md">
                    <MenuItem image={cardTiempo} title={"Temperatura: " + temperature} description="Tiempo extendido." url="/tiempo" />
                </div>
                <div className="col-md">
                    <MenuItem image={cardFarmacia} title="Farmacias" description="Lista de farmacias." url="/farmacias" />
                </div>
                <div className="col-md">
                    <MenuItem image={cardMapa} title="Mapa" description="Mapa de Gualeguaychú." url="/mapa" />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <MenuItem image={cardRest} title="Restaurantes" description="Lista de restaurantes." url="/restaurantes" />
                </div>
                <div className="col-md">
                    <MenuItem image={cardHotel} title="Hoteles" description="Lista de hoteles." url="/hoteles" />
                </div>
                <div className="col-md">
                    <MenuItem image={cardEstacion} title="Estaciones de servicio" description="Lista de estaciones de servicio." url="/estaciones-de-servicio" />
                </div>
            </div>
        </div>
    )
}

export default Menu;