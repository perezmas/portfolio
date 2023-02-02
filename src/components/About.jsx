import {FaItalic, FaUniversity} from 'react-icons/fa';
import {BsBank, BsFileMusicFill} from 'react-icons/bs';
import {MdPhotoCamera} from 'react-icons/md';

const AboutCard = ({icon, title, subtitle}) => {
    return (
        <div className="flex-auto w-80 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 rounded-lg shadow-lg border-2 border-t-primary mb-2 bg-secondary-bg md:relative lg:col-start-div2 lg:col-end-div2 lg:row-start-div2 lg:row-end-div2 font-body bg-slate-500/25">
            <div className="pr-4">
                {icon}
            </div>
            <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                <h1 className="font-semibold px-2">{title}</h1>
                <h1 className="px-2">{subtitle}</h1>
            </div>
        </div>
    )
}
const About = () => {
    return (
        <div className="gradient-bg-about text-left" id="about">
            <div>
                <a href="#about" className="py-1 text-center font-bold md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer">About Me</a>
            </div>
            <div className="flex flex flex-col items-center md:justify-center w-full md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-test lg:grid-row-t lg:justify-center md:gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-3 py-5">
                {/* <div>
                    <img src="" alt="about_me" decoding="async" data-nimg="intrinsic" className="pr-3 rounded-2xl filter drop-shadow-lg " />
                </div>
                <div className="flex">
                    <div className="pr-4">
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
                    <div className="pr-4">
                        <MdPhotoCamera size={70} />
                    </div>
                    <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                        <h1 className="font-semibold px-2">Freelance Photography</h1>
                        <h1 className="px-2">As a hobby!</h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="pr-4">
                        <BsFileMusicFill size={70} />
                    </div>
                    <div className="text-xiketic text-center text-xl md:text-2xl tracking-wide pt-2">
                        <h1 className="font-semibold px-2">Indie Music Production</h1>
                        <h1 className="px-2">Another hobby!</h1>
                    </div>
                </div> */}
                <AboutCard icon={<FaUniversity size={70}/>} title="University of Delaware" subtitle="Information Systems B.S."/>
                <AboutCard icon={<BsBank size={70} />} title="WSFS Bank" subtitle="App & Data Services Intern"/>
                <AboutCard icon={<MdPhotoCamera size={70} />} title="Freelance Photography" subtitle="As a hobby!"/>
                <AboutCard icon={<BsFileMusicFill size={70} />} title="Indie Music Production" subtitle="Another hobby!"/>
            </div>
        </div>
    );
}

export default About;