import React, { Component } from 'react';

import Negocios from '../components/Negocio';
import CustomLoader from '../components/CustomLoader';

import keys from '../keys.json';


export default class EstacionesDeServicio extends Component {

    state = {
        loading: true,
        negocio: null,
    }

    async componentDidMount() {

        /* const reqres = await fetch(process.env.REACT_APP_ESTACIONES_API); */
        const reqres = await fetch(keys.REACT_APP_ESTACIONES_API);
        const estaciones = await reqres.json();

        this.setState({ negocio: estaciones, loading: false });
        document.title = "Estaciones de servicio"
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
