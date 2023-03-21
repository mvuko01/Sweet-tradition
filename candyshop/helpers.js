export const safeLocalStorage = {
    getItem: (key) => typeof window !== 'undefined' && localStorage.getItem(key),
    setItem: (key, value) =>
        typeof window !== 'undefined' && localStorage.setItem(key, value),
    removeItem: (key) =>
        typeof window !== 'undefined' && localStorage.removeItem(key),
};

export function limitWords(text) {
    const limit = 25;
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

export function handleAddToFavourites(product, setFavs) {
        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const index = favourites.findIndex(p => p.id === product.id);
        if (index === -1) {
            favourites.push(product);
            const currentIndex = favourites.findIndex(p => p.id === product.id);
            favourites[currentIndex].isFavourite = true;
        } else {
            favourites.splice(index, 1);
        }
        localStorage.setItem('favourites', JSON.stringify(favourites));
        setFavs(favourites);
}

export function checkIfFavourite(product, favs) {
  const index = favs.findIndex(p => p.id === product.id);
      if (index === -1) {
          return false;
      } else {
          return favs[index].isFavourite;
      }
};

export function handleAddToShoppingCart(product, setInShoppingCart, individualProductPageQuantity) {
    let inShoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    if(!individualProductPageQuantity) {
        const index = inShoppingCart.findIndex(p => p.id === product.id);
        if (index === -1) {
            inShoppingCart.push({...product, cart_quantity: 1});
        } else {
            inShoppingCart[index].cart_quantity += 1;
        }
        localStorage.setItem('shoppingCart', JSON.stringify(inShoppingCart));
        setInShoppingCart(inShoppingCart);
    } else {
        const index = inShoppingCart.findIndex(p => p.id === product.id);
        if (index === -1) {
            inShoppingCart.push({...product, cart_quantity: individualProductPageQuantity});
        } else {
            inShoppingCart[index].cart_quantity += individualProductPageQuantity;
        }
        localStorage.setItem('shoppingCart', JSON.stringify(inShoppingCart));
        setInShoppingCart(inShoppingCart);
    }
}