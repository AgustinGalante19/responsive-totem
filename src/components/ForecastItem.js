import React from 'react';
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { AiOutlineClockCircle } from 'react-icons/ai';

function ForecastItem(props) {
    return (
        <div className="carta-dia-tiempo">
            <div className="carta-dia-tiempocuerpo">
                <h3 className="text-center">{props.dia}</h3>
                <div className="lineanashe"></div>
                <p className="text-center txt-fecha">{props.fecha}</p>
                <p className="text-center txt-min-max">Min:{props.min}°C Max: {props.max}°C <WiThermometer className="icon-tiempo" /></p>
                <p className="text-center txt-hora">
                    12:00 <AiOutlineClockCircle />
                </p>
                <p className="text-center txt-estado">
                    {props.sky}
                    <img src={props.icon_code} alt="tiempo" style={{ height: "50px" }} />
                </p>
                <p className="text-center" style={{ marginBottom: "25px" }}>
                    {props.humidity}%
                    <WiHumidity className="text-center icon-tiempo" />
                </p>
            </div>
        </div>
    )
}

export default ForecastItem
