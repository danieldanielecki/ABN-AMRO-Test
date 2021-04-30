<template>
  <v-container>
    <v-text-field placeholder="Search title.." v-model="search"></v-text-field>
    <v-sheet
      class="mx-auto text-center"
      elevation="8"
      v-for="category in categories"
      :key="category"
    >
      <h1>{{ category }}</h1>
      <v-slide-group class="pa-4" active-class="success" show-arrows>
        <div v-for="TVShow in filteredList" :key="TVShow.id">
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
      <br />
    </v-sheet>
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
  data: () => ({
    search: "",
  }),
  computed: {
    TVShows() {
      return this.$store.getters["requests/TVShows"];
    },
    categories() {
      const arrayMe: Set<unknown> = new Set();
      const filtered = this.$store.getters["requests/TVShows"];

      filtered.filter((item: any) => {
        item.genres.forEach((element: string) => {
          arrayMe.add(element);
        });
      });
      return [...arrayMe];
    },
    filteredList() {
      return this.TVShows.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    async loadRequests() {
      this.$store.dispatch("requests/fetchRequests");
    },
  },
});
</script>
