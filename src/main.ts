import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index";
import store from "./store";
import vuetify from "./plugins/vuetify";
import BaseDialog from "./components/ui/BaseDialog.vue";

Vue.config.productionTip = false;

Vue.component("base-dialog", BaseDialog);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
