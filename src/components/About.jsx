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
            <div className="gradient-bg-about h-15">
                <br />
            </div>
            <div>
                <div>
                    <a href="#about" className="hover:text-[#fec70c] py-1 text-center font-bold md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer">About</a>
                </div>
                <div className="text-left ">
                    <h1 className="quote flex justify-center">
                        I'm Max, a creator and a problem solver. <br />
                    </h1>
                    <p className="description flex justify-center">
                        Ever since I taught my self how to solve the Rubik's cube, I have been fascinated with new challenges and how to solve them. Find me spending hours at a time, working on a new challenge in order to find innovative and creative solutions. <br /><br />
                        I enjoy creating new things and putting them out into the digital world. Current side projects include a blog about personal development as well as music production, using Logic Pro X.
                    </p>
                </div>
                {/* <div className="flex flex-col ">
                    <AboutCard icon={<FaUniversity size={70}/>} title="University of Delaware" subtitle="Information Systems B.S."/>
                    <AboutCard icon={<BsBank size={70} />} title="WSFS Bank" subtitle="App & Data Services Intern"/>
                    <AboutCard icon={<MdPhotoCamera size={70} />} title="Freelance Photography" subtitle="As a hobby!"/>
                    <AboutCard icon={<BsFileMusicFill size={70} />} title="Indie Music Production" subtitle="Another hobby!"/>
                </div> */}
            </div>
            <div className="gradient-bg-about-me h-15">
                <br />
            </div>
        </div>
    );
}

export default About;