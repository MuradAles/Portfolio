import React from "react";

const Home = () => {
  return (
    <div className="MainContainer home">
      <div className="Home_Left">
        <h1 className="h1_style">Hello, It's me</h1>
        <h2 className="h2_style">Murad</h2>
        <p className="TextInfo">
          Dynamic and proficient Full-Stack Developer with a proven track record
          of enhancing user experiences and platform functionality in
          collaborative, cross-functional team environments. Skilled in
          modifying existing software to rectify errors, upgrade interfaces, and
          optimize performance. Experienced in implementing robust unit testing
          practices using Jest to ensure application reliability and stability.
          Adept at actively participating in Agile development methodologies,
          facilitating the timely delivery of project milestones. Passionate
          about leveraging technology to drive innovation and deliver
          high-quality solutions.
        </p>
        <div>
          <a
            className="Links"
            href="https://www.linkedin.com/in/murad-aleskerov/"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/LinkedInLogo.png"}
              alt="MyImage"
            />
          </a>
          <a className="Links" href="https://github.com/MuradAles">
            <img
              src={process.env.PUBLIC_URL + "/images/gitLogo.png"}
              alt="MyImage"
            />
          </a>
        </div>
      </div>
      <div className="Home_Right">
        <img
          className="profilePic"
          src={process.env.PUBLIC_URL + "/images/ProfilePic.jpg"}
          alt="MyImage"
        />
      </div>
    </div>
  );
};

export default Home;
