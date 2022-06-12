import { useState, createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ userInfo, setUserInfo ] = useState({
        id: '',
        first_name: 'LOGIN',
        last_name: '',
        email: '',
        phone_number: ''
    });
    const [ userName, setUserName ] = useState('LOGIN')

    return (
        <AuthContext.Provider value={ {userInfo, setUserInfo, userName, setUserName} }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;