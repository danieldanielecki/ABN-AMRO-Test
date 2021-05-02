<template>
  <TVShows msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import Vue from "vue";
import TVShows from "@/pages/TVShows.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    TVShows,
  },
});
</script>
