import React, { Component } from 'react';
import CustomLoader from '../components/CustomLoader';
import Negocios from '../components/Negocio';
import keys from '../keys.json';
class Hoteles extends Component {

    state = {
        loading: true,
        negocio: false
    }

    async componentDidMount() {
        /* const reqres = await fetch("http://localhost:5000/api/hoteles"); */
        const reqres = await fetch(process.env.REACT_APP_HOTELES_API);
        const hoteles = await reqres.json();

        this.setState({ negocio: hoteles, loading: false });
        document.title = "Hoteles";
    }

    render() {
        return (
            <div>
                <style>{".content-wrap { background-image: none !important; background-color: #D7D7D7}"}</style>
                {
                    this.state.loading || !this.state.negocio ? (
                        <CustomLoader />

                    ) : (
                        this.state.negocio.length === 0 ? (
                            <div className="alert alert-danger" role="alert">
                                No hay establecimientos para mostrar
                            </div>
                        ) : (
                            <div className="container contenedor-negocios" style={{ minHeight: "100% !important", padding: "20px" }}>
                                < Negocios local={this.state.negocio} />
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

export default Hoteles;