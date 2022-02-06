import React from 'react';
import { WiHumidity } from "react-icons/wi";
//components
import Forecast from '../components/Forecast';
import TiempoItem from '../components/TiempoItem';
import Loader from '../components/Loader';

import Loader2 from '../img/svg/loader2.svg';
import keys from '../keys.json';



class Tiempo extends React.Component {

    state = {
        loading: true,
        tiempoHoy: null,
        tiempoExt: null,
    }

    async componentDidMount() {
        document.title = "Tiempo"
        const reqres = await fetch(process.env.REACT_APP_TIEMPO_HOY_API);
        /* const response = await fetch("http://localhost:5000/api/tiempo"); */
        const today = await response.json();

        const reqres = await fetch(process.env.REACT_APP_TIEMPO_EXT_API);
        /* const reqres = await fetch("http://localhost:5000/api/tiempo/extendido"); */
        const extendido = await reqres.json();
        this.setState({ tiempoExt: extendido, tiempoHoy: today, loading: false })

    }
    render() {
        return (
            <div>
                <style>{`
                    .content-wrap { 
                        background-image: none !important;
                    } 
                `}</style>
                {this.state.loading || !this.state.tiempoHoy ? (

                    <div>
                        <style>{".content-wrap { background-image: none !important; background-color: #D7D7D7}"}</style>
                        <div className="container-fluid container-tiempo" style={{ minHeight: "25vh" }}>
                            <div className="row justify-content-center">
                                <div className="row" style={{ opacity: "0%" }}>
                                    <img src={null} alt="tiempo" style={{ height: "50px" }} />
                                    <h2 className="txt-temp">°C</h2>
                                    <p className="txt-temp-minmax">{`min:°C max:°C`}</p>
                                    <WiHumidity className="txt-temp-hum" style={{ height: "30px" }} />
                                    <p className="txt-temp-hum" style={{ fontWeight: "bold" }}>Humedad</p>
                                    <p className="txt-temp-hum" style={{ fontWeight: "normal" }}>%</p>
                                </div>
                                <Loader />
                            </div>
                        </div>
                        <div className="container-fluid container-tiempo-extendido">
                            <div className="row justify-content-center">
                                <img src={Loader2} alt='loader' style={{ maxHeight: "20vh" }} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <style>{".content-wrap { background-image: none !important;background-color: #D7D7D7}"}</style>
                        <div className="container-fluid container-tiempo">
                            <TiempoItem
                                icon={this.state.tiempoHoy.sky.icon}
                                temperature={this.state.tiempoHoy.temperature}
                                min={this.state.tiempoHoy.temp_min}
                                max={this.state.tiempoHoy.temp_max}
                                state={this.state.tiempoHoy.sky.state}
                                humidity={this.state.tiempoHoy.humidity}
                            />
                        </div>
                        <Forecast extendido={this.state.tiempoExt.data} />
                    </div>
                )
                }
            </div>
        )
    }
}

export default Tiempo;