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
        alert('Hi')
    }
    else {
        product.push(id);
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
        alert('Product already exist')
    }
    else {
        wilslistProduct.push(id);
        const setToLocalStorage = JSON.stringify(wilslistProduct);
        localStorage.setItem('wishlist', setToLocalStorage);
    }
}


export { saveToLocalStorage, getLocalStorageData, getWishlistLocalStorageData, saveWishlistToLocalStorage }