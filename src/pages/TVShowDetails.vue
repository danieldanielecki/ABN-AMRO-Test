<template>
  <v-container>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>Error details: "{{ error }}"</p>
    </base-dialog>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="purple"
      class="text-center"
    ></v-progress-circular>
    <v-card
      v-else-if="hasRequestedObjects && !isLoading"
      class="mx-auto my-12"
      max-width="874"
      elevation="24"
    >
      <v-img
        max-height="750"
        :lazy-src="getSelectedTVShow(id).images.medium"
        :src="getSelectedTVShow(id).images.original"
      ></v-img>
      <v-card-title>{{ getSelectedTVShow(id).name }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="getSelectedTVShow(id).rating"
            color="amber"
            dense
            half-increments
            length="10"
            readonly
            size="20"
          ></v-rating>
          <div class="grey--text ml-4">{{ getSelectedTVShow(id).rating }}</div>
        </v-row>
        <div
          class="my-4 subtitle-1"
          :key="genre"
          v-for="genre in getSelectedTVShow(id).genres"
        >
          {{ genre }}
        </div>
        <div v-html="getSelectedTVShow(id).summary">
          {{ getSelectedTVShow(id).summary }}
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Schedule &amp; Info</v-card-title>
      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <v-chip :key="day" v-for="day in getSelectedTVShow(id).schedule.days"
            >{{ day }} - {{ getSelectedTVShow(id).schedule.time }}</v-chip
          >
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text>
          <a
            :href="getSelectedTVShow(id).url"
            target="_blank"
            rel="noreferrer noopener"
            >Watch
          </a>
        </v-btn>
        <v-btn color="deep-purple lighten-2" text>
          <a
            :href="getSelectedTVShow(id).officialSite"
            target="_blank"
            rel="noreferrer noopener"
            >Official Website
          </a>
        </v-btn>
      </v-card-actions>
      <div class="ml-4">
        <p>Language: {{ getSelectedTVShow(id).language }}</p>
        <p>Premiered: {{ getSelectedTVShow(id).premiered }}</p>
        <p>Status: {{ getSelectedTVShow(id).status }}</p>
        <p>Type: {{ getSelectedTVShow(id).type }}</p>
      </div>
    </v-card>
    <h1 class="text-center ma-12" v-else>No TV shows found.</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  name: "TVShowDetails",
  data: () => ({
    error: null,
    isLoading: false,
  }),
  computed: {
    ...mapActions("requests", ["fetchRequests"]),
    ...mapGetters("requests", ["getSelectedTVShow", "hasRequestedObjects"]),
    ...mapState("requests", ["requests"]),
  },
  async created() {
    if (!this.hasRequestedObjects) {
      await this.loadRequest();
    }
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;

      try {
        await this.fetchRequests;
      } catch (error) {
        this.error = error.message || "Something failed!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  deactivated() {
    this.$destroy(); // Otherwise due to usage of "<keep-alive>" the firstly loaded TV show is displayed for all dynamic routes.
  },
});
</script>