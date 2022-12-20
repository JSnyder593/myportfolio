import { RiCopyrightFill } from 'react-icons/ri'

function Footer() {
    return (
        <div className='Footer text-green-900 bg-amber-100 h-5% grid place-items-center border-2 border-black'>
            <h1 className='flex items-center justify-center'><RiCopyrightFill /> Winfield Design</h1>
            <div>
                {/* <a href="https://github.com/jsnyder593" target="_blank" className='mx-10'>
                    <i className='fa fa-github text-3xl text-green-900'></i>
                </a>
                <a href="https://www.linkedin.com/in/jaeger-snyder-13895bb9/" target="_blank" className='mx-10'>
                <i className='fa fa-github text-3xl text-green-900'></i>
                </a> */}
            </div>
        </div>

    )
};

export default Footer;