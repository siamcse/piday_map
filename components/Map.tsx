"use client"

import React, { useEffect, useState } from 'react';
import { GeolocateControl, Map, Marker, NavigationControl } from 'react-map-gl';
import { MapPinIcon } from '@heroicons/react/24/solid'

const MapComponent = () => {
    const [viewPort, setViewPort] = useState({
        latitude: 24.42677647459365,
        longitude: 44.60008244598015,
        zoom: 9
    });
    const [newPlace, setNewPlace] = useState({
        lat: viewPort.latitude,
        long: viewPort.longitude
    });
    const Token = 'pk.eyJ1IjoiaGFuZ2dpIiwiYSI6ImNsb3BoZ2pwZjA4Z2Iyam83NzhiOTR1c2wifQ.44mLv--JS8miDmE-XP8d6g';

    useEffect(() => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newPlace?.lat},${newPlace?.long}.json?types=country&access_token=${Token}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [viewPort, newPlace])

    const handleClick = (e: any) => {
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        console.log(e);
        setNewPlace({
            lat: latitude,
            long: longitude
        })
    }
    console.log(newPlace);

    return (
        <div className=''>
            <Map
                mapboxAccessToken={Token}
                initialViewState={viewPort}
                style={{ width: '100%', height: '545px',borderRadius:'10px' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
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
                <NavigationControl position='bottom-right' />
                <GeolocateControl
                    trackUserLocation
                    position='bottom-right'
                />
            </Map>
        </div>
    );
};

export default MapComponent;