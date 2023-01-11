import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';

function App() {
    return (
        <>
            <div>
                <Form />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default App;
