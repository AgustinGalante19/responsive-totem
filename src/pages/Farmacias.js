import React, { Component } from 'react';

import CustomLoader from '../components/CustomLoader';
import Negocios from '../components/Negocio';
import keys from '../keys.json';
class Farmacias extends Component {

    state = {
        loading: true,
        negocio: null,
    }

    async componentDidMount() {
        /* const reqres = await fetch(process.env.REACT_APP_FARMACIAS_API); */
        const reqres = await fetch("http://localhost:5000/api/farmacias");
        const farmacias = await reqres.json();

        this.setState({ loading: false, negocio: farmacias });
        console.log(process.env.REACT_APP_FARMACIAS_API);
        document.title = "Farmacias"
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

export default Farmacias;

/*
return (
            <div className="container contenedor-negocios" style={{ minHeight: "100% !important" }}>
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
                            < Negocios local={this.state.negocio} />
                        )
                    )
                }
            </div>
        )
*/