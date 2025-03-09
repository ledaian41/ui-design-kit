import { lazy } from "react";

export default {
  badge: {
    label: "Badge",
  },
  button: {
    label: "Button",
    component: lazy(() => import("@preview/components/button/Button")),
    setting: () => import("@preview/components/button/buttonConfig.json"),
  },
  card: {
    label: "Card",
  },
  chart: {
    label: "Chart",
  },
  progress: {
    label: "Progress",
  },
  slider: {
    label: "Slider",
  },
  tabs: {
    label: "Tabs",
  },
  toggle: {
    label: "Toggle",
  },
  tooltip: {
    label: "Tooltip",
  },
};

export const loadSettingSchema = async (component) => {
  if (component?.setting) {
    const response = await component?.setting();
    return response.default;
  }
  return null;
};
