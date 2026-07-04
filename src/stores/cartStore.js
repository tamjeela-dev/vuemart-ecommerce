import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cartItems: [],

    }),

    actions: {
        addToCart(product) {
            const existing = this.cartItems.find(item => item.id === product.id)
            if (existing) {
                existing.quantity++
            } else {
                this.cartItems.push({
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    price: product.price,
                    quantity: 1
                })
                this.saveCart();
            }

        },
        saveCart() {
            localStorage.setItem("cart", JSON.stringify(this.cartItems));
        },
        increase(item) {
            item.quantity++;
            this.saveCart();

        },

        decrease(item) {
            if (item.quantity > 1) {
                item.quantity--;
                this.saveCart();

            }
        },
        removeItem(id) {
            const updatedCart = this.cartItems.filter(item => item.id !== id);
            this.cartItems = updatedCart
            this.saveCart();
        }
    },
    getters: {
        subTotal() {
            return this.cartItems.reduce((total, item) => {
                return total + (item.price * item.quantity)
            }, 0)
        },
        totalItems() {
            return this.cartItems.reduce((total, item) => total + item.quantity, 0)
        },
    }
});