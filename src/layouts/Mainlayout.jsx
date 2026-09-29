import { Outlet } from "react-router";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";

const Mainlayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Mainlayout;