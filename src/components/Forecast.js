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