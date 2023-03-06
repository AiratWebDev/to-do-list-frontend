import React, {useContext} from 'react';
import AuthContext from "../../context/AuthContext";

const Logout = () => {
    let {user, logoutUser} = useContext(AuthContext)

    return (
        <>
            <div>Вы авторизованы под <b>{user}</b></div>
            <a href='' onClick={logoutUser}>Выйти</a>
        </>
    );
};

export default Logout;