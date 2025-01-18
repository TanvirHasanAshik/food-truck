import React from 'react';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import FoodItems from '../FoodItems/FoodItems';
import ExtraOrdinary from '../ExtraOrdinary/ExtraOrdinary';
import Record from '../Record/Record';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import HappyClient from '../HappyClient/HappyClient';
import WeDocumentFood from '../WeDocumentFood/WeDocumentFood';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <FoodItems />
            <ExtraOrdinary />
            <Record />
            <FromOurMenu />
            <HappyClient />
            <WeDocumentFood />
        </div>
    );
};

export default Home;