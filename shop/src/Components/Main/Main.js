import React from 'react';
import './Main.css'
import Filters from '../Filters/Filters';
import CardsCollection from '../CardsCollection/CardsCollection';
const Main = () => {
    return (
        <main>
            <Filters />
            <CardsCollection/>
        </main>
    );
};

export default Main;