<template>
    <div class="container">
        <h2>Products</h2>
        <div class="card shadow">
            <div class="card-body">
                <table  class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Item Name</td>
                            <td>Cost</td>
                            <td>Price</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in products" :key="p.id">
                            <td>{{p.id}}</td>
                            <td>{{p.item_name}}</td>
                            <td>{{p.cost}}</td>
                            <td>{{p.price}}</td>
                            <td>{{p.qty}}</td>
                        </tr>
                    </tbody>
                </table>
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
                products : []
            }
        },
        methods:{
            fetchProducts(){
                axios.get("http://localhost:8000/api/products")
                .then((res)=>{
                 ///   console.log(res)
                    const data=res.data;
                    this.products=data;
                })
                .catch((err)=>{
                    console.log("error" + err)
                });
            }
        }
    }
</script>