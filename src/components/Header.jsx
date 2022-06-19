import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
    return (
        
        <div className="py-0 justify-center text-center bg-blue3" id="header">
            <div className="flex diagonal-box-2">
                    <a id="square" className="text-left justify-left "></a>
                <div className="flex w-1/5">
                    <a id="square2" className="text-left text-black"></a>
                    <a id="square3" className="text-left justify-left text-white"></a>
                </div>
                <div className="boxbox w-4/5">
                    <br />
                    <br />
                    <h1 className="font-bold animate-bounce w-6 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-cultured font-sans">Maximilian Perez Mas</h1>
                </div>
            </div>
            <div>
                <a href="http://github.com/perezmas" target="_blank" rel="noopener noreferrer" className="flex text-right justify-end pr-1 pb-1 text-cultured">
                    <FaGithubSquare size={50} className="text-white hover:text-[#fec70c]"/>
                </a>
            </div>
            <div className="text-white bg-blue3 grid grid-cols-4">
                <div></div>
                <div></div>
                <div></div>
                <a href="https://www.linkedin.com/in/maximilian-perez-mas/" target="_blank" rel="noopener noreferrer" className="flex text-right justify-end py-1 pr-2 pb-2 text-cultured">
                    <BsLinkedin size={42} className="hover:text-[#fec70c]"/>
                </a>
            </div>
        </div>
    );
}

export default Header;