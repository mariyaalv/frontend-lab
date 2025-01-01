import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

// используем замыкание для прокидывания темы
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);

// аналогично
// export const ThemeDecorator = (story: () => Story) => {
//   return (
//     <div>
//       {story()}
//     </div>
//   )
// };
