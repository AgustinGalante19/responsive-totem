import React, { Component } from 'react';
import CustomLoader from '../components/CustomLoader';
import Negocio from '../components/Negocio';

class Hoteles extends Component {

    state = {
        loading: true,
        negocio: false
    }

    async componentDidMount() {
        const reqres = await fetch(process.env.REACT_APP_HOTELES_API);
        const hoteles = await reqres.json();

        this.setState({ negocio: hoteles, loading: false });
        document.title = "Hoteles";
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
                            <Negocio local={this.state.negocio} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Hoteles;