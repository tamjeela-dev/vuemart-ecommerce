<template>
    <section class="success py-5">
        <div class="card shadow p-4">
            <h3>✅ Order Successful</h3>    
            <p class="lead">
                Thank you for your purchase.
            </p>
    
            <p>
                Your order has been placed successfully.
                We will contact you soon regarding delivery.
            </p>
            <router-link class="btn btn-primary mt-4 px-5" to="/products">Continue Shopping</router-link>
        </div>

    </section>
</template>


<style scoped>
.success{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:70vh;
    text-align:center;
}
.card{
    max-width:600px;
    width:100%;
    border:none;
    border-radius:20px;
}
</style>