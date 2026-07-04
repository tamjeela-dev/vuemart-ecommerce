<template>
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <input  type="text"
                class="form-control mb-4"
                placeholder="🔍 Search products..."
                v-model="searchName"
                >
        </div>
    </div>
    <div class="row g-4">
        <div class="col-md-4 col-sm-12" v-for="product in filterProducts" :key="product.id">
            <div class="card h-100">
                <div class="card-body">
                    <img :src="product.thumbnail" alt="" class="product-image">
                    <h5>{{ product.title }}</h5>
                    <p>{{ product.description.substring(0, 50) }}</p>
                    <p>⭐ {{product.rating }}</p>
                    <p class="price">Rs. {{product.price }}</p>
                    <router-link class="btn btn-primary" :to="`/products/${product.id}`">View Details →</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { getProducts } from "@/services/productService";

export default {
    name: 'Products',
    data() {
        return {
            products: [],
            searchName: '',
        }
    },
    computed :{
         filterProducts(){
             return this.products.filter((product) =>
              product.title.toLowerCase().includes(this.searchName.toLowerCase()) 
         ); 
         } 
    },
   async mounted() {
        const result = await getProducts();
        console.log(result.data.products);
        this.products = result.data.products.slice(0, 12)
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
   width: 100%; 
   height: 200px; 
   object-fit: cover;
}
.price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #198754;
}
</style>