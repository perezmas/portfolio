
const ProjectCard = ({name, description, stack, demo, code, image}) => {
    return (
        <div className="md:max-w-sm md:h-[650px] lg:h-[550px]  lg:max-w-md max-w-md hover:shadow-xl rounded shadow-lg border-2 border-t-primary mb-2 bg-secondary-bg md:relative lg:col-start-div2 lg:col-end-div2 lg:row-start-div2 lg:row-end-div2 font-body">
            <div className="p-2 relative">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="group transform hover:-translate-y-1 duration-300">
                    <div className="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                        <div className="box-sizing:border-box;display:block;max-width:100%">
                            {/*<img src={image} alt="Prim-U" decoding="async" data-nimg="intrinsic" className="rounded-xl cursor-pointer  transform duration-300 group-hover:scale-110"/>
                            */}
                        </div>
                    </div> 
                </a>
            </div>
            <div className="px-6 py-4">
                <p className="text-cultured font-semibold tracking-wider font-display text-xl mb-2">{name}</p>
                <div>
                    <p className="text-cultured text-t-primary text-base font-body">
                        {description}
                    </p>
                </div>
            </div>
            <div className="px-6 pt-2 pb-2 text-cultured">
                <p className="text-lg pb-3 font-display font-light">Stack</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{stack}
                </span>
            </div>
            <div className="flex items-center justify-between px-7 py-2   md:w-full ">
                <div className="flex w-4/5 justify-between">
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md ">Live Demo</a>
                    <a href={code} target="_blank" rel="noopener noreferrer" className="border-2 bg-purple-200 dark:bg-d-accent dark:text-d-secondary w-max px-4 py-1 h-max rounded-md ">Code</a>
                </div>{/*
                <div className="cursor-pointer font-bold hover:text-[#eee555] flex">
                    <a href="/projects/pim-u" className="text-cultured flex items-center ml-2 pl-2">Read More</a>
                </div>
    */}
            </div>
        </div>
    )
}
const Projects = () => {
    return (
        <div className="gradient-bg-projects">
            <div>
                <div className="text-left text-cultured md:text-6xl xl:text-7xl text-5xl text-t-primary p-4  font-display tracking-wider cursor-pointer font-bold" id="projects">
                    <a href="#projects">Projects</a>
                </div>
                <div className="flex flex-col items-center  md:justify-center w-full md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-test lg:grid-row-t lg:justify-center md:gap-x-2 gap-y-2  lg:gap-x-4 lg:gap-y-3 p-1 py-7">
                    <ProjectCard name="Scheduler" description="This is my final project for my Software Engineering course at the University of Delaware." stack="TypeScript" demo="https://ud-cisc275-f21.github.io/ud-cis-scheduler-team-6/#/" code="https://github.com/UD-CISC275-F21/ud-cis-scheduler-team-6/projects/1"/>
                    <ProjectCard name="Ethereum" description="This is a Web 3.0 app that I built using a tutorial." stack="TypeScript" demo="https://perezmas.github.io/ethereum/"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;