import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors.light,
  },
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors.dark,
  },
};
