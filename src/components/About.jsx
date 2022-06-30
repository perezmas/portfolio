import {FaItalic, FaUniversity} from 'react-icons/fa';
import {BsBank, BsFileMusicFill} from 'react-icons/bs';
import {MdPhotoCamera} from 'react-icons/md';

const About = () => {
    return (
        <div className="gradient-bg-about text-left" id="about">
            <div>
                <a href="#about" className="py-1 text-center font-bold md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer">About</a>
            </div>
            <div className="flex flex flex-col items-center  md:justify-center w-full md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-test lg:grid-row-t lg:justify-center md:gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-3 py-5">
                {/*<div>
                    <img src="" alt="about_me" decoding="async" data-nimg="intrinsic" className="pr-3 rounded-2xl filter drop-shadow-lg " />
                </div>*/}
                <div className="flex">
                    <div className="">
                        <FaUniversity size={70}/>
                    </div>
                    <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                        <h1 className="font-semibold px-2">University of Delaware</h1>
                        <h1 className="px-2">Information Systems B.S.</h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <BsBank size={70} />
                    </div>
                    <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                        <h1 className="font-semibold px-2">WSFS Bank</h1>
                        <h1 className="px-2">App & Data Services Intern</h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <MdPhotoCamera size={70} />
                    </div>
                    <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                        <h1 className="font-semibold px-2">Freelance Photography</h1>
                        <h1 className="px-2">As a hobby!</h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <BsFileMusicFill size={70} />
                    </div>
                    <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                        <h1 className="font-semibold px-2">Indie Music Production</h1>
                        <h1 className="px-2">Another hobby!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;