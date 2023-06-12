import React from 'react';
import AboutUs from '../../../components/Home/AboutUs/AboutUs';
import Banner from '../../../components/Home/Banner';
import PopularClasses from '../../../components/Home/PopularClasser/PopularClasses';
import PopularInstructors from '../../../components/Home/PopularInstructors/PopularInstructors';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <PopularClasses/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;