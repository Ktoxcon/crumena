import { Button } from "./button";

export default {
  title: "Core Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "s", "auto", "m", "l"],
      control: { type: "select" },
    },
    as: {
      options: ["a", "button"],
      control: { type: "select" },
    },
    type: {
      options: ["submit", "reset", "button"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const CoreButton = Template.bind({});
CoreButton.args = {
  children: "Crumena",
  fullWidth: false,
  isLoading: false,
  disabled: false,
  type: "button",
};
