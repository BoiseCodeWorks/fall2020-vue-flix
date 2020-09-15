<template>
  <div id="movie-details">Hello? {{movie}}</div>
</template>

<script>
export default {
  name: "movie-details",
  computed: {
    movie() {
      return this.$store.state.activeMovie
    }
  }
}
</script>

<style>
</style>