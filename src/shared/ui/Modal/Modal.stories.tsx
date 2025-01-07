import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        isOpen: true,
        children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Laboriosam sunt eius eligendi quia, expedita fugiat,
        sint tempore quidem veniam saepe, dicta at vitae impedit
        asperiores dolore dolores ipsam quos aperiam.`,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
