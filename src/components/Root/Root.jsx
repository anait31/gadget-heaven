import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-464px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;