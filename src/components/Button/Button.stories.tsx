import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    variant: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "Secondary",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Description Button",
    variant: "Primary",
    description: 'Description'
  },
};
