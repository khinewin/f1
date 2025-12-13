<template>
    <div>
      <Navbar></Navbar>
      <div class="my-4">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import Navbar from "@/Navbar.vue"
  export default{
      components: {
          Navbar
      }
  }
</script>