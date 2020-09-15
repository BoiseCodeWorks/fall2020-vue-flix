<template>
  <div class="movie">
    <div class="media p-2 m-1 border" @click="setActive">
      {{index+1}}.
      <img
        v-if="movieData.poster_path"
        :src="'https://image.tmdb.org/t/p/w500'+movieData.poster_path"
        width="50px"
      />
      <img v-else src="//placehold.it/50x50" alt />
      <div class="media-body ml-1">
        <h5>{{movieData.title}}</h5>
        <p class="truncate">{{movieData.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movieData", "index"],
  data() {
    return {
    }
  },
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieData)
    }
  }
}
</script>

<style>
.truncate {
  width: 25vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>