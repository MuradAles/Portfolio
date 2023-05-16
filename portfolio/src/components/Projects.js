const Projects = () => {
    return (
        <>
            <div className="AcademicProject">
                <h1 className='Greeting'>Projects</h1>
                <div className="rightSide">
                    <div className="RunMate">
                        <p className='Name'>RunMate</p>
                        <a className="Links" href="https://runn-mate.web.app/">Run Mate Website</a>
                        <p className='TextInfo'>During my academic experience, I had the opportunity to develop a dynamic Chat application that utilized Socket and MongoDB technologies. This project involved designing and implementing a real-time messaging system, enabling users to engage in seamless and instantaneous communication. Furthermore, I played an integral role in creating a comprehensive friendslist feature, facilitating user connections and meaningful interactions within the platform.</p>
                        <a className="Links" href="https://github.com/peilinF/CS554FinalProject">Github Link</a>
                    </div>
                    <div className="LookUpDevice">
                        <p className='Name'>LookUpDevice</p>
                        <p className='TextInfo'>In the project, my main responsibilities included curating and organizing product information from various sources, specifically focusing on devices and technologies. I ensured the accuracy and thoroughness of the collected data. Additionally, I developed a powerful sorting mechanism based on key features, enabling users to effortlessly explore and discover products tailored to their specific needs. This experience allowed me to enhance my skills in data collection, organization, and the implementation of sorting algorithms, all of which contributed to an improved user experience.</p>
                        <a className="Links" href="https://github.com/sagar776-dev/CS546-Final-Project">Github Link</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;