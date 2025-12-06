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
                <form action="">
                    <div class="form-group mb-3">
                        <label for="item_name" class="form-label">Item name</label>
                        <input type="text" id="item_name" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="cost" class="form-label">Cost</label>
                        <input type="number" id="cost" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" id="price" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="qty" class="form-label">Quantity</label>
                        <input type="number" id="qty" class="form-control">
                    </div>
                    <div class="form-group d-grid">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>