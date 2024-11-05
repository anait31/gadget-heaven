import { useLoaderData } from "react-router-dom";
import { getLocalStorageData, getWishlistLocalStorageData } from "../../utilities/utilities";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedWishlist, setSelectedWishlist] = useState([]);
    const [isActive, setIsActive] = useState({
        status: true
    });

    const handleDeleteProduct = (product_id) => {
        const updatedProducts = selectedProducts.filter(product => product.product_id !== product_id);
        setSelectedProducts(updatedProducts);
    }

    const handleDeleteWishlistProduct = (product_id) => {
        const updatedWishlist = selectedWishlist.filter(wishlistProduct => wishlistProduct.product_id !== product_id);
        setSelectedWishlist(updatedWishlist);
    }

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
    const wishlistProducts = useLoaderData()

    useEffect(() => {
        const productsId = getLocalStorageData();
        const selectedProduct = products.filter(product => productsId.includes(product.product_id))
        setSelectedProducts(selectedProduct)
    }, [])

    useEffect(() => {
        const wishlistProductId = getWishlistLocalStorageData();
        const selectedWishlist = wishlistProducts.filter(product => wishlistProductId.includes(product.product_id))
        setSelectedWishlist(selectedWishlist);
    }, [wishlistProducts])

    const totalCost = selectedProducts.reduce((total, product) => total + product.price, 0);

    const handleSortByPrice = () => {
        const sortedProducts = [...selectedProducts].sort((a, b) => b.price - a.price);
        setSelectedProducts(sortedProducts);
    };

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
                                <h2 className="text-xl font-bold">Total Cost: {totalCost}$</h2>
                                <button onClick={handleSortByPrice} className="border-2 px-4 py-[6px] rounded-lg border-[#9538E2]">Sort by Price:</button>
                                <button className="bg-[#9538E2] px-4 py-2 rounded-lg text-white">Purchase</button>
                            </div>
                        </div>
                        <div className="">
                            {
                                selectedProducts.map((product, idx) => <Cart handleDeleteProduct={handleDeleteProduct} key={idx} product={product}></Cart>)
                            }
                        </div>
                    </div> :
                    <div className="py-6">
                        <h2 className="text-xl font-bold pb-6">Wishlist</h2>
                        <div>
                            {
                                selectedWishlist.map((wishlist, idx) => <Wishlist handleDeleteWishlistProduct={handleDeleteWishlistProduct} key={idx} wishlist={wishlist}></Wishlist>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Dashboard;