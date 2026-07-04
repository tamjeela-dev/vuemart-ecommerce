<template>
    <div class="container">
        <p class="alert alert-danger" v-if="error">{{ error }}</p>
        <div class="card h-100">
            <div class="card-body">
                    <div class="row">
                    <div class="col-4">
                        <img :src="product.thumbnail" alt="" class="product-image">
                    </div>
                    <div class="col-8">
                        <h3>{{ product.title }}</h3>
                        <p><strong>Brand:</strong> {{ product.brand }}</p>
                        <p><strong>Category:</strong> {{ product.category }}</p>
                        <p><strong>Stock:</strong> {{ product.stock }}</p>
                        <p>⭐ {{ product.rating }}</p>
                        <p>{{ product.description }}</p>
                        <p class="price"> Rs.{{ product.price }}</p>
                        <button class="btn btn-primary" @click="addToCart()">
                            Add to Cart
                        </button> <router-link to="/products" class="btn btn-primary">Back to Products</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { getProductById } from '@/services/productService';
import { useCartStore } from "@/stores/cartStore";

export default {
    name: 'ProductDetail',
    data() {
        return {
            product: {},
            error: '',
            quantity: 0,
        }
    },
    async mounted() {
        try {
            const id = Number(this.$route.params.id);
            const result = await getProductById(id)
            this.product = result.data;
        } catch (error) {
            this.error = 'Failed to get Product'
        }
    },
    methods: {
        addToCart() {
            const cartStore = useCartStore();
            cartStore.addToCart(this.product);
            this.$router.push('/cart');
        }
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
    width: 350px;
    height: 350px;
    object-fit: cover;
}

.price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #198754;
}
</style>