import React, { Component } from 'react';

import Negocios from '../components/Negocio';
import CustomLoader from '../components/CustomLoader';

export default class EstacionesDeServicio extends Component {

    state = {
        loading: true,
        negocio: null,
    }

    async componentDidMount() {

        const reqres = await fetch(process.env.REACT_APP_ESTACIONES_API);
        const estaciones = await reqres.json();

        this.setState({ negocio: estaciones, loading: false });
        document.title = "Estaciones de servicio"
    }


    render() {
        return (
            <div>
                <style>{".content-wrap { background-image: none !important; background-color: #D7D7D7}"}</style>
                <div className="container contenedor-negocios" style={{ minHeight: "100% !important" }}>
                    {this.state.loading || !this.state.negocio ? (
                        <CustomLoader />
                    ) : (
                        <div>
                            <Negocios local={this.state.negocio} />
                        </div>
                    )
                    }
                </div>
            </div >
        )
    }
}
