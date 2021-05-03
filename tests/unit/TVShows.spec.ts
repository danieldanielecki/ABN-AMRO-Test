import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import BaseDialog from "@/components/ui/BaseDialog.vue";
import TVShows from "@/components/ui/TVShows.vue";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TVShows.vue", () => {
  let actions: any;
  let getters: any;
  let state: any;
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    actions = {
      fetchRequests: jest.fn(),
    };
    getters = {
      getCategories: jest.fn(),
      getFilteredTVShowsList: jest.fn(),
      hasRequestedObjects: jest.fn(),
    };
    state = {
      requests: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        requests: {
          namespaced: true,
          actions,
          getters,
          state,
        },
      },
    });

    wrapper = shallowMount(TVShows, { localVue, store });
  });

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

  it("tests error with async/await", async () => {
    actions.fetchRequests = jest.fn().mockRejectedValue(new Error("error"));
    store = new Vuex.Store({
      modules: {
        requests: {
          namespaced: true,
          actions,
          getters,
          state,
        },
      },
    });
    wrapper = shallowMount(TVShows, { localVue, store });

    await flushPromises();
    expect(wrapper.vm.error).toEqual("error");
  });
});
