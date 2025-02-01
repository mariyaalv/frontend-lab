import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    comment: {
      id: "1",
      text: "helloy",
      user: {
        id: "1",
        username: "Maria",
      },
    },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
