import { types } from "../types/types"

// action asyncrona
export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch( login(123,'Memen'));
        }, 3500);
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