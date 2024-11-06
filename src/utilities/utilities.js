import { toast } from "react-toastify";

const getLocalStorageData = () => {
    const storedData = localStorage.getItem('products');
    if (storedData) {
        return JSON.parse(storedData);
    }
    else {
        return []
    }
}

const saveToLocalStorage = (id) => {
    const product = getLocalStorageData();
    if (product.includes(id)) {
        toast('Item Already Exist to Cart')
    }
    else {
        product.push(id);
        toast('Item Added Successfully to Cart!')
        const setToLocalStorage = JSON.stringify(product);
        localStorage.setItem('products', setToLocalStorage);
    }
}

const getWishlistLocalStorageData = () => {
    const storedWistlistData = localStorage.getItem('wishlist');
    if (storedWistlistData) {
        return JSON.parse(storedWistlistData);
    }
    else {
        return []
    }
}

const saveWishlistToLocalStorage = (id) => {
    const wilslistProduct = getWishlistLocalStorageData();
    if (wilslistProduct.includes(id)) {
        toast('Item already exist to Wishlist')
    }
    else {
        wilslistProduct.push(id);
        toast('Item Added Successfully to Wishlist!')
        const setToLocalStorage = JSON.stringify(wilslistProduct);
        localStorage.setItem('wishlist', setToLocalStorage);
    }
}


export { saveToLocalStorage, getLocalStorageData, getWishlistLocalStorageData, saveWishlistToLocalStorage }