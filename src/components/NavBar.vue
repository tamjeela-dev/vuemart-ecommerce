<template>
    <div class="container NavBar">
        <div class="row d-flex justify-content-between align-items-center mt-1">
            <div class="col-lg-6 logo">
                🛍️ VueMart
            </div>
            <div class="col-lg-6 nav-links" >
                <router-link to="/">Home</router-link>

                <router-link to="/Products">Products</router-link>

                <router-link to="/Cart" class="cart-badge">🛒 Cart ({{ cartStore.totalItems }})</router-link>
            </div>
        </div>
    </div>
</template>


<script>

import { useCartStore } from "@/stores/cartStore";

export default {
    name: 'NavBar',
    data() {
        return {
            cartStore: useCartStore()

        }
    }
}
</script>

<style scoped>
.router-link-active {
    color: #4F46E5;
    font-weight: 600;
    transition: .3s;
}
.router-link-active:hover {
     color: #17135f;
}
a {
    text-decoration: none;
    margin-left: 25px;

}
.nav-links {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    align-items: center;
}
.NavBar {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
  /* height: 50px; */
  padding: 16px 0;
  overflow: hidden;
  margin-bottom: 10px;
}
.logo {
    font-size: 1.6rem;
    font-weight: 700;
    /* margin-left: 3px; */
}
</style>