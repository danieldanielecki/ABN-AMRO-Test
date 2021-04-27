<template>
  <header>
    <v-app-bar
      aria-label="This is a toolbar with menu elements for large screen devices."
      app
      dark
      elevation="24"
    >
      <v-toolbar-title>ABN Test</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.path"
          color="purple lighten-4"
          exact
          link
          small
          text
          v-text="menuItem.name"
        />
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      aria-label="This is a sidenav with menu elements for mobile devices."
      dark
      fixed
      right
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.path"
            color="purple lighten-4"
            exact
            link
            two-line
          >
            <v-list-item-action>
              <v-icon v-text="menuItem.icon" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="menuItem.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

import { MenuItem } from "./MenuItem";

export default Vue.extend({
  data() {
    return {
      drawer: false,
      menuItems: [] as MenuItem[],
    };
  },
  created() {
    this.menuItems = [
      {
        icon: "mdi-home",
        name: "Home",
        path: "/",
      },
      {
        icon: "mdi-information",
        name: "About",
        path: "/about",
      },
    ];
  },
});
</script>
