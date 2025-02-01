import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    comments: [
      {
        id: "1",
        text: "helloy",
        user: {
          id: "1",
          username: "Maria",
        },
      },
      {
        id: "2",
        text: "helloy",
        user: {
          id: "2",
          username: "Karina",
        },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({}),
];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [
  StoreDecorator({}),
];
