<template>
    <div class="container">
        <div class="row pt-2">
            <div class="col-10"><div class="h2">Products</div></div>
            <div class="col-2"><router-link :to="{name: 'createProduct'}" class="btn btn-link pt-2">Create new</router-link></div>
        </div>
        <div class="card shadow">
            <div class="card-body">
                
                <table  class="table table-hover table-bordered">
                    <thead>
                        <tr class="fw-bold text-center table-secondary">
                            <td>ID</td>
                            <td>Item Name</td>
                            <td>Cost</td>
                            <td>Price</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in products" :key="p.id">
                            <td class="text-center">{{p.id}}</td>
                            <td>{{p.item_name}}</td>
                            <td class="text-end">{{p.cost}}</td>
                            <td class="text-end">{{p.price}}</td>
                            <td class="text-center">{{p.qty}}</td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="isLoading" class="text-center">
                    <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div v-if="!isLoading && errorMsg" class="text-center text-danger">
                    {{errorMsg}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default{
        mounted() {
            this.fetchProducts();
        },
        data(){
            return{
                products : [],
                isLoading: false,
                errorMsg:null,
            }
        },
        methods:{
            fetchProducts(){
                this.isLoading=true;
                axios.get("http://localhost:8000/api/products")
                .then((res)=>{
                 ///   console.log(res)
                    const data=res.data;
                    this.products=data;
                    this.isLoading=false;
                })
                .catch((err)=>{
                    this.isLoading=false;
                    this.errorMsg=err;
                    //console.log("error" + err)
                });
            }
        }
    }
</script>