import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import BaseDialog from "@/components/ui/BaseDialog.vue";
import TVShowDetails from "@/components/ui/TVShowDetails.vue";

describe("TVShowDetails.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const actions = {
    fetchRequests: jest.fn(),
  };
  const getters = {
    getSelectedTVShow: jest.fn(),
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
  const wrapper = shallowMount(TVShowDetails, {
    propsData: {
      id: "0",
    },
    localVue,
    store,
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

  it("should destroy", () => {
    wrapper.destroy();
  });
});
