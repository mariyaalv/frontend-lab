import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

export default {
    title: "widjet/PageError",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {};

export const Dark = Template.bind({});
Dark.args = {};

// переопределили тему локально
Dark.decorators = [ThemeDecorator(Theme.DARK)];
