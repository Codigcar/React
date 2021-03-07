import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { HomeScreen } from './HomeScreen'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const user = {
    //     id: 1,
    //     name: 'Carlos',
    //     email: 'carlos@gmail.com'
    // }

    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            temporal:123
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
