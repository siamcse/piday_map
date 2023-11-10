"use client"
import HexagonMap from '@/components/HeaxagonMap';
import { MapContext } from '@/components/context/MapProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

type addressState = {
    [key: string]: any
}

const LandsPage = () => {
    const {viewPort, newPlace, setNewPlace, country } = useContext(MapContext);
    const router = useRouter();
    const [address, setAddress] = useState<addressState>({});

    // useEffect(() => {
    //     if (!country) {
    //         router.push('/');
    //     }
    // }, [country])

    return (
        <div className=''>
            <div className='container mx-auto pt-10'>
                <p>首页 {country}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-4'>
                    <div className='w-full relative rounded-lg'>
                        {/* <MapComponent
                            newPlace={newPlace}
                            setNewPlace={setNewPlace}
                            setAddress={setAddress}
                        /> */}
                        <HexagonMap 
                        viewPort={viewPort}
                            newPlace={newPlace}
                            setNewPlace={setNewPlace}
                            setAddress={setAddress}
                        
                        />
                    </div>
                    <div className='w-full relative pt-5'>
                        <h1 className='text-3xl font-semibold'>{country}</h1>
                        <div className='mt-5 p-6 bg-[#F7F7F7] rounded-xl'>
                            <div className='grid grid-cols-2 py-5'>
                                <div>
                                    <p className='opacity-40'>地址</p>
                                    <p>{address ? address.text : 'Address not found'}</p>
                                </div>
                                <div>
                                    <p className='opacity-40'>哈希值</p>
                                    <p>{address ? address?.id?.split('.')[1] : 'Id not found'}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='grid grid-cols-2 py-5'>
                                <div>
                                    <p className='opacity-40'>土地铸造时间</p>
                                    <p>2023-08-25 16:00:21</p>
                                </div>
                                <div>
                                    <p className='opacity-40'>持有人</p>
                                    <p>张三</p>
                                </div>
                            </div>
                            <hr />
                            <div className='py-5'>
                                <p className='opacity-40'>最后价格</p>
                                <h1 className='text-2xl'>150</h1>
                            </div>
                        </div>
                        <div className='mt-5 flex flex-col md:flex-row gap-7'>
                            <button className='px-32 py-3 bg-[#FFC000] rounded-xl'>上架</button>
                            <button className='px-32 py-3 border rounded-xl'>转移</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandsPage;