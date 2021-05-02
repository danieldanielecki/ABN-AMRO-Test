<template>
  <TVShows msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import Vue from "vue";
import TVShows from "../components/ui/TVShows.vue";
export default Vue.extend({
  name: "Home",
  components: {
    TVShows,
  },
});
</script>
