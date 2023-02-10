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
