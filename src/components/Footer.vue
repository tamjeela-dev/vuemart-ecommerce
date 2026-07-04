<template>
    <footer class="footer mt-3">
        <div class="row mt-2">
            <div class="col-md-4">
                <h3 class="logo">🛍️ VueMart</h3>
                <p>Your one-stop shop for quality products.</p>
            </div>
            <div class="col-md-4 links">
                <h5>
                    Quick Links
                </h5>
                <!-- <div class="links"> -->
                <router-link to="/">Home</router-link>
                <router-link to="/products">Products</router-link>
                <router-link to="/cart">Cart</router-link>
                <!-- </div> -->
            </div>
            <div class="col-md-4">
                <h5>
                    Contact
                </h5>
                <p>📧 tamjeelashabeer@gmail.com</p>
                <p>📍 Lahore, Pakistan</p>
            </div>
            <p class="copyright">
                © 2026 VueMart. All Rights Reserved.
            </p>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
footer {
    background-color: #1e293b;
    color: white;
    padding: 40px;
}

.links a {
    text-decoration: none;
    gap: 30px;
    align-items: center;
    display: block;
}

.logo {
    font-weight: 700;
}

.copyright {
    text-align: center;
    margin-top: 30px;
    border-top: 1px solid #555;
    padding-top: 20px;
}
</style>
