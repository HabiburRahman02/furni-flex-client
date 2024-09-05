
import footerLogo from '../../../assets/images/footerLogo.png'
import facebook from '../../../assets/icons/facebook-02.png'
import instagram from '../../../assets/icons/instagram.png'
import twitter from '../../../assets/icons/new-twitter.png'
import linkedin from '../../../assets/icons/linkedin-02.png'
import flag from '../../../assets/icons/🇺🇸.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-24 bg-[#0E0E0E] py-20 px-2 text-white'>
            <div className='max-w-[1200px] mx-auto'>
                <footer className=" pb-24 border-b-[#81859F] border-b-[1px] footer">
                    <aside>
                        <img src={footerLogo} alt="" />
                    </aside>
                    <nav>
                        <h6 className="text-lg font-semibold">About Us</h6>
                        <a className="link link-hover text-[#81859F] text-lg">Master Plan</a>
                        <a className="link link-hover text-[#81859F] text-lg">Jobs</a>
                        <a className="link link-hover text-[#81859F] text-lg">Invest</a>
                        <a className="link link-hover text-[#81859F] text-lg">Pressroom</a>
                        <a className="link link-hover text-[#81859F] text-lg">Blog</a>
                        <a className="link link-hover text-[#81859F] text-lg">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-semibold">Explore EEVE</h6>
                        <a className="link link-hover text-[#81859F] text-lg">Unlock my Robot Flower</a>
                        <a className="link link-hover text-[#81859F] text-lg">Starlight</a>
                        <a className="link link-hover text-[#81859F] text-lg">Robot Platform</a>
                        <a className="link link-hover text-[#81859F] text-lg">EEVE Roadmap</a>
                    </nav>
                    <nav>
                        <h6 className="text-lg font-semibold">Community & Support</h6>
                        <a className="link link-hover text-[#81859F] text-lg">Wilow X Community</a>
                        <a className="link link-hover text-[#81859F] text-lg">Developer & Maker Access</a>
                        <a className="link link-hover text-[#81859F] text-lg">Special Cases</a>
                    </nav>
                </footer>
                <div className='md:flex space-y-8 md:space-y-0 items-center justify-between py-12'>
                    <div className='flex space-x-3'>
                        <Link>
                            <img src={facebook} alt="" />
                        </Link>
                        <Link>
                            <img src={instagram} alt="" />
                        </Link>
                        <Link>
                            <img src={twitter} alt="" />
                        </Link>
                        <Link>
                            <img src={linkedin} alt="" />
                        </Link>
                    </div>
                    <div className='space-x-6'>
                        <a className="link link-hover text-[#81859F] text-lg">March24Recap</a>
                        <a className="link link-hover text-[#81859F] text-lg">Privacy Policy</a>
                        <a className="link link-hover text-[#81859F] text-lg">General Terms</a>
                        <a className="link link-hover text-[#81859F] text-lg">Contact</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={flag} alt="" />
                        <a className="link link-hover text-[#81859F] text-lg">United States(English)</a>
                    </div>
                </div>
                <div className='text-center'>
                    <a className="link link-hover text-[#81859F] text-xl"> EEVE © 2024. All rights reserved.</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;