import React from 'react'
import { AppRouter } from './AppRouter'
import { HomeScreen } from './HomeScreen'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id: 1,
        name: 'Carlos',
        email: 'carlos@gmail.com'
    }

    return (
        <UserContext.Provider value={ user }>
            <AppRouter />
        </UserContext.Provider>
    )
}
