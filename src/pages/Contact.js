import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

function Contact (){
    return(
        <div className="Contact backgroundImage flex flex-col items-center justify-center">
            <div className="bg-amber-50 border-2 border-black p-4 rounded-md min-w-[50%] mx-10 sm:text-sm md:text-md lg:text-lg flex flex-col min-h-[30%%]">
                <h1 className="p-5 object-contained">I'd love to hear from you! You can find me on</h1>
                
                <a href="https://www.github.com/JSnyder593" className="p-5 text-green-900 font-bold">Github (psssst! click here..)</a>
                
                <p className="p-5 object-contained">OR</p> 
                
                <a href="https://www.linkedin.com/in/jaeger-snyder-13895bb9/" className="p-5 object-contained text-green-900 font-bold">LinkedIn (and here too!)</a>
                
                <button className="bg-amber-600 p-2  border-2 border-amber-900 lg:m-10 md:m-6"><ButtonMailto label="Write me an E-Mail" mailto="mailto:jaeger_snyder@hotmail.com"/></button>
            </div>
            
        </div>
    )
}

export default Contact;