import resume from "./files/resume.pdf"

const Resume = () => {
    return (
        <div className="gradient-bg-resume hover:bg-indigo-500 duration-300" id="resume">
            <div className="font-display text-left font-bold text-xiketic md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer">
                <a href="resume"></a>
                <a href={resume} download="Maximilian_Perez-Mas_Resume">Resumé</a>
            </div>
            
        </div>
    );
}

export default Resume;