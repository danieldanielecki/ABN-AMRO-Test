<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :src="images.medium"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <button><router-link :to="TVShowLink">Details</router-link></button>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: [
    "id",
    "genres",
    "images",
    "language",
    "name",
    "officialSite",
    "premiered",
    "rating",
    "schedule",
    "status",
    "summary",
    "type",
    "url",
  ],
  name: "TVShow",
  computed: {
    TVShowLink() {
      return this.$route.path + "tv-shows/" + this.id;
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
});
</script>
