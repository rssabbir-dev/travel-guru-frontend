import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
	const [error, setError] = useState('');
	const { createUser, verifyEmail, updateUserProfile } =
		useContext(AuthContext);
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((res) => {
				console.log(res.user);
                handleVerifyEmail();
                handleUpdateUserProfile(name,photoURL)
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};
	const handleVerifyEmail = () => {
		verifyEmail()
			.then(() => {
				toast.success('Registration Complete, Now Verify Your Email');
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	const handleUpdateUserProfile = (name, photoURL) => {
		const profileData = { displayName: name, photoURL: photoURL };
		updateUserProfile(profileData)
			.then(() => {
				console.log('User Name And Photo Updated');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className='hero h-5/6'>
			<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<form onSubmit={handleSubmit} className='card-body'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Your Full Name'
							className='input input-bordered'
							name='name'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Photo URL</span>
						</label>
						<input
							type='text'
							placeholder='Paste Photo URL'
							className='input input-bordered'
							name='photoURL'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							placeholder='Enter Your Email'
							className='input input-bordered'
							name='email'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							type='text'
							placeholder='Set A Strong Password'
							className='input input-bordered'
							name='password'
							required
						/>
						<label className='label'>
							<span className='text-red-500 label-text-alt'>
								{error}
							</span>
						</label>
					</div>
					<div className='form-control mt-6'>
						<button className='btn btn-primary'>Register</button>
					</div>
					<div className='text-center'>
						<span className='label-text-alt'>
							Have An Account?{' '}
							<Link className='link link-hover' to='/login'>
								Login Here
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;
