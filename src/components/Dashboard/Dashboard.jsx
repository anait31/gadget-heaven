import { useLoaderData } from "react-router-dom";
import { getLocalStorageData, getWishlistLocalStorageData } from "../../utilities/utilities";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { Helmet } from "react-helmet";
import { BsBagCheckFill } from "react-icons/bs";

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

    const handleModalCloseeButton = () => {
        setSelectedProducts([])
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Dashboard - Gadget heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] text-white text-center py-6 space-y-3 px-4 md:px-0 rounded-xl">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-2">
                    <button onClick={() => handleCartButoon('cart')} className={`${isActive.status ? 'bg-white text-black' : ''} px-6 border-white py-3 rounded-md mr-4`}>Cart</button>
                    <button onClick={() => handleWishlist('wishlist')} className={`${isActive.status ? '' : 'bg-white text-black'} px-6 py-3 rounded-md mr-4`}>Wishlist</button>

                </div>
                {/* <Modal></Modal> */}

            </div>
            {
                isActive.status ?
                    <div>
                        <div className="md:flex justify-between items-center py-6">
                            <h2 className="text-xl font-bold mb-2 md:mb-0">Cart</h2>
                            <div className="flex space-x-6 items-center">
                                <h2 className="md:text-xl font-bold">Total: {totalCost}$</h2>
                                <button onClick={handleSortByPrice} className="border-2 px-4 py-[6px] rounded-lg border-[#9538E2]">Sort by Price:</button>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className={`bg-[#9538E2] px-4 py-2 rounded-lg text-white ${selectedProducts ? '' : 'm-6'}`}>Purchase</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box text-center">
                                        <div className="flex mb-3 text-3xl text-success justify-center">
                                            <BsBagCheckFill></BsBagCheckFill>
                                        </div>
                                        <h3 className="font-bold text-2xl">Payment Successfully!</h3>
                                        <p className="py-4">Thanks for purchasing</p>
                                        <p className="">Total: {totalCost}$</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button onClick={handleModalCloseeButton} className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                        <div className="mx-4 md:mx-0">
                            {
                                selectedProducts.map((product, idx) => <Cart handleDeleteProduct={handleDeleteProduct} key={idx} product={product}></Cart>)
                            }
                        </div>
                    </div> :
                    <div className="py-6 mx-4 md:mx-0">
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