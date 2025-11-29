<template>
    <div>
        <ul>
            <li v-for="p in products">{{p.item_name}}</li>
        </ul>
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