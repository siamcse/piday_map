"use client"
import React, { createContext, useState } from 'react';

export const MapContext = createContext(null);

const MapProvider = ({ children }) => {
    const [viewPort, setViewPort] = useState({
        latitude: 24.42677647459365,
        longitude: 44.60008244598015,
        zoom: 5
    });
    const [newPlace, setNewPlace] = useState({
        latitude: 24.42677647459365,
        longitude: 44.60008244598015,
        zoom: 9
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