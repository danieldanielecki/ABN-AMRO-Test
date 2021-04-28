<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>
      </v-col>
      Number of TV Shows {{ TVShowsCount }}
      <v-card
        :loading="loading"
        :key="TVShow.id"
        class="mx-auto my-12"
        max-width="374"
        v-for="TVShow in TVShows"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-img height="250" :src="TVShow.images.medium"></v-img>
        <v-card-title>{{ TVShow.name }}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="TVShow.rating"
              color="amber"
              dense
              half-increments
              length="10"
              readonly
              size="20"
            ></v-rating>
            <div class="grey--text ml-4">{{ TVShow.rating }}</div>
          </v-row>
          <div
            class="my-4 subtitle-1"
            :key="genre"
            v-for="genre in TVShow.genres"
          >
            {{ genre }}
          </div>
          <div v-html="TVShow.summary">
            {{ TVShow.summary }}
          </div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-title>Schedule &amp; Info</v-card-title>
        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip :key="day" v-for="day in TVShow.schedule.days"
              >{{ day }} - {{ TVShow.schedule.time }}</v-chip
            >
          </v-chip-group>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text>
            <a :href="TVShow.url" target="_blank" rel="noreferrer noopener"
              >Watch
            </a>
          </v-btn>
          <v-btn color="deep-purple lighten-2" text>
            <a
              :href="TVShow.officialSite"
              target="_blank"
              rel="noreferrer noopener"
              >Official Website
            </a>
          </v-btn>
        </v-card-actions>
        <p>Language: {{ TVShow.language }}</p>
        <p>Premiered: {{ TVShow.premiered }}</p>
        <p>Status: {{ TVShow.status }}</p>
        <p>Type: {{ TVShow.type }}</p>
      </v-card></v-row
    >
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TVShows",
  created() {
    this.loadRequests();
  },
  computed: {
    TVShows() {
      console.log(this.$store.getters["requests/TVShows"]);
      return this.$store.getters["requests/TVShows"];
    },
    TVShowsCount() {
      return this.TVShows.length;
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    async loadRequests() {
      this.$store.dispatch("requests/fetchRequests");
    },
  },
});
</script>
