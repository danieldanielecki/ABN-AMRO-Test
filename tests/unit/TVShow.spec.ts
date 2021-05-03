import { shallowMount } from "@vue/test-utils";
import TVShow from "@/components/ui/TVShow.vue";

describe("BaseDialog.vue", () => {
  let wrapper: any;
  const $route = {
    path: "/some/path",
  };

  beforeEach(() => {
    wrapper = shallowMount(TVShow, {
      propsData: {
        id: 0,
        images: {
          medium: "https://fakelink.com/fakeimage/medium.jpg",
          original: "https://fakelink.com/fakeimage/original.jpg",
        },
        name: "Name",
        rating: 5,
      },
      mocks: {
        $route,
      },
    });
  });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have some path", () => {
    expect(wrapper.vm.$route.path).toBe("/some/path");
  });
});
