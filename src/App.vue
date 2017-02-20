<!-- template -->
<template>
  <div id="app">
    <!-- routes / nav -->
    <router-link to="/" exact><a>Home</a></router-link>
    <router-link to="/blog" exact><a>Blog</a></router-link>
    <!-- view -->
    <router-view class="view-container"></router-view>
  </div>
</template>


<!-- styles -->
<style lang="scss" scoped>

</style>


<!-- script -->
<script>
export default {
  name: 'app'
}
</script>
