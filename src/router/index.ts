import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../components/pages/NotFound.vue";
import TVShowDetails from "../pages/TVShowDetails.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tv-shows",
    component: () =>
      import(
        /* webpackChunkName: "tvshowdetails" */ "../pages/TVShowDetails.vue"
      ),
    props: true,
    children: [{ path: ":id", component: TVShowDetails }],
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
