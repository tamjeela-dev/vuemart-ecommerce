<template>
    <div class="container">
        <div class="row hero" >
            <div class="col">
                <h1 class="section-title"> 🛍️ Welcome to VueMart</h1>
                <p>Discover premium products with fast delivery, secure shopping, and unbeatable prices.</p>
                <router-link to="/products" class="btn btn-primary">Shop Now</router-link>
            </div>
        </div>
        <div class="row g-3 categories">
            <h4>Featured Categories</h4>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <p> 📱 Electronics </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <p> 👕 Fashion </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <p> 💄 Beauty </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <p> 🥦 Grocery </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="card mt-4 py-4"> -->
            <div class="row features" >
            <h5 class="section-title">Why Shop With Us?</h5>
            <div class="col-md-4">
                <div class="card text-center p-4">
                    <h1>🚚</h1>
                    <h5>Free Shipping</h5>
                    <p>On all orders</p>
                </div>
            </div>
             <div class="col-md-4">
                <div class="card text-center p-4">
                    <h1>⭐</h1>
                    <h5>Quality Products</h5>
                    <p>Premium brands only</p>
                </div>
            </div>
             <div class="col-md-4">
                <div class="card text-center p-4">
                    <h1>🔄</h1>
                    <h5> Easy Returns</h5>
                    <p>7-day return policy</p>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>

export default {
    // components: {
    //     NavBar
    // },
    data() {
        return {

        }
    }
}
</script>


<style scoped>
.btn:hover {
    transform: scale(1.05);
}
.btn{
    border-radius:10px;
     margin-top:10px;
}
.card-body {
    text-align: center;
    padding: 40px;
}

.card {
    transition: .3s;
    border-radius:15px;
}

.card:hover {
    transform: translateY(-5px);
}


h1 {
    font-size: 3rem;
    font-weight: 700;
}
.section-title{
    margin-left:10px;
    /* margin-top:20px; */
}
.hero {
    margin-top: 40px;
}

.categories {
    margin-top: 40px;
}

.features {
    margin-top: 40px;
}
</style>