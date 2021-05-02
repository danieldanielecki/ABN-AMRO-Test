import BaseDialog from "@/components/ui/BaseDialog.vue";
// Fix "Unknown custom element <v-*>".
import Vue from "vue";
import Vuetify from "vuetify";
Vue.config.productionTip = false;
Vue.use(Vuetify);

// Fix "[Vue warn]: Unknown custom element: <base-dialog> - did you register the component correctly? For recursive components, make sure to provide the "name" option."
Vue.component("base-dialog", BaseDialog);
