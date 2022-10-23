import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { siteURL } from '../../routes/router';
import MultiViewCarousel from '../shared/MultiViewCarousel';

const Home = () => {
	const places = useLoaderData();
	const [activePlaceId, setActivePlaceId] = useState(null);
    const [activePlace, setActivePlace] = useState({});
	useEffect(() => {
        const fetchData = async () => {
            
			try {
				const response = await fetch(
					`${siteURL}/places/${activePlaceId}`
                );
				const data = await response.json();
				setActivePlace(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
    }, [activePlaceId]);
    const navigate = useNavigate();
    const redirectBooking = (id) => {
        localStorage.setItem('placeId',id)
        navigate('/booking')
    }

	return (
		<div className='grid grid-cols-2 gap-20'>
			<div className='flex justify-center items-center'>
				<div className='space-y-4'>
					<h1 className='text-5xl font-bold'>{activePlace?.name}</h1>
					<p>{activePlace?.description}</p>
                    <button
                        onClick={()=>redirectBooking(activePlaceId)}
						className='btn btn-warning'
					>
						Booking
					</button>
				</div>
			</div>
			<div>
				<MultiViewCarousel
					activePlaceId={activePlaceId}
					setActivePlaceId={setActivePlaceId}
					places={places}
				/>
			</div>
		</div>
	);
};

export default Home;
