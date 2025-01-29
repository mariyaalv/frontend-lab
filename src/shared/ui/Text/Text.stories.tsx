import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Header Header Header",
  text: "Description Description Description",
};

export const Error = Template.bind({});
Error.args = {
  title: "Header Header Header",
  text: "Description Description Description",
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: "Header Header Header",
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: "Description Description Description",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Header Header Header",
  text: "Description Description Description",
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: "Header Header Header",
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: "Description Description Description",
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: "Header Header Header",
  text: "Description Description Description",
  size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: "Header Header Header",
  text: "Description Description Description",
  size: TextSize.M,
};
