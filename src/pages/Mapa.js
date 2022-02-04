import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
const mapContainerStyle = {
    height: "700px",
    width: "1200px",
};
/* const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    , 
}; */
const center = {
    lat: -32.9998436175037,
    lng: -58.52045830174319,
};

function Mapa(props) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBH3UJYBjdWqib5Z7XDeSorJTmYSKdGACs",
        libraries: ["places"],
    });

    if (loadError) return "Error loading map.";
    if (!isLoaded) return "Laoding map ...";


    return <div className="container" style={{ marginTop: "20px" }}>
        <style>{`.content-wrap { background-image: url("./bg_2.png") !important; background-color: #FFB200}`}</style>
        <div className="row justify-content-center">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={center}>
            </GoogleMap>
        </div>
    </div>;
}

export default Mapa;