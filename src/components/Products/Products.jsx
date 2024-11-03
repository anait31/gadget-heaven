import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
    const products = useLoaderData();
    const { category_id } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        if (category_id) {
            const filteredCategoryProduct = [...products].filter(product => product.category === category_id);
            setFilteredProducts(filteredCategoryProduct);
            console.log(category_id);
        }
        else {
            setFilteredProducts(products)
        }
    }, [products, category_id])
    return (
        <div className="grid md:grid-cols-3 md:gap-8">
            {
                filteredProducts.map((product, idx) => <Product key={idx} product={product}></Product>)
            }
        </div>
    );
};

export default Products;