<template>

<div class="offcanvas offcanvas-start" tabindex="-1" id="sideBar" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Admin</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
        <ul class="list-group">
            <li class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas">
                <router-link :to="{name: 'welcome'}" class="btn d-block text-start">Home</router-link>
            </li>
             <li class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas">
                <router-link :to="{name: 'createProduct'}" class="btn d-block text-start">New Item</router-link>
            </li>
        </ul>
  </div>
</div>
</template>
<script>
    export default {
        
    }
</script>