import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"

// action asyncrona
export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch( login(123,'Memen'));
        }, 3500);
    }
}
// tarea asyncrona
export const startGoogleLogin = () => {
    // dispath lo provee el DOM
    return ( dispath ) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
                .then( ( {user} ) => {
                    dispath( login (user.uid, user.displayName))
                });
    }
}

export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

