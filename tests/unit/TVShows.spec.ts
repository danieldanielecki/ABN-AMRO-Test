import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import BaseDialog from "@/components/ui/BaseDialog.vue";
import TVShows from "@/components/ui/TVShows.vue";

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
  const store = new Vuex.Store({
    modules: {
      requests: {
        namespaced: true,
        actions,
        getters,
        state,
      },
    },
  });
  const wrapper = shallowMount(TVShows, { localVue, store });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have BaseDialog", () => {
    const baseDialog = wrapper.findComponent(BaseDialog);
    expect(baseDialog.exists()).toBe(true);
  });

  it("should call 'fetchRequests' action", async () => {
    expect(await actions.fetchRequests).toHaveBeenCalled();
  });

  it("should call 'hasRequestedObjects' getter", async () => {
    expect(await getters.hasRequestedObjects).toHaveBeenCalled();
  });
});
