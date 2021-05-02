<template>
  <v-app>
    <Header />
    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Header,
  },
});
</script>
