import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <h1>LoginScreen</h1>

            <form>
                <input type="text" placeholder="email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit">Login</button>
                <hr />
                google
            </form>
        </div>
    )
}
