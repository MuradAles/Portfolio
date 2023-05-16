const AboutMe = () => {
    return (
        <>
            <div>
                <h1 className='Greeting'>About me</h1>
                <div className="rightSide">
                    <div className="Education">
                        <p className='Name'>Education</p>
                        <p className='TextInfo'>
                            <strong style={{ fontSize: '1.2em' }}>Stevens Institute of Technology New Jersey</strong>
                            <br />
                            Master of Science in Computer Science
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '20px' }}>August 2022 – Current</span>
                            <br />
                            <span style={{ marginLeft: '20px' }}>GPA: 3.7/4</span>
                            <br />
                            <strong style={{ fontSize: '1.2em' }}>The City College of New York New York</strong>
                            <br />
                            Bachelor of Science in Computer Science
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '20px' }}>September 2018 – June 2022</span>
                            <br />
                            <span style={{ marginLeft: '20px' }}>GPA: 3.1/4</span>
                        </p>
                    </div>
                    <div className="Experience">
                        <p className='Name'>Experience</p>
                        <p className='TextInfo'>
                            <strong style={{ fontSize: '1.2em' }}>Volunteer at Pleasant Plains Fire Department New Jersey</strong>
                            <br />
                            Firefighter
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '20px' }}>October 2019 – August 2021</span>
                            <br />
                            <span style={{ marginLeft: '20px' }}>Responded to emergencies and deployed equipment.</span>
                            <br />
                            <strong style={{ fontSize: '1.2em' }}>Assemblywoman Diana C. Richardson New York</strong>
                            <br />
                            Office Worker
                            <span style={{ display: 'inline-block', float: 'right', marginRight: '20px' }}>June 2017 – August 2017</span>
                            <br />
                            <span style={{ marginLeft: '20px' }}>Communicated with staff and constituents in person, over phone and email</span>
                            <br />
                            <span style={{ marginLeft: '20px' }}>Collected and prepared data / Created and filed documents and forms</span>
                        </p>
                    </div>
                    <div className="AdditionalSkills">
                        <p className='Name'>Additional Skills</p>
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
