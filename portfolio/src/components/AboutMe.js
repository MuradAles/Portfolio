import "./_About.css";
const AboutMe = () => {
  return (
    <div className="MainContainer about">
      <div className="AboutInfo">
        <h1 className="h2_style">About me</h1>
        <div className="Education">
          <h1 className="h1_style">Education</h1>
          <p className="TextInfo">
            <strong className="h1_style" style={{ fontSize: "1.2em" }}>
              Stevens Institute of Technology New Jersey
            </strong>
            <br />
            Master of Science in Computer Science
            <span
              style={{
                display: "inline-block",
                float: "right",
                marginRight: "10px",
              }}
            >
              Aug 2022 – Dec 2023
            </span>
            <br />
            <span className="Text">
              Relevant Coursework: Web Programming, Text Mining and Information
              Retrieval, Mathematical Foundations of Machine learning, Machine
              Learning Applications, Deep learning
            </span>
            <br />
            <strong className="h1_style" style={{ fontSize: "1.2em" }}>
              The City College of New York New York
            </strong>
            <br />
            Bachelor of Science in Computer Science
            <span
              style={{
                display: "inline-block",
                float: "right",
                marginRight: "10px",
              }}
            >
              Sep 2018 – Jun 2022
            </span>
            <br />
            <span className="Text">
              Relevant Coursework: Data Structure, Probability and Statistics,
              Algorithms, Software Design and Development, Software Engineering,
              Database System, Database Management
            </span>
          </p>
        </div>
        <div className="Experience">
          <h1 className="h1_style">Experience</h1>
          <p className="TextInfo">
            <strong className="h1_style" style={{ fontSize: "1.2em" }}>
              RadPoker
            </strong>
            <br />
            Full-Stack Developer
            <span
              style={{
                display: "inline-block",
                float: "right",
                marginRight: "10px",
              }}
            >
              Jan 2024 – Present
            </span>
            <ul>
              <li>
                <span>
                  Collaborated closely with a small cross-functional team to
                  enhance user experience and platform functionality.
                </span>
              </li>
              <li>
                <span>
                  Modified existing software to correct errors, upgrade
                  interfaces, and improve performance.
                </span>
              </li>
              <li>
                <span>
                  Implemented robust unit testing practices using Jest, ensuring
                  the reliability and stability of the application.
                </span>
              </li>
              <li>
                <span>
                  Actively participated in Agile development methodologies to
                  ensure timely delivery of project milestones.
                </span>
              </li>
            </ul>
            <strong className="h1_style" style={{ fontSize: "1.2em" }}>
              Volunteer at Pleasant Plains Fire Department New Jersey
            </strong>
            <br />
            Firefighter
            <span
              style={{
                display: "inline-block",
                float: "right",
                marginRight: "10px",
              }}
            >
              Oct 2019 – Aug 2021
            </span>
            <ul>
              <li>
                Responded to emergency calls, including fires, accidents, and
                medical incidents.
              </li>
              <li>
                Executed fire suppression, search and rescue operations, and
                first aid.
              </li>
            </ul>
            <strong className="h1_style" style={{ fontSize: "1.2em" }}>
              Assemblywoman Diana C. Richardson New York
            </strong>
            <br />
            Office Worker
            <span
              style={{
                display: "inline-block",
                float: "right",
                marginRight: "10px",
              }}
            >
              Jun 2017 – Aug 2017
            </span>
            <br />
            <ul>
              <li>
                <span>
                  Communicated with staff and constituents in person, over phone
                  and email
                </span>
              </li>
              <li>
                <span>
                  Collected and prepared data / Created and filed documents and
                  forms
                </span>
              </li>
            </ul>
          </p>
        </div>
        <div className="AdditionalSkills">
          <p className="h1_style">Additional Skills</p>
          <p className="TextInfo">
            Technical Skills: Python, JavaScript, HTML/CSS, Node.js, React.js,
            Vue.js, Next.js, Redis, jQuery, Express.js, MongoDB, MySQL,
            PostgreSQL, WebSocket, Git
            <br />
            Soft Skills: Communication, Time management, Problem-solving,
            Multitasking, Critical Thinking, Attention to details, Adaptability
            and Self-Learning, Collaboration and Teamwork
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
