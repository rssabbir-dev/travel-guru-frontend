import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// import required modules
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';


const MultiViewCarousel = ({ places,setActivePlaceId }) => {
    const handleSlideChange = (swiper) => {
        const id = swiper.visibleSlides[1].id;
        setActivePlaceId(id)
    }
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				// slidesPerView={'auto'}/
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				slidesPerView={2}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				loop={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				onSlideChange={(swiper) => handleSlideChange(swiper)}
			>
				{places.map((place) => (
					<SwiperSlide key={place.id} id={place.id}>
						<div className='relative bg-black rounded-3xl'>
							<img
								className='opacity-75'
								src={place?.img}
								alt=''
							/>
							<h1 className='text-4xl absolute bottom-5 left-5'>
								{place?.name}
							</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default MultiViewCarousel;
