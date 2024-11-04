import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { saveToLocalStorage, saveWishlistToLocalStorage } from "../../utilities/utilities";
import { useState } from "react";

const ProductDetails = () => {
    const { product_id } = useParams();
    const products = useLoaderData();
    const product = products.find(product => product.product_id === product_id);
    const { product_title, product_image, rating, price, description, specification } = product;
    


    const handleAddToCard = (id) => {
        saveToLocalStorage(id);
    }

    const handleAddToWishlist = (id) => {
        saveWishlistToLocalStorage(id)
    }
    console.log(productPrice, price)

    return (
        <div className="relative">
            <div className="bg-[#9538E2] pt-6 pb-32 rounded-2xl">
                <h2 className="text-center py-4 text-3xl font-bold text-white">Product Details</h2>
                <p className="text-center mb-14 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex justify-center items-center border-2 mt-[-150px] rounded-2xl mx-24 p-8 bg-white">
                <img className="h-96" src={product_image} alt="" />
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p><span className="font-bold">Price:</span> {price}$</p>
                    <p></p>
                    <p>{description}</p>
                    <h3 className="font-bold">Specification:</h3>
                    <ol>
                        {
                            specification.map((spec, idx) => <li key={idx} className="ml-3">{spec}</li>)
                        }
                    </ol>
                    <h3><span className="font-bold">Rating:</span> <MdOutlineStarPurple500 className="inline text-yellow-600"></MdOutlineStarPurple500> {rating}</h3>
                    <p></p>
                    <div className="flex space-x-2">
                        <button onClick={() => handleAddToCard(product_id)} className="bg-[#9538E2] text-white px-4 py-2 rounded-lg">Add To Card</button>
                        <button onClick={() => handleAddToWishlist(product_id)} className="text-2xl"><FaRegHeart></FaRegHeart></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;