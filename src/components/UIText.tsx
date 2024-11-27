import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

type fontProps = {
  weight?: "bold" | "normal";
  children: string | ReactNode;
  style?: StyleProp<TextStyle>;
};
function UIText({ weight, children, style }: fontProps) {
  return (
    <Text
      style={[
        {
          fontFamily: weight === "bold" ? "Poppins-Bold" : "Poppins-Regular",
          // textTransform: "capitalize",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export default UIText;
