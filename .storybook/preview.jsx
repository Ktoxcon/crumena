import { useEffect } from "react";
import "../src/theme/globals.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story, context) => {
  useEffect(() => {
    document.body.dataset.theme = context.globals.theme;
  }, [context.globals.theme]);

  return (
    <>
      <Story />
    </>
  );
};

export const decorators = [withThemeProvider];
