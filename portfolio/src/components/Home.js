import React from 'react';

const Home = () => {
    return (
        <>
            <div className='left'>
                <h1 className='Greeting'>Hi, my name is</h1>
                <div className='rightSide'>
                    <h2 className='Name'>Murad</h2>
                    <p className='TextInfo'>Hello and welcome to my website portfolio! I'm a master's student of computer science and my passion lies in creating websites and exploring the fascinating field of machine learning. I believe that the combination of these two fields can create powerful tools that can transform the world we live in.
                        Currently, I'm focusing on expanding my knowledge and skills in these areas. I enjoy staying up-to-date with the latest technologies and trends, and love to challenge myself with new projects.
                        Through my website, I hope to showcase some of my work and share my enthusiasm for these subjects. Feel free to browse through my portfolio and get in touch if you have any questions or ideas for collaboration. Thank you for visiting!</p>
                    <a className='Links' href="https://www.linkedin.com/in/murad-aleskerov-77a4871b5/">Linked In</a>
                    <br />
                    <a className='Links' href="https://github.com/MuradAles">Git Link</a>
                </div>
            </div>
            <div className='right'>
                <img className="profilePic" src={process.env.PUBLIC_URL + '/images/ProfilePic.jpg'} alt="MyImage" />
            </div>
        </>
    );
};

export default Home;
