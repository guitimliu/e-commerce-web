<template>
  <NavMenu></NavMenu>
  <router-view/>
  <FooterView></FooterView>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import FooterView from './components/FooterView.vue'

export default {
  components: {
    NavMenu,
    FooterView
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style";
@import "~bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
