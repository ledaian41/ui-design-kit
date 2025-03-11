import { lazy } from "react";

export default {
  badge: {
    label: "Badge",
    component: lazy(() => import("@design/components/badge/Badge")),
    new: true,
  },
  button: {
    label: "Button",
    component: lazy(() => import("@design/components/button/Button")),
    setting: () => import("@design/components/button/buttonConfig.json"),
    new: true,
  },
  card: {
    label: "Card",
    disabled: true,
  },
  chart: {
    label: "Chart",
    disabled: true,
  },
  progress: {
    label: "Progress",
    component: lazy(() => import("@design/components/progress/Progress")),
    setting: () => import("@design/components/progress/ProgressConfig.json"),
    new: true,
  },
  slider: {
    label: "Slider",
    disabled: true,
  },
  tabs: {
    label: "Tabs",
    disabled: true,
  },
  toggle: {
    label: "Toggle",
    disabled: true,
  },
};

export const loadSettingSchema = async (component) => {
  if (component?.setting) {
    const response = await component?.setting();
    return response.default;
  }
  return null;
};
