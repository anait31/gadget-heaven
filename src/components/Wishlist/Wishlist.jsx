import React from 'react';
import { MdDelete } from "react-icons/md";

const Wishlist = ({ wishlist, handleDeleteWishlistProduct }) => {
    const { product_id, product_title, product_image, price, description } = wishlist;
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="flex justify-between rounded-lg items-center border-2 mb-3 p-4">
                <div className="flex items-center gap-4">
                    <img className="w-24 object-cover" src={product_image} alt="" />
                    <div className='space-y-2'>
                        <h3 className="text-2xl font-bold">{product_title}</h3>
                        <p>{description}</p>
                        <p><span className="font-bold">Price:</span> {price}$</p>
                        <button className="bg-[#9538E2] text-white px-4 py-2 rounded-lg">Add To Card</button>
                    </div>
                </div>
                <div className="text-2xl ">
                    <button onClick={() => handleDeleteWishlistProduct(product_id)}>
                        <MdDelete></MdDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;