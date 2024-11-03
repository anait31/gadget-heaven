import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="">
            <div className="flex gap-12">
                <div className="border-2 px-6 py-4 max-h-[450px] rounded-lg">
                    <Categories categories={categories}></Categories>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;