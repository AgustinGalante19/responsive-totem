import React from 'react';
import { WiHumidity } from "react-icons/wi";

//components
import ForecastItem from '../components/ForecastItem';
import TiempoItem from '../components/TiempoItem';
import Loader from '../components/Loader'
import Loader2 from '../img/svg/loader2.svg';

class Tiempo extends React.Component {

    state = {
        loading: true,
        tiempoHoy: null,
    }

    async componentDidMount() {
        const response = await fetch(process.env.REACT_APP_TIEMPO_HOY_API);
        const data = await response.json();

        const reqres = await fetch(process.env.REACT_APP_TIEMPO_EXT_API);
        const result = await reqres.json();

        this.setState({ tiempoHoy: data, tiempoExt: result, loading: false });
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
                        <style>{".content-wrap { background-image: none !important;}"}</style>
                        <div className="container-fluid container-tiempo" style={{ minHeight: "25vh" }}>
                            <div className="row justify-content-center">
                                <div className="row" style={{ opacity: "0%" }}>
                                    <img src={null} alt="tiempo" style={{ height: "50px" }} />
                                    <h2 className="txt-temp">°C</h2>
                                    <p className="txt-temp-minmax">{`min:°C max:°C`}</p>
                                    <h4 className="txt-temp-desc"></h4>
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
                        <style>{".content-wrap { background-image: none !important; flex: 1;}"}</style>
                        <div className="container-fluid container-tiempo">
                            <TiempoItem
                                icon={this.state.tiempoHoy.sky.icon}
                                temperature={this.state.tiempoHoy.temperature}
                                min={this.state.tiempoHoy.temp_min}
                                max={this.state.tiempoHoy.temp_ax}
                                state={this.state.tiempoHoy.sky.state}
                                humidity={this.state.tiempoHoy.humidity}
                            />
                        </div>
                        <div className="container-fluid container-tiempo-extendido">
                            <div className="row align-items-center">
                                <div className="col align-self-center">
                                    <ForecastItem
                                        dia={this.state.tiempoExt.data[0].day}
                                        fecha={this.state.tiempoExt.data[0].date}
                                        min={this.state.tiempoExt.data[0].temp_min}
                                        max={this.state.tiempoExt.data[0].temp_max}
                                        icon_code={this.state.tiempoExt.data[0].sky.icon}
                                        sky={this.state.tiempoExt.data[0].sky.state}
                                        humidity={this.state.tiempoExt.data[0].humidity}
                                    />
                                </div>
                                <div className="col align-self-center">
                                    <ForecastItem
                                        dia={this.state.tiempoExt.data[1].day}
                                        fecha={this.state.tiempoExt.data[1].date}
                                        min={this.state.tiempoExt.data[1].temp_min}
                                        max={this.state.tiempoExt.data[1].temp_max}
                                        icon_code={this.state.tiempoExt.data[1].sky.icon}
                                        sky={this.state.tiempoExt.data[1].sky.state}
                                        humidity={this.state.tiempoExt.data[1].humidity}
                                    />
                                </div>
                                <div className="col align-self-center">
                                    <ForecastItem
                                        dia={this.state.tiempoExt.data[2].day}
                                        fecha={this.state.tiempoExt.data[2].date}
                                        min={this.state.tiempoExt.data[2].temp_min}
                                        max={this.state.tiempoExt.data[2].temp_max}
                                        icon_code={this.state.tiempoExt.data[2].sky.icon}
                                        sky={this.state.tiempoExt.data[2].sky.state}
                                        humidity={this.state.tiempoExt.data[2].humidity}
                                    />
                                </div>
                                <div className="col align-self-center">
                                    <ForecastItem
                                        dia={this.state.tiempoExt.data[3].day}
                                        fecha={this.state.tiempoExt.data[3].date}
                                        min={this.state.tiempoExt.data[3].temp_min}
                                        max={this.state.tiempoExt.data[3].temp_max}
                                        icon_code={this.state.tiempoExt.data[3].sky.icon}
                                        sky={this.state.tiempoExt.data[3].sky.state}
                                        humidity={this.state.tiempoExt.data[3].humidity}
                                    />
                                </div>
                                <div className="col align-self-center">
                                    <ForecastItem
                                        dia={this.state.tiempoExt.data[4].day}
                                        fecha={this.state.tiempoExt.data[4].date}
                                        min={this.state.tiempoExt.data[4].temp_min}
                                        max={this.state.tiempoExt.data[4].temp_max}
                                        icon_code={this.state.tiempoExt.data[4].sky.icon}
                                        sky={this.state.tiempoExt.data[4].sky.state}
                                        humidity={this.state.tiempoExt.data[4].humidity}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>
        )
    }
}

export default Tiempo;