import React, { Component } from 'react';

import CustomLoader from '../components/CustomLoader';
import Negocios from '../components/Negocio';

class Farmacias extends Component {

    state = {
        loading: true,
        negocio: null,
    }

    async componentDidMount() {
        const reqres = await fetch(process.env.REACT_APP_FARMACIAS_API);
        const farmacias = await reqres.json();

        this.setState({ loading: false, negocio: farmacias });
        console.log(process.env.REACT_APP_FARMACIAS_API);
        document.title = "Farmacias"
    }

    render() {
        return (
            <div className="container contenedor-negocios" style={{ minHeight: "100% !important" }}>
                <style>{".content-wrap { background-image: none !important; background-color: #D7D7D7}"}</style>
                {
                    this.state.loading || !this.state.negocio ? (
                        <CustomLoader />
                    ) : (
                        <Negocios local={this.state.negocio} />
                    )
                }
            </div>
        )
    }
}

export default Farmacias;