<template>
  <div id="app">
    <navbar />
    <home />
    <my-footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import MyFooter from "./components/Footer.vue"
import Home from "./pages/Home.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    MyFooter,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#home {
  flex-grow: 1;
}
</style>
