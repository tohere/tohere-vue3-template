import { mount, VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect } from "vitest";
import Home from "../index.vue";

describe("Home Test", () => {
  let wrapper: VueWrapper;
  const props = {
    msg: "hello world",
  };
  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = mount(Home, {
      props,
    });
  });
  it("should render", () => {
    expect(wrapper.text()).toContain(props.msg);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("button click", async () => {
    const count = wrapper.find(".count");
    const btn = wrapper.find(".btn");
    expect(count.text()).toBe("0");
    await btn.trigger("click");
    expect(count.text()).toBe("1");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
