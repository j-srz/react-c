import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { loadNotes } from "../../helpers/loadNotes";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
  return async( dispath ) => {
		dispath( checkingCredentials() );
	}
}



export const startGoogleSingIn = (  ) => {
  return async( dispath ) => {
		dispath( checkingCredentials() );

		const result = await singInWithGoogle();
		if ( !result.ok ) return dispath( logout( result.errorMessage ) );

		dispath( login( result ) );


	}
}


export const startCreatingUserWithEmailPassword = ( {displayName, email, password} ) => {
	return async( dispatch ) => {
		dispatch( checkingCredentials() );

		const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({displayName, email, password});

		if ( !ok ) return(dispatch( logout({errorMessage})));

		dispatch ( login({uid, displayName, email, photoURL}) );

		

	}
}



export const startLoginWithEmailPassword = ( {email, password} ) => {
	return async( dispatch ) => {
		dispatch( checkingCredentials() );
		const result = await loginWithEmailPassword({email, password});

		if ( !result.ok ) return(dispatch( logout( result )));

		dispatch ( login( result ) );




	}
}


export const startLogout = () => {
	return async( dispatch ) => {
		await logoutFirebase();
		dispatch( clearNotesLogout() );
		dispatch( logout() );
	}
}



