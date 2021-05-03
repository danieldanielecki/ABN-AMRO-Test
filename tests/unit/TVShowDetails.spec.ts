import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import BaseDialog from "@/components/ui/BaseDialog.vue";
import TVShowDetails from "@/components/ui/TVShowDetails.vue";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TVShowDetails.vue", () => {
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
      getSelectedTVShow: jest.fn(),
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

    wrapper = shallowMount(TVShowDetails, {
      propsData: {
        id: "0",
      },
      localVue,
      store,
    });
  });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have BaseDialog", () => {
    const baseDialog = wrapper.findComponent(BaseDialog);
    expect(baseDialog.exists()).toBe(true);
  });

  it("should call 'fetchRequests' action", () => {
    expect(actions.fetchRequests).toHaveBeenCalled();
  });

  it("should call 'hasRequestedObjects' getter", () => {
    expect(getters.hasRequestedObjects).toHaveBeenCalled();
  });

  it("should destroy", () => {
    wrapper.destroy();
  });

  it("should test try/catch block", async () => {
    try {
      await store.fetchRequest;
    } catch (error) {
      expect(error).toBe("sample error");
    }
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
    wrapper = shallowMount(TVShowDetails, {
      propsData: {
        id: "0",
      },
      localVue,
      store,
    });

    await flushPromises();
    expect(wrapper.vm.error).toEqual("error");
  });
});
