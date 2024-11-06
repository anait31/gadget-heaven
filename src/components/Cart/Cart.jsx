import { MdDelete } from "react-icons/md";
const Cart = ({ product, handleDeleteProduct }) => {
    const { product_id, product_title, product_image, category, price, description } = product;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between rounded-lg items-center border-2 mb-3 p-4">
                <div className="flex items-center gap-4">
                    <img className="w-24 object-cover" src={product_image} alt="" />
                    <div>
                        <h3 className=" text-xl md:text-2xl font-bold">{product_title}</h3>
                        <p>{description}</p>
                        <p><span className="font-bold">Price:</span> {price}$</p>
                    </div>
                </div>
                <div onClick={() => handleDeleteProduct(product_id)} className="text-2xl ">
                    <button>
                        <MdDelete></MdDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;