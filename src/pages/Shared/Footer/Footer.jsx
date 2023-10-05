import logo from '../../../assets/logo.png';
import { FaPhoneAlt, FaRegEnvelope, FaRocket } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer py-6 px-20 bg-base-200 text-base-content">
            <div>
                <div>
                    <img style={{width: '70px'}} src={logo} alt="" />
                    <h2 className='text-2xl font-semibold mt-2'>SoulMedic</h2>
                </div>
            </div>
            <div>
                <span className="footer-title">Health Solutions</span>
                <a className="link link-hover text-slate-500">Alzheimer Disease</a>
                <a className="link link-hover text-slate-500">Diabetes Help Center </a>
                <a className="link link-hover text-slate-500">Learn About Triglycerides</a>
                <a className="link link-hover text-slate-500">Vaccine Questions?</a>
                <a className="link link-hover text-slate-500">ED Tablet</a>
                <a className="link link-hover text-slate-500">Rheumatoid Arthritis</a>
            </div>
            <div>
                <span className="footer-title">Contact Info</span>
                <div className='flex gap-2'>
                    <FaRocket/>
                    <p><span className='text-slate-500'>No: 58 A, East Madison St<br /> Baltimore, MD, USA</span></p>
                </div>
                <div className='flex gap-2 mt-4'>
                    <FaPhoneAlt/>
                    <p><span className='text-slate-500'>Phone: +1200 258 2145</span></p>
                </div>
                <div className='flex gap-2 mt-4'>
                    <FaRegEnvelope/>
                    <p><span className='text-slate-500'>Email: soul@medic.com</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;