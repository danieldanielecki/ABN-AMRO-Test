<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      max-height="350"
      :alt="name"
      :lazy-src="images.medium"
      :src="images.original"
    ></v-img>
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
    <v-btn outlined color="purple" class="ma-6" :to="TVShowLink">Details</v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  name: "TVShow",
  computed: {
    TVShowLink() {
      return `${this.$route.path}tv-shows/${this.id}`;
    },
  },
  data: () => ({
    loading: false,
  }),
});
</script>
