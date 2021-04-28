<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <!-- <router-link :to="{ name: 'TVShow', params: { id } }"> -->
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
      <div class="my-4 subtitle-1" :key="genre" v-for="genre in genres">
        {{ genre }}
      </div>
      <div v-html="summary">
        {{ summary }}
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
        <v-chip :key="day" v-for="day in schedule.days"
          >{{ day }} - {{ schedule.time }}</v-chip
        >
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text>
        <a :href="url" target="_blank" rel="noreferrer noopener">Watch </a>
      </v-btn>
      <v-btn color="deep-purple lighten-2" text>
        <a :href="officialSite" target="_blank" rel="noreferrer noopener"
          >Official Website
        </a>
      </v-btn>
    </v-card-actions>
    <p>Language: {{ language }}</p>
    <p>Premiered: {{ premiered }}</p>
    <p>Status: {{ status }}</p>
    <p>Type: {{ type }}</p>
    <!-- </router-link> -->
    {{ TVShowLink }}
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
      return this.$route.path + "/" + this.id;
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
});
</script>
