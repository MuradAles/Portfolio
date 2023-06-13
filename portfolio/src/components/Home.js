import React from 'react';

const Home = () => {
    return (
        <div className='MainContainer home'>
            <div className='Home_Left'>
                <h1 className='h1_style'>Hello, It's me</h1>
                <h2 className='h2_style'>Murad</h2>
                <p className='TextInfo'>Hello and welcome to my website! I'm a master's student of computer science and my passion lies in creating websites and exploring the fascinating field of machine learning. I believe that the combination of these two fields can create powerful tools that can transform the world we live in. Currently, I'm focusing on expanding my knowledge and skills in these areas. I enjoy staying up-to-date with the latest technologies and trends, and love to challenge myself with new projects. Through my website, I hope to showcase some of my work and share my enthusiasm for these subjects. Feel free to browse through my portfolio and get in touch if you have any questions or ideas for collaboration. Thank you for visiting!</p>
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
