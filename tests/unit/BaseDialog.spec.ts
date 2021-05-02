import { shallowMount } from "@vue/test-utils";
import BaseDialog from "@/components/ui/BaseDialog.vue";

describe("BaseDialog.vue", () => {
  const wrapper = shallowMount(BaseDialog, {
    propsData: { show: true, title: "My Title", fixed: false },
  });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  //   it("should render props.show when passed", () => {
  //     const wrapper2 = shallowMount(BaseDialog, {
  //       propsData: { show: false, title: "My Title", fixed: true },
  //     });
  //     expect(wrapper2.text()).toMatch("Close");
  //   });
  it("should have 'My Title' <h2> tag", () => {
    const title = wrapper.find("h2");
    expect(title.exists()).toBe(true);
  });

  it("should click a button and emit", () => {
    wrapper.find(".backdrop").trigger("click");
  });
});
