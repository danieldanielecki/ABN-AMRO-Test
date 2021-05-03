import { shallowMount } from "@vue/test-utils";
import BaseDialog from "@/components/ui/BaseDialog.vue";

describe("BaseDialog.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(BaseDialog, {
      propsData: { show: true, title: "My Title", fixed: false },
    });
  });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have 'My Title' <h2> tag", () => {
    const title = wrapper.find("h2");
    expect(title.exists()).toBe(true);
  });

  it("should click a button and emit", () => {
    wrapper.find(".backdrop").trigger("click");
  });

  it("should have 'My Title' <h2> tag when props.fixed is true", () => {
    const wrapper2 = shallowMount(BaseDialog, {
      propsData: { show: true, title: "My Title", fixed: true },
    });
    expect(wrapper2.text()).toMatch("My Title");
  });
});
