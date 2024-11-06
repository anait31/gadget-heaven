import { Helmet } from "react-helmet";

const Statistic = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Statistic - Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] py-8 text-white px-4 md:px8 rounded-lg'>
                <div className='space-y-3'>
                    <h2 className=' text-xl md:text-3xl font-bold text-center'>Welcome to GH Store Statistic</h2>
                    <p className='text-center'>We are committed to continuous growth and delivering an outstanding shopping experience to our loyal customers.</p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;