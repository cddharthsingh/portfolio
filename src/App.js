import React from 'react';
import Layout from './components/Layout';
import './index.css';
import { MenuProvider } from './services/menuContext';
import { data2 } from './model/Menu';

function App() {
    const initialMenuContent = data2;
    return (
        <MenuProvider initialMenuContent={initialMenuContent}>
            <Layout />
        </MenuProvider>
    );
}

export default App;
