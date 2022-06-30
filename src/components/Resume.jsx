import resume from "./files/resume.pdf"

const Resume = () => {
    return (
        <div className="gradient-bg-resume" id="resume">
            <div className="font-display text-left font-bold text-xiketic md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer">
                <a href="#resume" download="resume">Resume</a>
            </div>
            
        </div>
    );
}

export default Resume;