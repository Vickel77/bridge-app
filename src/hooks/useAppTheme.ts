import { useTheme } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../util/theme";
type ThemeType = ReactNavigation.Theme & AppTheme;
export type AppTheme = typeof lightTheme;
export const useAppTheme = (): ThemeType => useTheme() as any;
