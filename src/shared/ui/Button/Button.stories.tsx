import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSize, ButtonTheme } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        children: "Text",
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    size: ButtonSize.L,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    size: ButtonSize.M,
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};

// переопределили тему локально
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,

};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,

};
