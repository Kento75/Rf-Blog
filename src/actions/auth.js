import { firebase, googleAuthProvider } from '../firebase/firebase';

export const LOGIN = 'LOGIN', LOGOUT = 'LOGOUT';

export const login = (uid) => ({
	type: LOGIN,
	uid
});

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const logout = () => ({
	type: LOGOUT
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};
