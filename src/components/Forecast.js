import { WiHumidity, WiThermometer } from "react-icons/wi";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react';


export default class Forecast extends Component {
    render() {
        return <div className="container-fluid container-tiempo-extendido">
            <div className="row align-items-center">
                {this.props.forecast.map(e =>
                    <div className="col align-self-center" key={uuidv4()}>
                        <div className="carta-dia-tiempo" key={e.day}>
                            <h3 className="text-center">{e.day}</h3>
                            <div className="lineanashe"></div>
                            <p className="text-center txt-fecha">{e.date}</p>
                            <p className="text-center txt-min-max">Min:{e.temp_min}°C Max: {e.temp_max}°C <WiThermometer className="icon-tiempo" /></p>
                            <p className="text-center txt-hora">
                                12:00 <AiOutlineClockCircle />
                            </p>
                            <p className="text-center txt-estado">
                                {e.sky.state}
                                <img src={e.sky.icon} alt="tiempo" style={{ height: "50px" }} />
                            </p>
                            <p className="text-center" style={{ marginBottom: "25px" }}>
                                {e.humidity}%
                                <WiHumidity className="text-center icon-tiempo" />
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    }
}

/* <div className="carta-dia-tiempocuerpo">
                    <h3 className="text-center">{e.dia}</h3>
                    <div className="lineanashe"></div>
                    <p className="text-center txt-fecha">{e.fecha}</p>
                    <p className="text-center txt-min-max">Min:{e.min}°C Max: {e.max}°C <WiThermometer className="icon-tiempo" /></p>
                    <p className="text-center txt-hora">
                        12:00 <AiOutlineClockCircle />
                    </p>
                    <p className="text-center txt-estado">
                        {e.sky}
                        <img src={e.icon_code} alt="tiempo" style={{ height: "50px" }} />
                    </p>
                    <p className="text-center" style={{ marginBottom: "25px" }}>
                        {e.humidity}%
                        <WiHumidity className="text-center icon-tiempo" />
                    </p>
                </div> */
/*
<div className="carta-dia-tiempo">
            <div className="carta-dia-tiempocuerpo">
                <h3 className="text-center">{props.forecast.dia}</h3>
                <div className="lineanashe"></div>
                <p className="text-center txt-fecha">{props.forecast.fecha}</p>
                <p className="text-center txt-min-max">Min:{props.forecast.min}°C Max: {props.forecast.max}°C <WiThermometer className="icon-tiempo" /></p>
                <p className="text-center txt-hora">
                    12:00 <AiOutlineClockCircle />
                </p>
                <p className="text-center txt-estado">
                    {props.forecast.sky}
                    <img src={props.icon_code} alt="tiempo" style={{ height: "50px" }} />
                </p>
                <p className="text-center" style={{ marginBottom: "25px" }}>
                    {props.forecast.humidity}%
                    <WiHumidity className="text-center icon-tiempo" />
                </p>
            </div>
        </div>
*/