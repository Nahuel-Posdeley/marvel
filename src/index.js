import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SliceProvider } from './context/SliceCharacters';
import Home from './screens/Home/Home';
import Details from './screens/Details/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SliceProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/character/:id" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </SliceProvider>
);


