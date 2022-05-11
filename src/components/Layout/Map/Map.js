import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps"

import Layout from "../Layout";
import HomeHeader from "../HeaderTitle/HeaderTitle";
import OrderStats from "../OrderStats/OrderStats";

import './Map.css'

// address: 'Kwara State Polytechnic, Ilorin',

export default function Map() {
    // const containerStyle = {
    //     width: '400px',
    //     height: '400px'
    // };

    // const center = {
    //     lat: 8.482061,
    //     lng: 4.526228,
    // }

    // url to a valid topojson file
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"


    return (
        <Layout>
            <div className="map">
                <HomeHeader currentPage="Location Map" />
                <OrderStats section="Home" />
                <main>
                    <ComposableMap>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => geographies.map(geo =>
                                <Geography key={geo.rsmKey} geography={geo} />
                            )}
                        </Geographies>
                    </ComposableMap>
                </main>
            </div>
        </Layout>
    )
}

// const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyAL0uLq8z9pZAYysT0y1Xd4G8SobbgA6A8"
// })

// const [map, setMap] = React.useState(null)

// const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
// }, [])

// const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
// }, [])

// {isLoaded ? (
//     <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//     >
//         { /* Child components, such as markers, info windows, etc. */}
//         <></>
//     </GoogleMap>
// ) : <></>}