<template>
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div class="my-4">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import Navbar from "@/Navbar.vue"
  import Sidebar from "@/Sidebar.vue"
  export default{
      components: {
          Navbar, Sidebar
      }
  }
</script>