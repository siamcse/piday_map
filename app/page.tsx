"use client"
import React, { useContext, useEffect, useState } from 'react';
import { GeolocateControl, Map, Marker, NavigationControl } from 'react-map-gl';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { MapContext } from '@/components/context/MapProvider';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();
  const { viewPort, setViewPort, newPlace, setNewPlace, setCountry, country } = useContext(MapContext);
  const Token = 'pk.eyJ1IjoiaGFuZ2dpIiwiYSI6ImNsb3BoZ2pwZjA4Z2Iyam83NzhiOTR1c2wifQ.44mLv--JS8miDmE-XP8d6g';

  useEffect(() => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newPlace?.latitude},${newPlace?.longitude}.json?types=country&access_token=${Token}`)
      .then(res => res.json())
      .then(data => setCountry(data?.features[0]?.place_name))
  }, [viewPort, newPlace])

  const handleClick = (e: any) => {
    const longitude = e.lngLat.lng;
    const latitude = e.lngLat.lat;
    setNewPlace({
      latitude: latitude,
      longitude: longitude,
      width: 800,
      height: 800,
      zoom: 13,
      pitch: 0,
      bearing: 0
    });
    if (country) {
      router.push('/lands');
    }
  }

  return (
    <div className='relative'>
      <Map
        mapboxAccessToken={Token}
        initialViewState={viewPort}
        style={{ width: '100%', height: '100vh', borderRadius: '10px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={handleClick}
        doubleClickZoom={false}
      >
        {
          newPlace ?
            <>
              <Marker
                longitude={newPlace?.longitude}
                latitude={newPlace?.latitude}
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
                longitude={viewPort?.longitude}
                latitude={viewPort.latitude}
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
      <div className='absolute'>
        Piday Map
      </div>
    </div>
  );
};

export default HomePage;