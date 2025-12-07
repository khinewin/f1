<template>
    <div class="container">
        <div class="row pt-2">
            <div class="col-10 h2">New item</div>
            <div class="col-2">
                <router-link :to="{name: 'welcome'}">Home</router-link>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-4">

                <div v-if="msg" class="alert alert-success">{{msg}}</div>

                <form @submit.prevent="savePost">
                    <div class="form-group mb-3">
                        <label for="item_name" class="form-label">Item name</label>
                        <input v-model="item_name" type="text" id="item_name" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="cost" class="form-label">Cost</label>
                        <input v-model="cost" type="number" id="cost" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input v-model="price" type="number" id="price" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="qty" class="form-label">Quantity</label>
                        <input v-model="qty" type="number" id="qty" class="form-control">
                    </div>
                    <div class="form-group d-grid">
                        <button type="submit" class="btn btn-primary" :disabled="isSaving">
                            <div v-if="!isSaving">Save</div>
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
        methods:{
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
                this.msg=msg;
                setTimeout(()=>{
                    this.msg=null;
                }, 3000)
                //console.log(res)
               }).catch((err)=>{
                this.isSaving=false;
                console.log(err)
               }); 
                
            }
        },
        data(){
            return{
                item_name: "",
                cost: 0,
                price: 0,
                qty: 0,
                msg:null,
                isSaving: false,
            }
        }
    }
</script>