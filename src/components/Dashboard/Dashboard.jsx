import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../../utilities/utilities";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Dashboard = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    // cosnt [selectedWishlist, setSelectedWishlist] = useState([]);
    const [isActive, setIsActive] = useState({
        status: true
    });

    const handleCartButoon = (status) => {
        if (status === 'cart') {
            setIsActive({
                status: true
            })
            console.log('Cart')
        }
        else {
            setIsActive({
                status: false
            })
        }
    }

    const handleWishlist = (status) => {
        if (status === 'wishlist') {
            setIsActive({
                status: false
            })
        }
    }




    const products = useLoaderData();

    useEffect(() => {
        const productsId = getLocalStorageData();
        const selectedProduct = products.filter(product => productsId.includes(product.product_id))
        setSelectedProducts(selectedProduct)
    }, [])


    return (
        <div>
            <div className="bg-[#9538E2] text-white text-center py-6 space-y-3 rounded-xl">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-2">
                    <button onClick={() => handleCartButoon('cart')} className={`${isActive.status ? 'bg-white text-black' : ''} px-6 border-white py-3 rounded-md mr-4`}>Cart</button>
                    <button onClick={() => handleWishlist('wishlist')} className={`${isActive.status ? '' : 'bg-white text-black'} px-6 py-3 rounded-md mr-4`}>Wishlist</button>
                </div>
            </div>
            {
                isActive.status ?
                    <div>
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-bold">Cart</h2>
                            <div className="flex space-x-6 items-center">
                                <h2 className="text-xl font-bold">Total Cost:</h2>
                                <button className="border-2 px-4 py-[6px] rounded-lg border-[#9538E2]">Sort by Price:</button>
                                <button className="bg-[#9538E2] px-4 py-2 rounded-lg text-white">Purchase</button>
                            </div>
                        </div>
                        <div className="">
                            {
                                selectedProducts.map((product, idx) => <Cart key={idx} product={product}></Cart>)
                            }
                        </div>
                    </div> :
                    <div className="py-6">
                        <h2 className="text-xl font-bold">Wishlist</h2>
                    </div>
            }
        </div>
    );
};

export default Dashboard;