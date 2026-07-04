<template>
    <div class="container">
        <div v-if="cartItems.length === 0" class="text-center mt-5">
            <p class="alert alert-warning">Your cart is empty</p>
            <router-link to="/products" class="btn btn-primary">Contnue shopping</router-link>
        </div>
        <div v-else class="card">
            <div v-for="item in cartItems" :key="item.id">
                <div class="row py-4">
                    <div class="col-4">
                        <img :src="item.thumbnail" alt="" class="product-image">
                    </div>
                    <div class="col-8">
                        <h3>{{ item.title }}</h3>
                        <p class="price"> Rs.{{ item.price }}</p>
                        <div class="qty ">
                            <button @click="decrease(item)" class="btn btn-danger">-</button>
                            <span>{{ item.quantity }}</span>
                            <button @click="increase(item)" class="btn btn-danger">+</button>
                            <p>
                                <strong>Total:</strong>
                                Rs. {{ item.price * item.quantity }}
                            </p>
                            <button @click="removeItem(item.id)" class="btn btn-danger">🗑 Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 summary">
                <h5>Order Summary</h5>
                <p> <strong>Items:</strong>{{ totalItems }}</p>
                <p> <strong>subTotal:</strong> {{ subTotal }}</p>
                <p> <strong>Shiping:</strong>Free</p>
                <router-link class="btn btn-secondary mb-2" to="/checkout">Proceed to Checkout →</router-link>
                <p> <strong>Total:</strong> {{ subTotal }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
export default {
    name: 'Cart',
    data() {
        return {
            cartStore: useCartStore()
        }
    },
    computed: {
        cartItems() {
            return this.cartStore.cartItems;
        },
        subTotal() {
            return this.cartStore.subTotal
        },
        totalItems() {
            return this.cartStore.totalItems
        }
    },
    async mounted() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cartStore.cartItems = JSON.parse(savedCart);
        }
    },
    methods: {
        increase(item) {
            this.cartStore.increase(item);
        },
        decrease(item) {
            this.cartStore.decrease(item);
        },
        removeItem(id) {
            this.cartStore.removeItem(id);
        },
    }

}
</script>
<style scoped>
.card {
    transition: 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #198754;
}
.summary {
    margin-left:20px;
}
.qty span{
    margin:0 12px;
    font-weight:bold;
}
</style>