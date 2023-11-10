"use client"
import React, { createContext, useState } from 'react';

type mapState = {
    [key: string]: any
}

export const MapContext = createContext<mapState>({});

const MapProvider = ({ children }:{children:React.ReactNode}) => {
    const [viewPort, setViewPort] = useState({
        latitude: 24.42677647459365,
        longitude: 44.60008244598015,
        width: 400,
        height: 400,
        zoom: 13,
        pitch: 0,
        bearing: 0
    });
    const [newPlace, setNewPlace] = useState({
        latitude: 24.42677647459365,
        longitude: 44.60008244598015,
        zoom: 5,
        bearing: 0,
        pitch:0
    });
    const [country, setCountry] = useState<string>('');

    const mapInfo = {
        viewPort,
        setViewPort,
        newPlace,
        setNewPlace,
        country,
        setCountry
    }
    return (
        <MapContext.Provider value={mapInfo}>
            {children}
        </MapContext.Provider>
    );
};

export default MapProvider;