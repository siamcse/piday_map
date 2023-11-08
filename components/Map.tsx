"use client"

import React, { useState } from 'react';
import { Map, Marker } from 'react-map-gl';
import { MapPinIcon } from '@heroicons/react/24/solid'

const MapComponent = () => {
    const [viewPort, setViewPort] = useState({
        latitude: 23.6850,
        longitude: 90.3563,
        zoom: 9
    });
    const [newPlace, setNewPlace] = useState(null);

    const handleClick = (e: any) => {
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        // console.log(e.lngLat);
        setNewPlace({
            lat: latitude,
            long: longitude
        })
    }
    console.log(newPlace);

    const coords = [
        {
            latitude: 23.6850,
            longitude: 90.3563
        },
        {
            latitude: 22.6850,
            longitude: 90.3563
        },
        {
            latitude: 24.6850,
            longitude: 90.3563
        },
    ]

    const Token = 'pk.eyJ1IjoiaGFuZ2dpIiwiYSI6ImNsb3BoZ2pwZjA4Z2Iyam83NzhiOTR1c2wifQ.44mLv--JS8miDmE-XP8d6g'
    return (
        <div>
            <Map
                mapboxAccessToken={Token}
                initialViewState={viewPort}
                style={{ width: '100%', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                // onViewportChange={(viewPort) => setViewPort(viewPort)}
                onDblClick={handleClick}
                doubleClickZoom={false}
            >
                {
                    newPlace ?
                        <>
                            <Marker
                                longitude={`${newPlace?.long}`}
                                latitude={`${newPlace?.lat}`}
                                anchor="bottom"
                                draggable={true}
                                onDragEnd={handleClick}
                            >
                                <MapPinIcon className='w-10 h-10 text-blue-600' />
                            </Marker>
                        </>
                        :
                        <>
                            <Marker
                                longitude={`${viewPort?.longitude}`}
                                latitude={`${viewPort.latitude}`}
                                anchor="bottom"
                            >
                                <MapPinIcon className='w-10 h-10 text-blue-600' />
                            </Marker>
                        </>
                }
            </Map>
        </div>
    );
};

export default MapComponent;