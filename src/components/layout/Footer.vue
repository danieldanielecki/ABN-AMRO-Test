<template>
  <v-footer dark>
    <v-container
      ><p class="text-center">
        &copy; {{ currentYear }} Daniel Danielecki
      </p></v-container
    >
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>
