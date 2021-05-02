import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import TVShows from "@/components/ui/TVShows.vue";

Vue.use(Vuetify);

describe("TVShows.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const actions = {
    fetchRequests: jest.fn(),
  };
  const getters = {
    getCategories: jest.fn(),
    getFilteredTVShowsList: jest.fn(),
    hasRequestedObjects: jest.fn(),
  };
  const state = {
    requests: jest.fn(),
  };
  const store = new Vuex.Store({ actions, getters, state });
  const wrapper = shallowMount(TVShows, { localVue, store });

  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // it("renders props.msg when passed", () => {
  //   const msg = "Welcome to Vuetify";
  //   const wrapper = shallowMount(TVShows, {
  //     propsData: { msg },
  //   });
  //   expect(wrapper.text()).toMatch(msg);
  // });
  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
