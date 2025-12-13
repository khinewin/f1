<template>
    <div class="container">
       
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
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in products" :key="p.id">
                            <td class="text-center">{{p.id}}</td>
                            <td>{{p.item_name}}</td>
                            <td class="text-end">{{formatAmount(p.cost)}}</td>
                            <td class="text-end">{{formatAmount(p.price)}}</td>
                            <td class="text-center">{{p.qty}}</td>
                            <td><button data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-sm btn-outline-danger">Delete</button></td>
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
        <!--Delete Modal-->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-danger" id="exampleModalLabel">Confirmation</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure want to delete this item ? it cannot be recover.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger">Confirm</button>
      </div>
    </div>
  </div>
</div>
        <!--End Delete Modal-->
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
            formatAmount(amount=0){
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'MMK'
                    }).format(amount);
            },
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