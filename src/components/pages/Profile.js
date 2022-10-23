import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaRegTimesCircle, FaUserEdit } from 'react-icons/fa';

const Profile = () => {
	const { user } = useContext(AuthContext);
	const [edit, setEdit] = useState(false);
    const handleSubmit = (event) => { };
    const handleEdit = () => {
        setEdit(!edit)
    }
	return (
		<div className='hero h-5/6'>
			<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<form onSubmit={handleSubmit} className='card-body'>
					<div className='flex justify-end'>
						{edit ? (
							<div
								onClick={handleEdit}
								className='text-xl cursor-pointer text-red-500 flex justify-center items-center space-x-1'
							>
								<span>Cancel</span>
								<FaRegTimesCircle />
							</div>
						) : (
							<div
								onClick={handleEdit}
								className='text-xl cursor-pointer hover:text-red-500 flex justify-center items-center space-x-1'
							>
								<span>Edit</span>
								<FaUserEdit />
							</div>
						)}
					</div>
					<div className='flex flex-col items-center w-full'>
						<img
							className='rounded-full w-32'
							src={user?.photoURL}
							alt=''
						/>
						<h4 className='text-xl'>{user?.displayName}</h4>
					</div>
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
							disabled
							defaultValue={user?.email}
						/>
						<label className='label'>
							<span className='label-text-alt text-gray-500'>
								You Can't Change Email
							</span>
						</label>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter Your Full Name'
							className='input input-bordered'
							name='name'
							required
							defaultValue={user?.displayName}
							disabled={!edit}
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Photo URL</span>
						</label>
						<input
							type='text'
							placeholder='Set Photo URL'
							className='input input-bordered'
							name='photoURL'
							required
							defaultValue={user?.photoURL}
							disabled={!edit}
						/>
					</div>
					{edit && (
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>
								Save Change
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Profile;
