import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
      data: {
        username: "admin",
        age: 24,
        country: Country.Russia,
        lastname: "abc",
        city: "abc",
        currency: Currency.RUB,
        avatar,
      },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
  error: "true",
};
