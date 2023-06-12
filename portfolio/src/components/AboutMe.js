const AboutMe = () => {
    return (
        <>
            <div className="MainContainer about">
                <div className="AboutInfo">
                    <h1 className='h2_style'>About me</h1>
                    <div className="Education">
                        <p className='h1_style'>Education</p>
                        <p className='TextInfo'>
                            <strong className="h1_style" style={{ fontSize: '1.2em' }}>Stevens Institute of Technology New Jersey</strong>
                            <br />
                            Master of Science in Computer Science
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '10px' }}>August 2022 – Current</span>
                            <br />
                            <span style={{ marginLeft: '10px' }}>GPA: 3.7/4</span>
                            <br />
                            <strong className="h1_style" style={{ fontSize: '1.2em' }}>The City College of New York New York</strong>
                            <br />
                            Bachelor of Science in Computer Science
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '10px' }}>September 2018 – June 2022</span>
                            <br />
                            <span style={{ marginLeft: '10px' }}>GPA: 3.1/4</span>
                        </p>
                    </div>
                    <div className="Experience">
                        <p className='h1_style'>Experience</p>
                        <p className='TextInfo'>
                            <strong className="h1_style" style={{ fontSize: '1.2em' }}>Volunteer at Pleasant Plains Fire Department New Jersey</strong>
                            <br />
                            Firefighter
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '10px' }}>October 2019 – August 2021</span>
                            <br />
                            <span style={{ marginLeft: '10px' }}>Responded to emergencies and deployed equipment.</span>
                            <br />
                            <strong className="h1_style" style={{ fontSize: '1.2em' }}>Assemblywoman Diana C. Richardson New York</strong>
                            <br />
                            Office Worker
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '10px' }}>June 2017 – August 2017</span>
                            <br />
                            <span style={{ marginLeft: '10px' }}>Communicated with staff and constituents in person, over phone and email</span>
                            <br />
                            <span style={{ marginLeft: '10px' }}>Collected and prepared data / Created and filed documents and forms</span>
                        </p>
                    </div>
                    <div className="AdditionalSkills">
                        <p className="h1_style">Additional Skills</p>
                        <p className='TextInfo'>
                            Technical Skills:
                            Python, JavaScript, HTML/CSS, Node.js, React.js, Redis, jQuery, Express.js, MongoDB, WebSocket, Git
                            <br />
                            Soft Skills:
                            Communication, Time management, Problem-solving, Multitasking, Critical Thinking, Attention to details, Adaptability and Self-Learning, Collaboration and Teamwork
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AboutMe;
