import { lazy } from "react";

export default {
  button: {
    label: "Button",
    component: lazy(() => import("@preview/components/button/Button")),
    setting: () => import("@preview/components/button/buttonConfig.json"),
  },
};

export const loadSettingSchema = async (component) => {
  if (component?.setting) {
    const response = await component?.setting();
    return response.default;
  }
  return null;
};
