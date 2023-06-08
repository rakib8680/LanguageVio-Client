import React from 'react';

const AboutReuse = ({img, h3, h1, p, flex}) => {
    return (
        <div className={`flex ${flex}  justify-center items-center gap-28 pb-10`}>
                <div className=''>
                    <img src={img} className='md:w-[550px]' />
                </div>
                <div className='md:w-1/4 space-y-3'>
                    <h3 className='text-sm font-black text-slate-600'>{h3}</h3>
                    <h1 className='text-4xl font-bold text-slate-700'>{h1}</h1>
                    <p>{p}</p>
                </div>
            </div>
    );
};

export default AboutReuse;