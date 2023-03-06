import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/navigation and routing/Router'
import {AuthProvider} from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className={'page-content'}>
                <AuthProvider>
                    <Router/>
                </AuthProvider>
            </div>
        </BrowserRouter>
    )
}

export default App;
