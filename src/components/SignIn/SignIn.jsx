import { Link, useNavigate } from 'react-router-dom';
import bannerMiddleLogo from '../../assets/signup/frame.png'
import bgImg from '../../assets/signup/signup.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialIcon from '../Shared/SocialIcon/SocialIcon';

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        const checked = form.checked.checked;
        const user = { email, password, checked }
        console.log(user)

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error =>
                console.log(error)
            )
    }
    return (
        <div className='md:flex gap-28 max-w-[1200px] mx-auto' >
            <div className='md:w-1/2 md:flex items-center justify-center'>
                <form onSubmit={handleSignIn} className="bg-[#F5F5F5] px-6 py-12 space-y-6 w-full">
                    <div>
                        <h6 className='font-bold text-2xl'>Welcome Back!</h6>
                        <p className='text-[#707070] font-medium'>Enter your Credentials to access your account</p>
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Email address*" className="input rounded-md py-7 input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="password" name='password' placeholder="Password*" className="input rounded-md py-7 input-bordered" required />
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" name="checked" id="" />
                        <p className='font-medium'>I agree to the Terms & Policy</p>
                    </div>
                    <div>
                        <button className="w-full py-4 rounded-md font-semibold bg-[#000000] text-white">Sign In</button>
                    </div>
                    <div className="divider">or </div>
                    <SocialIcon></SocialIcon>
                    <div>
                        <p className='font-medium text-center'>Are you new? <Link className='text-blue-600' to='/signup'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
            <div className='md:w-1/2 h-screen flex items-center text-center text-white bg-cover bg-center p-24' style={{ backgroundImage: `url(${bgImg})` }}>
                <div>
                    <img className='mx-auto' src={bannerMiddleLogo} alt="" />
                    <p className='text-[#C8C4C4] font-medium'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;