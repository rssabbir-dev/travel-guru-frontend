import React from 'react';

const HotelCard = ({ hotel }) => {
	const { name, img } = hotel;
	return (
		<div className='flex justify-center'>
			<div className='flex flex-col md:flex-row md:max-w-xl rounded-l bg-base-100 shadow-lg'>
				<img
					className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
					src={img}
					alt=''
				/>
				<div className='p-6 flex flex-col justify-start'>
					<h5 className=' text-xl font-medium mb-2'>
						{name}
					</h5>
					<p className=' text-base mb-4'>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<p className='text-xs'>Last updated 3 mins ago</p>
				</div>
			</div>
		</div>
	);
};

export default HotelCard;
