import React from 'react';

const Home = () => {
    return (
        <div className='MainContainer home'>
            <div className='Home_Left'>
                <h1 className='h1_style'>Hello, It's me</h1>
                <h2 className='h2_style'>Murad</h2>
                <p className='TextInfo'>I'm a passionate computer science master's student with a knack for problem-solving and a deep love for web development. I find joy in unraveling complex challenges and transforming them into sleek, functional websites. Building digital solutions is my creative outlet, where I thrive and continuously explore new horizons.</p>
                <div>
                    <a className='Links' href="https://www.linkedin.com/in/murad-aleskerov/"><img src={process.env.PUBLIC_URL + '/images/LinkedInLogo.png'} alt="MyImage" /></a>
                    <a className='Links' href="https://github.com/MuradAles"><img src={process.env.PUBLIC_URL + '/images/gitLogo.png'} alt="MyImage" /></a>
                </div>
            </div>
            <div className='Home_Right'>
                <img className="profilePic" src={process.env.PUBLIC_URL + '/images/ProfilePic.jpg'} alt="MyImage" />
            </div>
        </div>
    );
};

export default Home;
