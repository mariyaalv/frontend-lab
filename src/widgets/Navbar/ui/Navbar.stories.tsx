import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

export default {
    title: "widjet/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {};

export const Dark = Template.bind({});
Dark.args = {};

// переопределили тему локально
Dark.decorators = [ThemeDecorator(Theme.DARK)];
