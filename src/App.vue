<template>
  <div id="app">
    <router-link to="/"><a>Home</a></router-link>
    <router-link to="/blog"><a>Blog</a></router-link>
    <router-view class="view-container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>

</style>
