<template>
  <v-row>
    <v-card :loading="loading" class="mx-auto my-12" max-width="874">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img height="250" :src="selectedTVShow.images.medium"></v-img>
      <v-card-title>{{ selectedTVShow.name }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="selectedTVShow.rating"
            color="amber"
            dense
            half-increments
            length="10"
            readonly
            size="20"
          ></v-rating>
          <div class="grey--text ml-4">{{ selectedTVShow.rating }}</div>
        </v-row>
        <div
          class="my-4 subtitle-1"
          :key="genre"
          v-for="genre in selectedTVShow.genres"
        >
          {{ selectedTVShow.genre }}
        </div>
        <div v-html="selectedTVShow.summary">
          {{ selectedTVShow.summary }}
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
          <v-chip :key="day" v-for="day in selectedTVShow.schedule.days"
            >{{ selectedTVShow.day }} -
            {{ selectedTVShow.schedule.time }}</v-chip
          >
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text>
          <a
            :href="selectedTVShow.url"
            target="_blank"
            rel="noreferrer noopener"
            >Watch
          </a>
        </v-btn>
        <v-btn color="deep-purple lighten-2" text>
          <a
            :href="selectedTVShow.officialSite"
            target="_blank"
            rel="noreferrer noopener"
            >Official Website
          </a>
        </v-btn>
      </v-card-actions>
      <p>Language: {{ selectedTVShow.language }}</p>
      <p>Premiered: {{ selectedTVShow.premiered }}</p>
      <p>Status: {{ selectedTVShow.status }}</p>
      <p>Type: {{ selectedTVShow.type }}</p>
      {{ id }}
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["id"],
  name: "TVShowDetails",
  data: () => ({
    loading: false,
    selection: 1,
    selectedTVShow: null,
  }),
  created() {
    this.selectedTVShow = this.$store.getters["requests/TVShows"].find(
      (TVItem) => TVItem.id === +this.id
    );
  },
});
</script>