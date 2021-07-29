import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

// Global CSS
import '../node_modules/tailwindcss/base.css';
import '../node_modules/tailwindcss/tailwind.css';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}
