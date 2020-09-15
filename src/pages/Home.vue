<template>
  <div id="home" class="container">
    <div class="row">
      <div class="col pt-5">
        <div class="form-group">
          <label for="query">Search</label>
          <form @submit.prevent="search" class="d-flex">
            <input
              type="text"
              name="query"
              id="query"
              v-model="query"
              class="form-control"
              placeholder="Movie, Actor..."
              aria-describedby="helpId"
            />
            <button type="submit" class="btn btn-success">Search</button>
          </form>
        </div>
      </div>
    </div>
    <!-- NOTE props are data passed to child from the parent component -->
    <div class="row">
      <div class="col-6">
        <movie v-for="(movie, index) in movies" :key="movie.id" :index="index" :movieData="movie" />
      </div>
      <div class="col-6">
        <movie-details />
      </div>
    </div>
  </div>
</template>

<script>
import Movie from "../components/Movie.vue"
import MovieDetails from "../components/MovieDetails.vue"
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getCars")
  },
  data() {
    return {
      query: '',
      // NOTE this will only load on the first page load so DONT DO THIS for data that changes
      // results: this.$store.state.searchResults
    }
  },
  methods: {
    search() {
      // NOTE calls to the root store, dispatches action called 'movieSearch' and passes value of query
      // NOTE you can only add the 1 argument of data to a dispatch
      this.$store.dispatch('movieSearch', this.query)
    }
  },
  // NOTE these act as "watchers/observers/listeners/on"
  computed: {
    // NOTE computeds act as variables within the templtate
    movies() {
      return this.$store.state.searchResults
    },
    cars() {
      return []
    }
  },
  components: {
    Movie,
    MovieDetails
  }
}
</script>

<style>
</style>