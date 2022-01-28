import React, { Component } from 'react';
import CustomLoader from '../components/CustomLoader';
import Negocios from '../components/Negocio';

class Restaurantes extends Component {

    state = {
        negocio: null,
        loading: true
    }

    async componentDidMount() {
        const reqres = await fetch(process.env.REACT_APP_RESTAURANTES_API);
        const farmacias = await reqres.json();

        this.setState({ negocio: farmacias, loading: false })
    }

    render() {
        return (
            <div>
                <style>{".content-wrap { background-image: none !important; background-color: #D7D7D7}"}</style>
                <div className="container contenedor-negocios" style={{ minHeight: "100% !important" }}>
                    {
                        this.state.loading || !this.state.negocio ? (
                            <CustomLoader />
                        ) : (
                            <div>
                                <Negocios local={this.state.negocio} />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Restaurantes;