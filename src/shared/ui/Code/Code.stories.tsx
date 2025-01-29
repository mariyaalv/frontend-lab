import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Code } from "./Code";

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    children: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;",
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
