import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
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
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//Login Exiting User
	const loginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	//Log Out Current User
	const logOut = () => {
		return signOut(auth);
	};
	//Get Login User
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser.emailVerified) {
				setUser(currentUser);
			}
			setLoading(false);
		});
	}, [auth]);
	const authInfo = { loading, user, setUser, createUser, loginUser, logOut };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
