<template>
  <v-container>
    <h1 v-if="!hasRequestedObjects">No TV Shows</h1>
    <v-card v-else-if="hasRequestedObjects" class="ma-12 pa-12" elevation="24">
      <v-text-field
        placeholder="Search title.."
        v-model="searchQuery"
        clearable
        @click:clear="clearSearchQuery()"
      ></v-text-field>
      <v-sheet
        class="mx-auto text-center"
        elevation="24"
        v-for="category in getCategories"
        :key="category"
      >
        <h1>{{ category }}</h1>
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          color="purple"
          class="text-center"
        ></v-progress-circular>
        <v-lazy transition="fade-transition">
          <v-slide-group class="pa-4" active-class="success" show-arrows>
            <div
              v-for="TVShow in getFilteredTVShowsList(searchQuery)"
              :key="TVShow.id"
            >
              <div
                class="my-4 subtitle-1"
                :key="genre"
                v-for="genre in TVShow.genres"
              >
                <v-slide-item v-if="category === genre">
                  <TVShow
                    :id="TVShow.id"
                    :images="TVShow.images"
                    :name="TVShow.name"
                    :rating="TVShow.rating"
                  ></TVShow>
                </v-slide-item>
              </div>
            </div>
          </v-slide-group>
        </v-lazy>
        <br />
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import TVShow from "./TVShow.vue";

export default Vue.extend({
  name: "TVShows",
  components: { TVShow },
  async created() {
    await this.loadRequests();
  },
  data: () => ({
    isLoading: false,
    searchQuery: "",
  }),
  computed: {
    ...mapActions("requests", ["fetchRequests"]),
    ...mapGetters("requests", [
      "getCategories",
      "getFilteredTVShowsList",
      "hasRequestedObjects",
    ]),
    ...mapState("requests", ["requests"]),
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;

      try {
        await this.fetchRequests;
      } catch (error) {
        console.log("wrong");
      }

      this.isLoading = false;
    },
    clearSearchQuery() {
      this.searchQuery = "";
    },
  },
});
</script>
