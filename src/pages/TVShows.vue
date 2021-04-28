<template>
  <v-container>
    <v-row class="text-center">
      <TVShow
        v-for="TVShow in TVShows"
        :key="TVShow.id"
        :id="TVShow.id"
        :genres="TVShow.genres"
        :images="TVShow.images"
        :language="TVShow.language"
        :name="TVShow.name"
        :officialSite="TVShow.officialSite"
        :premiered="TVShow.premiered"
        :rating="TVShow.rating"
        :schedule="TVShow.schedule"
        :status="TVShow.status"
        :summary="TVShow.summary"
        :type="TVShow.type"
        :url="TVShow.url"
      ></TVShow>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TVShow from "./TVShow.vue";

export default Vue.extend({
  name: "TVShows",
  components: { TVShow },
  created() {
    this.loadRequests();
  },
  computed: {
    TVShows() {
      return this.$store.getters["requests/TVShows"];
    },
    TVShowsCount() {
      return this.TVShows.length;
    },
  },

  methods: {
    async loadRequests() {
      this.$store.dispatch("requests/fetchRequests");
    },
  },
});
</script>
