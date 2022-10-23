import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
	const { loginUser } = useContext(AuthContext);

	const location = useLocation();
	const navigate = useNavigate();
	let from = location.state?.from?.pathname || '/';

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		loginUser(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				if (!user.emailVerified) {
					toast.error('Verify your email before login');
				} else {
					navigate(from, { replace: true });
				}
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<div className='hero h-5/6'>
			<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<form onSubmit={handleSubmit} className='card-body'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							placeholder='email'
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
							placeholder='password'
							className='input input-bordered'
							name='password'
							required
						/>
						<label className='label'>
							<Link
								to='password-reset'
								className='label-text-alt link link-hover'
							>
								Forgot password?
							</Link>
						</label>
					</div>
					<div className='form-control mt-6'>
						<button className='btn btn-primary'>Login</button>
					</div>
					<div className='text-center'>
						<span className='label-text-alt'>
							Don't Have Account?{' '}
							<Link
								className='link link-hover'
								to='/registration'
							>
								Create Account
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
