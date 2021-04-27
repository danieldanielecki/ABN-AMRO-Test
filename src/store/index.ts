import Vue from "vue";
import Vuex from "vuex";
import requestsModule from "./modules/requests/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { requests: requestsModule },
});
