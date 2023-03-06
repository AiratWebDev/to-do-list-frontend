import React, {useContext} from 'react';
import Logout from "../authorization/Logout";
import Login from "../authorization/Login";
import AuthContext from "../../context/AuthContext";

const Navigation = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className={'navigation'}>
            {user ? <Logout/> : <a> <Login/> </a>}
        </div>
    );
};

export default Navigation;