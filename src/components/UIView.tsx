import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface ViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
function UIView({ children, style }: ViewProps) {
  const { colors } = useTheme();
  return (
    <View style={[{ backgroundColor: colors.background }, style]}>
      {children}
    </View>
  );
}

export default UIView;
