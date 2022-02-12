import React from 'react';
import { WiHumidity } from "react-icons/wi";
//components
import Forecast from '../components/Forecast';
import TiempoItem from '../components/TiempoItem';
import Loader from '../components/Loader';

import Loader2 from '../img/svg/loader2.svg';



class Tiempo extends React.Component {

    state = {
        loading: true,
        tiempoHoy: null,
        tiempoExt: null,
    }

    async componentDidMount(){
        document.title = "Tiempo";
        var reqT = await fetch(process.env.REACT_APP_TIEMPO_HOY_API);
        var today = await reqT.json();
        
        const reqE = await fetch(process.env.REACT_APP_TIEMPO_EXT_API);
        const extendido = await reqE.json();


        this.setState({ tiempoExt: extendido, tiempoHoy: today[0], loading: false });
    }

    render() {
        return (
            <div>
                
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
                                icon={this.state.tiempoHoy.icon}
                                temperature={this.state.tiempoHoy.temperature}
                                min={this.state.tiempoHoy.temp_min}
                                max={this.state.tiempoHoy.temp_max}
                                state={this.state.tiempoHoy.sky_state}
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