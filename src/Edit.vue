<template>
    <div class="container">
       
        <div class="row justify-content-center">
            <div class="col-sm-4">

                <div v-if="msg" class="alert alert-success">{{msg}}</div>

                <form @submit.prevent="savePost">
                    <div class="form-group mb-3">
                        <label for="item_name" class="form-label">Item name</label>
                        <input v-model="item_name" type="text" id="item_name" class="form-control">
                        <div v-if="error.item_name" class="text-danger">{{error.item_name}}</div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="cost" class="form-label">Cost</label>
                        <input v-model="cost" type="number" id="cost" class="form-control">
                        <div v-if="error.cost" class="text-danger">{{error.cost}}</div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input v-model="price" type="number" id="price" class="form-control">
                        <div v-if="error.price" class="text-danger">{{error.price}}</div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="qty" class="form-label">Quantity</label>
                        <input v-model="qty" type="number" id="qty" class="form-control">
                        <div v-if="error.qty" class="text-danger">{{error.qty}}</div>
                    </div>
                    <div class="form-group ">
                        <router-link to="/" class="btn btn-light me-3">Back</router-link>
                        <button type="submit" class="btn btn-primary" :disabled="isSaving">
                            <div v-if="!isSaving">Update</div>
                            <div v-if="isSaving" class="spinner-border text-white" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        mounted(){
            this.fetchPost();
        },
        methods:{
            fetchPost(){
                axios.get(`http://localhost:8000/api/products/id/${this.product_id}`)
                .then((res)=>{
                    this.item_name=res.data.item_name;
                    this.cost=res.data.cost;
                    this.price=res.data.price;
                    this.qty=res.data.qty;
                })
                .catch((err)=>{
                    console.log(err)
                });
            },
            savePost(){
                this.isSaving=true;
                const item={
                    item_name: this.item_name,
                    cost: this.cost,
                    price:this.price,
                    qty: this.qty,
                }
               axios.post("http://localhost:8000/api/products", item)
               .then((res)=>{
                this.isSaving=false;
                let msg=res.data.msg;

                this.item_name="";
                this.cost="";
                this.price="";
                this.qty="";

                this.msg=msg;
                setTimeout(()=>{
                    this.msg=null;
                }, 3000)
                //console.log(res)
               }).catch((err)=>{
                this.isSaving=false;
                console.log(err.response.data.errors)
                this.error.item_name=err.response.data?.errors?.item_name ? err.response.data?.errors?.item_name[0] :  null;
                this.error.cost=err.response.data?.errors?.cost ? err.response.data?.errors?.cost[0] : null;
                this.error.price=err.response.data?.errors?.price ? err.response.data?.errors?.price[0] : null;
                this.error.qty=err.response.data?.errors?.qty ? err.response.data?.errors?.qty[0]  : null;
               }); 
                
            }
        },
        data(){
            return{
                product_id: this.$route.params.id,
                item_name: "",
                cost: "",
                price: "",
                qty: "",
                msg:null,
                isSaving: false,
                error: {
                    item_name: null,
                    cost: null,
                    price:null,
                    qty: null,
                }
            }
        }
    }
</script>