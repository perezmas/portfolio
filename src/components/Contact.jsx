import { useState } from "react";
import Loader from "./Loader";

/*
const [formData, setFormData] = useState({first_name:'', last_name:'', email:'',comments:''});

const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
}*/

const Input = ({ placeholder, name, type, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Contact = () => {

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        console.log(formData);
        // prevent page from reloading upon form submit
        e.preventDefault();

        if (!first_name || !last_name || !email || !comments) return;

        sendContact();
    }
/*
    const sendContact = () => {
        try {
            const {first_name, last_name, email, message} = formData;
            
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        console.log(formData);
        // prevent page from reloading upon form submit
        e.preventDefault();

        if (!first_name || !last_name || !email || !comments) return;

        sendContact();
    }*/

    return (
        <div>
            <div className="gradient-bg-contact text-left text-xiketic justify-center" id="contact">
            <div>
                <a href="#contact" className="py-1 text-center font-bold md:text-6xl xl:text-7xl text-5xl text-t-primary p-4 tracking-wider cursor-pointer w-1/3">Contact Me</a>
            </div>
                <div className="text-center justify-center p-5 sm:w-96 flex flex-col items-center pink-glassmorphism w-full mx-auto">
                    <Input placeholder={"Enter Your First Name"} name="firstName" type="text" handleChange={() => {}}/>
                    <Input placeholder={"Enter Your Last Name"} name="lastName" type="text" handleChange={() => {}}/>
                    <Input placeholder={"Enter Your Email Address"} name="email" type="text" handleChange={() => {}}/>
                    <Input placeholder={"Enter A Message"} name="message" type="text" handleChange={() => {}}/>

                    <div className="h-[1px] w-full bg-gray-400 my-2 "/>
                    
                    {false ? (
                      <Loader />  
                    ) : (
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">Send Now</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;