const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <a href="#resume" className="text-cultured text-base text-center mx-2 cursor-pointer">Resume</a>
                    <a href="#projects" className="text-cultured text-base text-center mx-2 cursor-pointer">Projects</a>
                    <a href="#about" className="text-cultured text-base text-center mx-2 cursor-pointer">About</a>
                    <a href="#contact" className="text-cultured text-base text-center mx-2 cursor-pointer">Contact</a>
                </div>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-cultured mt-5" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-cultured text-sm text-center">Maximilian Perez-Mas</p>
                <p className="text-cultured text-sm text-center">All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;