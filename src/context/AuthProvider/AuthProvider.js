import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	//Loading State
	const [loading, setLoading] = useState(true);
	//User State
	const [user, setUser] = useState(null);
	//Create New USer
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//Login Exiting User
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const updateUserProfile = (profileData) => {
		return updateProfile(auth.currentUser, profileData);
	};
	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};
	//Log Out Current User
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	//Get Login User
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser === null || currentUser.emailVerified) {
				setUser(currentUser);
			}
			setLoading(false);
		});
	}, [auth]);
	const authInfo = {
		loading,
		user,
		setUser,
		createUser,
		loginUser,
		logOut,
		verifyEmail,
		updateUserProfile
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
