import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {
				console.log('logOut');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className='navbar'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/destination'>Destination</Link>
						</li>
						<li>
							<Link to='/booking'>Booking</Link>
						</li>
						<li>
							<Link to='/blogs'>Blogs</Link>
						</li>
						<li>
							<Link to='/about-us'>About Us</Link>
						</li>
					</ul>
				</div>
				<Link to='/' className='btn btn-ghost normal-case text-xl'>
					Travel Guru
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<div className='form-control mr-4'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered'
					/>
				</div>
				<ul className='menu menu-horizontal p-0'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/destination'>Destination</Link>
					</li>
					<li>
						<Link to='/booking'>Booking</Link>
					</li>
					<li>
						<Link to='/blogs'>Blogs</Link>
					</li>
					<li>
						<Link to='/about-us'>About Us</Link>
					</li>
				</ul>
			</div>
			{user?.uid ? (
				<div className='dropdown dropdown-end'>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='w-10 rounded-full'>
							<img src={user?.photoURL} alt='' />
						</div>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<span className='justify-between'>
								{user?.displayName}
							</span>
						</li>
						<li>
							<Link to='profile' className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</Link>
						</li>
						<li>
							<button onClick={handleLogOut}>Logout</button>
						</li>
					</ul>
				</div>
			) : (
				<div className='navbar-end'>
					<Link to='/login' className='btn'>
						Login
					</Link>
				</div>
			)}
		</div>
	);
};

export default Header;
