import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

export default {
    title: "widjet/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {};

export const Dark = Template.bind({});
Dark.args = {};

// переопределили тему локально
Dark.decorators = [ThemeDecorator(Theme.DARK)];
