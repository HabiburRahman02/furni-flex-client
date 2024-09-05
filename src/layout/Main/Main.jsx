import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const Main = () => {

    const location = useLocation();
    // console.log(location.pathname)
    const noHeaderFooter = location.pathname.includes('/signup') || location.pathname.includes('signin')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;