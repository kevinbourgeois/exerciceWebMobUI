import JsonStorage from './lib/jsonStorage'; // ou autre chemin que vous aurez choisi

const favoriteStorage = new JsonStorage({ name: 'favorites'});

const addToFavorites  = (song) => {
    favoriteStorage.addItem(song)
}

export {addToFavorites}