<template>
  <transition name="fade">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Linksssss</h2>
    </div>
  </transition>
</template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
