<template>
  <v-row>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="purple"
      class="text-center"
    ></v-progress-circular>
    <v-card
      class="mx-auto my-12"
      max-width="874"
      v-else-if="hasRequestedObjects && !isLoading"
      elevation="24"
    >
      <v-img
        max-height="750"
        :lazy-src="selectedTVShow.images.medium"
        :src="selectedTVShow.images.original"
      ></v-img>
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
          {{ genre }}
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
            >{{ day }} - {{ selectedTVShow.schedule.time }}</v-chip
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
    </v-card>
    <h1 v-else>No TV shows found.</h1>
  </v-row>
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
    isLoading: false,
    selection: 1,
    selectedTVShow: null,
  }),
  computed: {
    ...mapActions("requests", ["fetchRequests"]),
    ...mapGetters("requests", ["hasRequestedObjects"]),
    ...mapState("requests", ["requests"]),
  },
  async created() {
    await this.loadRequest();
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;

      try {
        await this.fetchRequests;

        this.selectedTVShow = await this.requests.find(
          (TVItem) => TVItem.id === +this.id
        );
      } catch (error) {
        console.log("wrong");
      }
      this.isLoading = false;
    },
  },
  deactivated() {
    this.$destroy(); // Otherwise due to usage of "<keep-alive>" the firstly loaded TV show is displayed for all dynamic routes.
  },
});
</script>