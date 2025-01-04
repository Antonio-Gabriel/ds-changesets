import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Default Input",
    type: "text",
    placeholder: "Type here...",
  },
};

export const Password: Story = {
  args: {
    label: "Password Input",
    type: "password",
    placeholder: "Enter your password...",
  },
};

export const Email: Story = {
  args: {
    label: "Email Input",
    type: "email",
    placeholder: "example@domain.com",
  },
};
