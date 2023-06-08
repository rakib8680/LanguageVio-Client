import React from 'react';
import AboutReuse from './AboutReuse';

const AboutUs = () => {
    return (
        <div className='pt-24'>
            <h1 className='text-center text-3xl font-semibold text-slate-700 pb-16'>Why Learn with <span className='font-black'>LANGUAGEVIO</span>.inc ?</h1>
            <AboutReuse
                img="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/en-homepage-learn-together-mb-2x-opt.jpg"
                h3="AN INTERACTIVE COMMUNITY"
                h1="Learn more together"
                p="Go beyond the textbook. Practise pronunciation, gain cultural insights and exchange local language tips with our global community of learners."
            />
            <AboutReuse
                img="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/homepage-learn-confidence-dt-2x-new.jpg"
                h3="COURSES CREATED BY EXPERTS"
                h1="Learn with confidence"
                p="Make real improvements, get real results. Be prepared for real-world interactions by building solid foundations with plenty of speaking, listening, reading and writing practise."
                flex="flex-row-reverse"
            />
             <AboutReuse
                img="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/en-homepage-learn-real-life-mb-2x-opt.jpg"
                h3="LESSONS FEATURING REAL PEOPLE"
                h1="Learn for real life"
                p="Say goodbye to outdated phrases and hello to skills that take you places. Learn language for every day with regularly updated content, video flashcards with real people and helpful cultural insights."
            />
        </div>
    );
};

export default AboutUs;