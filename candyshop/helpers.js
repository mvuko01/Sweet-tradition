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

export function handleAddToShoppingCart(product, setInShoppingCart) {
    let inShoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = inShoppingCart.findIndex(p => p.id === product.id);
    if (index === -1) {
        inShoppingCart.push({...product, quantity: 1});
    } else {
        inShoppingCart[index].quantity += 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(inShoppingCart));
    setInShoppingCart(inShoppingCart);
}