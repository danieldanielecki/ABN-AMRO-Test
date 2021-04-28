import { shallowMount } from "@vue/test-utils";
import TVShows from "@/components/TVShows.vue";

describe("TVShows.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Welcome to Vuetify";
    const wrapper = shallowMount(TVShows, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
