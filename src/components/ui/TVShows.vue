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
      class="ma-2 pa-12"
      elevation="12"
    >
      <h1 class="text-center">TV Shows</h1>
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
        <h2>{{ category }}</h2>
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          color="purple"
          class="text-center"
        ></v-progress-circular>
        <v-lazy
          v-else-if="hasRequestedObjects && !isLoading"
          transition="fade-transition"
        >
          <v-slide-group class="pa-4" show-arrows>
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
    <h1 class="text-center ma-12" v-else>No TV shows found.</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import TVShow from "./TVShow.vue";

export default Vue.extend({
  name: "TVShows",
  components: { TVShow },
  async created() {
    await this.loadRequests();
  },
  data: () => ({
    error: null,
    isLoading: false,
    searchQuery: "",
  }),
  computed: {
    ...mapGetters("requests", [
      "getCategories",
      "getFilteredTVShowsList",
      "hasRequestedObjects",
    ]),
  },
  methods: {
    ...mapActions("requests", ["fetchRequests"]),
    async loadRequests() {
      this.isLoading = true;

      try {
        await this.fetchRequests();
      } catch (error) {
        this.error = error.message || "Something failed!";
      }

      this.isLoading = false;
    },
    clearSearchQuery() {
      this.searchQuery = "";
    },
    handleError() {
      this.error = null;
    },
  },
});
</script>
