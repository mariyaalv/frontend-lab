import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

// используем замыкание для прокидывания темы
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);

// аналогично
// export const ThemeDecorator = (story: () => Story) => {
//   return (
//     <div>
//       {story()}
//     </div>
//   )
// };
