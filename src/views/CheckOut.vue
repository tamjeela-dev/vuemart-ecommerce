<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3>🛒 Proceed to Checkout</h3>
                <h5 class="mb-3">Shipping Information</h5>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" placeholder="Enter your full name" class="form-control" v-model="fullName" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" class="form-control" v-model="email" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone Number</label>
                        <input type="number" placeholder="Enter Phone Number" class="form-control"
                            v-model="phoneNumber" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">City</label>
                        <input type="text" placeholder="Enter City" class="form-control" v-model="city" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Address</label>
                        <textarea class="form-control" placeholder="Enter Address" rows="3"
                            v-model="address"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Postal Code</label>
                        <input type="text" placeholder="Postal Code" class="form-control" v-model="postalCode" />
                    </div>
                </form>
            </div>
            <div class="col-md-5">
                <div class="card p-4 shadow-sm">
                    <h4>Order Summary</h4>
                    <p>Items: {{ totalItems }}</p>
                    <p>Subtotal: {{ subTotal }}</p>
                    Shipping:
                    <span class="text-success">Free</span>
                    <p class="text-success fw-bold fs-4">Grand Total: {{ subTotal }}</p>
                    <div class="mb-3">
                        <label class="form-label">
                            Payment Method
                        </label>

                        <select class="form-select" v-model="paymentMethod">

                            <option value="">
                                Select Payment Method
                            </option>

                            <option>
                                Cash on Delivery
                            </option>

                            <option>
                                Credit Card
                            </option>

                        </select>
                    </div>
                    <button class="btn btn-success w-100 mt-4" @click="submit()">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import router from '@/router';
import { useCartStore } from '@/stores/cartStore';
export default {
    name: 'CheckOut',
    data() {
        return {
            cartStore: useCartStore(),
            fullName: '',
            email: '',
            phoneNumber: '',
            city: '',
            postalCode: '',
            address: '',
            paymentMethod: ''
        }
    },
    computed: {
        cartItems() {
            return this.cartStore.cartItems;
        },

        totalItems() {
            return this.cartStore.totalItems;
        },

        subTotal() {
            return this.cartStore.subTotal;
        }
    },
    methods: {
        submit() {
            if (
                this.fullName !== '' && 
                this.email !== '' && 
                this.phoneNumber !== '' && 
                this.city !== '' && 
                this.address !== '' &&
                this.postalCode !== ''
            ) {
                this.cartStore.cartItems = [],
                localStorage.removeItem('cart')
                this.$router.push('/success')

            }
            else {
                alert('Please Fill all the feilds')
            }
        }
    }
}
</script>

<style scoped>
.form-control {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
}

.form-control:focus {
    border-color: #4F46E5;
    box-shadow: none;
}
.col-md-5{
    position: sticky;
    top: 20px;
    height: fit-content;
}
</style>