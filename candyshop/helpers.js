export const safeLocalStorage = {
    getItem: (key) => typeof window !== 'undefined' && localStorage.getItem(key),
    setItem: (key, value) =>
        typeof window !== 'undefined' && localStorage.setItem(key, value),
    removeItem: (key) =>
        typeof window !== 'undefined' && localStorage.removeItem(key),
};

export function limitWords(text) {
    const limit = 30;
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

export function handleAddToFavourites(product) {
        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const index = favourites.findIndex(p => p.frontmatter.id === product.frontmatter.id);
        if (index === -1) {
            favourites.push(product);
            const currentIndex = favourites.findIndex(p => p.frontmatter.id === product.frontmatter.id);
            favourites[currentIndex].isFavourite = true;
        } else {
            favourites.splice(index, 1);
        }
        localStorage.setItem('favourites', JSON.stringify(favourites));
}

export function checkIfFavourite(product, favs) {
  const index = favs.findIndex(p => p.frontmatter.id === product.frontmatter.id);
      if (index === -1) {
          return false;
      } else {
          return favs[index].isFavourite;
      }
};
