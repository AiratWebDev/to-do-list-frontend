import {createContext, useState} from "react";

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {
    let [user, setUser] = useState(() => localStorage.getItem('userData') ? localStorage.getItem('userData') : null)

    // function to simulate authorization
    let loginUser = async (event) => {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value

        if (username === 'admin' && password === '123') {
            let data = {
                'username': 'admin',
                'password': '123',
            }
            setUser(data.username)
            localStorage.setItem('userData', data.username)
        } else if (!username || !password) {
            alert('Вы не заполнили все поля')
        } else {
            alert('Вы не администратор')
        }
    }

    // function for deauthorization
    let logoutUser = () => {
        setUser(null)
        localStorage.removeItem('userData')
    }

    const contextData = {
        'user': user,
        'loginUser': loginUser,
        'logoutUser': logoutUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}