import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteURL } from '../../routes/router';

const Booking = () => {
    const navigate = useNavigate();
	const placeOption = document.getElementById('placeOption');
	const [places, setPlaces] = useState([]);
	const [place, setPlace] = useState({});
	const [placeId, setPlaceId] = useState();
	useEffect(() => {
		const storedPlaceId = localStorage.getItem('placeId');
		setPlaceId(storedPlaceId);
		const getToday = () => {
			const date = new Date();

			let day = date.getDate();
			let month = date.getMonth() + 1;
			let year = date.getFullYear();

			if (month < 10) month = '0' + month;
			if (day < 10) day = '0' + day;

			const today = year + '-' + month + '-' + day;
			document.getElementById('fromDate').value = today;
			date.setDate(date.getDate() + 3);
			const next3Day = date.getDate();
			const to = year + '-' + month + '-' + next3Day;
			document.getElementById('toDate').value = to;
		};
		getToday();

		fetch(`${siteURL}/places`)
			.then((res) => res.json())
			.then((data) => setPlaces(data));

		fetch(`${siteURL}/places/${placeId}`)
			.then((res) => res.json())
			.then((data) => setPlace(data));
	}, [placeId]);


	const handleOptionChange = (event) => {
		const id = event.target.value;
		localStorage.setItem('placeId', id);
		setPlaceId(id);
	};
	const handleClearBooking = () => {
		localStorage.clear();
		console.log(placeOption);
		setPlaceId(null);
		console.log(placeOption.selectedIndex);
		placeOption.selectedIndex = 0;
		console.log(placeOption.selectedIndex);
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const start = form.start.value;
        const destination = form.destination.value;
        const from = form.from.value;
        const to = form.to.value;
        const booking = { start, destination, from, to };
        localStorage.setItem('booking', JSON.stringify(booking))
        navigate('/hotels')
    }
	return (
		<div className='grid grid-cols-2 gap-20 h-[80vh]'>
			<div className='flex justify-center items-center'>
				{placeId ? (
					<div className='space-y-4'>
						<h1 className='text-5xl font-bold'>{place?.name}</h1>
						<p>{place?.description}</p>
					</div>
				) : (
					<div className='text-center bg-base-100 p-20 rounded-3xl'>
						<h1 className='text-xl'>Please</h1>
						<h1 className='text-2xl'>Select Your Destination</h1>
						<h1 className='text-3xl'>Form Right Side</h1>
					</div>
				)}
			</div>
			<div>
				<div className='hero h-5/6'>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleSubmit} className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Start</span>
								</label>
								<input
									type='text'
									placeholder='Start'
									className='input input-bordered'
									name='start'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>
										Destination
									</span>
								</label>
								<select
									defaultValue={place?.id || 0}
									className='select select-bordered'
									onChange={handleOptionChange}
                                    id='placeOption'
                                    name='destination'
								>
									<option value={0} disabled>
										Pick one
									</option>
									{places.map((p) => (
										<option selected={p.id === place?.id} value={p.id} key={p.id}>
											{p.name}
										</option>
									))}
								</select>
							</div>
							<div className='grid grid-cols-2 gap-5'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>From</span>
									</label>
									<label className='input-group input-group-vertical'>
										<input
											type='date'
											placeholder='info@site.com'
											className='input input-bordered'
                                            id='fromDate'
                                            name='from'
										/>
									</label>
								</div>

								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>To</span>
									</label>
									<label className='input-group input-group-vertical'>
										<input
											type='date'
											placeholder='info@site.com'
											className='input input-bordered'
                                            id='toDate'
                                            name='to'
										/>
									</label>
								</div>
							</div>

							<div className='form-control mt-6 grid grid-cols-2 gap-5'>
								<button
									onClick={handleClearBooking}
									className='btn btn-warning disabled:bg-gray-700 disabled:text-gray-400'
									disabled={!placeId}
								>
									Clear Booking
								</button>
								<button
									className='btn btn-primary disabled:bg-gray-700 disabled:text-gray-400'
									disabled={!placeId}
								>
									Start Booking
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Booking;
