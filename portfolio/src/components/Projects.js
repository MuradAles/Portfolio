const Projects = () => {
    return (
        <div className="MainContainer projects">
            <div className="ProjectInfo">
                <h1 className='h2_style'>Projects</h1>
                <div className="RunMate">
                    <p className='h1_style'>MyGymExercise</p>
                    <a className="Links" href="https://mygymroutine-2d445.web.app/">MyGymRoutine</a>
                    <p className='TextInfo'>MyGymRoutine is an innovative online platform that revolutionizes the way fitness enthusiasts create and manage their workout plans. Built using Node.js with Express and MongoDB, this project combines cutting-edge technology with intuitive design. With the help of React on the frontend, users can easily personalize and organize their gym routines according to their unique objectives and preferences. The platform also utilizes Firebase for seamless authorization, ensuring a secure and user-friendly experience. By offering a user-friendly interface, MyGymRoutine empowers individuals to take control of their fitness journey, effortlessly tracking their progress and achieving their desired milestones.</p>
                    <a className="Links" href="https://github.com/MuradAles/MyGymRoutine">Github Link</a>
                </div>
                <div>
                    <p className='h1_style'>RunMate</p>
                    <p className='TextInfo'>During my academic experience, I had the opportunity to develop a dynamic Chat application that utilized Socket and MongoDB technologies. This project involved designing and implementing a real-time messaging system, enabling users to engage in seamless and instantaneous communication. Furthermore, I played an integral role in creating a comprehensive friendslist feature, facilitating user connections and meaningful interactions within the platform.</p>
                    <a className="Links" href="https://github.com/peilinF/CS554FinalProject">Github Link</a>
                </div>
                <div>
                    <p className='h1_style'>LookUpDevice</p>
                    <p className='TextInfo'>In the project, my main responsibilities included curating and organizing product information from various sources, specifically focusing on devices and technologies. I ensured the accuracy and thoroughness of the collected data. Additionally, I developed a powerful sorting mechanism based on key features, enabling users to effortlessly explore and discover products tailored to their specific needs. This experience allowed me to enhance my skills in data collection, organization, and the implementation of sorting algorithms, all of which contributed to an improved user experience.</p>
                    <a className="Links" href="https://github.com/sagar776-dev/CS546-Final-Project">Github Link</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;