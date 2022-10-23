import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelCard from '../shared/HotelCard';

const Hotels = () => {
    const hotels = useLoaderData()
    const [booking,setBooking] = useState({})
	useEffect(() => {
        const storedBooking = JSON.parse(localStorage.getItem('booking'));
        setBooking(storedBooking)
	},[]);
	return (
		<div className='space-y-5'>
			<h1 className='text-3xl'>STAY IN {booking?.start?.toUpperCase()}</h1>
			<div className='grid grid-cols-2 gap-14'>
				<div className='space-y-10'>
					{hotels.map((hotel) => (
						<HotelCard key={hotel.id} hotel={hotel} />
					))}
                </div>
                <div>
                    <h1 className='text-5xl'>Google Map</h1>
                </div>
			</div>
		</div>
	);
};

export default Hotels;
