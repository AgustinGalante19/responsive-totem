import React from 'react';
import { WiHumidity } from "react-icons/wi";

function TiempoItem(props) {
    return (
        <div className="row animation-temp">
            <img src={props.icon} alt="tiempo" style={{ height: "50px" }} />
            <h2 className="txt-temp">{props.temperature}°C</h2>
            <p className="txt-temp-minmax">{`min: ${props.min}°C max: ${props.max}°C`}</p>
            <h4 className="txt-temp-desc">{props.state}</h4>
            <WiHumidity className="txt-temp-hum" style={{ height: "30px" }} />
            <p className="txt-temp-hum" style={{ fontWeight: "bold" }}>Humedad</p>
            <p className="txt-temp-hum" style={{ fontWeight: "normal" }}>{props.humidity}%</p>
        </div>
    )
}

export default TiempoItem;