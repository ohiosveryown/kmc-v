<!-- template -->
<template>
  <transition name="fade">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Linksssss</h2>
    </div>
  </transition>
</template>


<!-- styles -->
<style lang="scss" scoped>

</style>


<!-- script -->
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
