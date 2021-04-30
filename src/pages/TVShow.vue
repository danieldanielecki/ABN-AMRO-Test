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
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          length="10"
          readonly
          size="20"
        ></v-rating>
        <div class="grey--text ml-4">{{ rating }}</div>
      </v-row>
    </v-card-text>
    <button><router-link :to="TVShowLink">Details</router-link></button>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["id", "images", "name", "rating"],
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
