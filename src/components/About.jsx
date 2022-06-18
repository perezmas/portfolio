import {FaItalic, FaUniversity} from 'react-icons/fa';

const About = () => {
    return (
        <div className="gradient-bg-about flex flex-col md:flex-col text-left" id="about">
            <div>
                <a href="#about" className="py-1 text-center font-bold md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer w-1/3">About Me</a>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img src="" alt="about_me" decoding="async" data-nimg="intrinsic" className="pr-3 rounded-2xl filter drop-shadow-lg " />

                </div>
                <div className="w-3/5 flex grid grid-cols-2">
                    <div className="pl-5">
                        <FaUniversity size={70}/>
                    </div>
                    <div className="-pl-8 text-xiketic font-body text-left text-xl md:text-xl tracking-wide -mx-4">
                        <ul>
                            <li>University of Delaware</li>
                            <li></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;