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
  
  export const data = createWritableLocalStorageStore('data',{counter:0,info:"Brest"});

  
  