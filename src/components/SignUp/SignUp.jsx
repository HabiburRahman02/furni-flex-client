
import bgImg from '../../assets/signup/signup.png'
import bannerMiddleLogo from '../../assets/signup/frame.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const checked = form.checked.checked;
        const newUser = { firstName, lastName, email, password, checked };
        console.log(newUser);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User created successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='md:flex gap-28 max-w-[1200px] mx-auto' >
            <div className='md:w-1/2 md:flex items-center justify-center'>
                <form onSubmit={handleSignUp} className="bg-[#F5F5F5] p-6 space-y-6">
                    <div className='mx-auto text-center mb-4'>
                        <h6 className='font-bold text-2xl'>Welcome To</h6>
                        <h2 className='font-bold text-[40px]'>Furni<span className='text-blue-500'>Flex</span></h2>
                        <p className='text-[#707070] font-medium'>Signup for purchase your desire products</p>
                    </div>
                    <div className='md:flex space-y-6 md:space-y-0 gap-4'>
                        <div className="form-control">
                            <input type="text" name='firstName' placeholder="First name (optional)" className="input rounded-md py-7 input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='lastName' placeholder="Last name (optional)" className="input rounded-md py-7 input-bordered" />
                        </div>
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
                        <button className="w-full py-4 rounded-md font-semibold bg-[#000000] text-white">Sign Up</button>
                    </div>
                    <div className="divider">or </div>
                    <div>
                        <p className='font-medium text-center'>Have an account? <Link className='text-blue-600' to='/signin'>Sign In</Link></p>
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

export default SignUp;