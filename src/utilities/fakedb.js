// use localstorage as your db fir now
const addToDb = id => {
    const exists = getDb();
    let shoping_cart = {};
    if (!exists) {
        shoping_cart[id] = 1;
    }
    else {
        shoping_cart = JSON.parse(exists);
        if (shoping_cart[id]) {
            const newCount = shoping_cart[id] + 1;
            shoping_cart[id] = newCount;
        }
        else {
            shoping_cart[id] = 1;
        }
    }
    updateDb(shoping_cart);
}

const getDb = () => localStorage.getItem('shoping_cart')
const updateDb = cart => {
    localStorage.setItem('shoping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shoping_cart = JSON.parse(exists);
        delete shoping_cart[id];
        updateDb(shoping_cart);
    }
}

export { addToDb, removeFromDb as deleteFromDb }