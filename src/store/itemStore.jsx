import { create } from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const itemStore = (set) => ({
    items: [],
    cart: [],
    fetchItems: async () => {
        const res = await fetch('/items.json');
        const data = await res.json();
        set({
            items: data
        });
    },
    addToCart: (item) => {
        set((state) => {
            if (state.cart.find((i) => i.id === item.id)) {
                return state;
            }
            return { cart: [...state.cart, item] };
        })
    },
    removeFromCart: (item) => {
        set((state) => ({
            cart: state.cart.filter((i) => i.id !== item.id),
        }))
    }
})

const useItemStore = create(devtools(persist(
    itemStore, {
    name: 'ItemData',
    storage: createJSONStorage(() => sessionStorage)
}
)));

export default useItemStore;
