import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="">
            <Helmet>
                <title>Home - Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="text-center py-4 text-3xl font-bold">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-12 max-w-7xl mx-auto">
                <div className="border-2 px-6 py-4 max-h-[450px] rounded-lg">
                    <Categories categories={categories}></Categories>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;