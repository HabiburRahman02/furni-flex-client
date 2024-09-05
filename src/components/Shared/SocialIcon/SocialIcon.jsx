import { Link } from "react-router-dom";
import googleImg from '../../../assets/icons/google.png'
import appleImg from '../../../assets/icons/apple.png'

const SocialIcon = () => {
    return (
        <div className="flex gap-6 justify-between">
            <Link className="flex items-center gap-2 font-semibold border-2 rounded-md p-4 w-full">
                <img src={googleImg} alt="" />
                <p>Sign in with Google</p>
            </Link>
            <Link className="flex items-center gap-2 font-semibold border-2 rounded-md p-4 w-full">
                <img src={appleImg} alt="" />
                <p>Sign in with Google</p>
            </Link>
        </div>
    );
};

export default SocialIcon;