import React, { useState, createContext } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    const [authState, setAuthState] = useState({
        token: token ? token : null,
    })
    const isAuthenticated = () => {
        if(!authState.token) {
            return false
        } else {
            return true
        }
    }

    const setToken = (data) => {
        localStorage.setItem('token', data)

        setAuthState({token: data})
    }

    return (
        <Provider
            value={{
                authState,
                setAuthState: (token) => setToken(token),
                isAuthenticated
            }}
        >
            {children}
        </Provider>
    )
}

export { AuthContext, AuthProvider }