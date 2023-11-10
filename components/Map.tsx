// "use client"

// import React, { useEffect, useState } from 'react';
// import { GeolocateControl, Map, Marker, NavigationControl } from 'react-map-gl';
// import { MapPinIcon } from '@heroicons/react/24/solid'

// const MapComponent = ({ viewPort, setViewPort, newPlace, setNewPlace, setAddress }:any) => {

//     const Token = 'pk.eyJ1IjoiaGFuZ2dpIiwiYSI6ImNsb3BoZ2pwZjA4Z2Iyam83NzhiOTR1c2wifQ.44mLv--JS8miDmE-XP8d6g';

//     useEffect(() => {
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newPlace?.latitude},${newPlace?.longitude}.json?types=address&access_token=${Token}`)
//             .then(res => res.json())
//             .then(data => {
//                 setAddress(data?.features[0])
//             })
//     }, [viewPort, newPlace])

//     const handleClick = (e: any) => {
//         const longitude = e.lngLat.lng;
//         const latitude = e.lngLat.lat;
//         setNewPlace({
//             latitude: latitude,
//             longitude: longitude
//         })
//     }

//     return (
//         <div className=''>
//             <Map
//                 mapboxAccessToken={Token}
//                 initialViewState={newPlace}
//                 style={{ width: '100%', height: '545px', borderRadius: '10px' }}
//                 mapStyle="mapbox://styles/mapbox/streets-v9"
//                 onDblClick={handleClick}
//                 doubleClickZoom={false}
//             >
//                 {
//                     newPlace &&
//                     <>
//                         <Marker
//                             longitude={newPlace?.longitude}
//                             latitude={newPlace?.latitude}
//                             anchor="bottom"
//                             draggable={true}
//                             onDragEnd={handleClick}
//                         >
//                             <MapPinIcon className='w-10 h-10 text-blue-600' />
//                         </Marker>
//                     </>
//                 }
//                 <NavigationControl position='bottom-right' />
//                 <GeolocateControl
//                     trackUserLocation
//                     position='bottom-right'
//                 />
//             </Map>
//         </div>
//     );
// };

// export default MapComponent;