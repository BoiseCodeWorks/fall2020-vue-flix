<template>
  <div id="movie-details">
    <div class="card" v-if="movie.id">
      <img
        class="card-img-top"
        :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
        alt="Movie Poster"
      />
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        <p>Average Score: {{movie.vote_average}} ({{movie.vote_count}} votes)</p>
        <p class="card-text">{{movie.overview}}</p>
        <button>Add to Sandbox</button>
      </div>
    </div>
  </div>
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