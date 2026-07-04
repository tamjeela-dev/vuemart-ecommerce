import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import CheckOut from "@/views/CheckOut.vue";
import Cart from "@/views/Cart.vue";
import OrderSuccess from "@/views/OrderSuccess.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products
    },
    {
        path: '/products/:id',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
     {
        path: '/success',
        name: 'OrderSuccess',
        component: OrderSuccess
    },
     {
        path: '/checkout',
        name: 'CheckOut',
        component: CheckOut
    },
     {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router