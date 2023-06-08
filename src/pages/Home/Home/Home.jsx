import React from 'react';
import Banner from '../../../components/Home/Banner';
import PopularClasses from '../../../components/Home/PopularClasser/PopularClasses';
import PopularInstructors from '../../../components/Home/PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;