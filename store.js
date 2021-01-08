import { writable } from 'svelte/store';


const createWritableLocalStorageStore = (key, startValue) => {
    const { subscribe, set, update } = writable(startValue);
    
      return {
      subscribe,
      update,
      set,
      useLocalStorage: () => {
        const json = localStorage.getItem(key);
        if (json) {
          var parsed = JSON.parse(json);
          set(parsed);
        }
        
        subscribe(current => {
          localStorage.setItem(key, JSON.stringify(current));
        });
      }
    };
  }
  
  export const recipes = createWritableLocalStorageStore('data',JSON.parse('[]'));

  export const count = writable(586);
  