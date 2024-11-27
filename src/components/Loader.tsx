import { ActivityIndicator, StyleSheet, View } from "react-native";
import { AppTheme, useAppTheme } from "../hooks/useAppTheme";

export default function Loader() {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).loadingIndicator}>
      <ActivityIndicator
        size="large"
        animating={true}
        color={theme.colors.primary}
        testID="loader-indicator"
      />
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    loadingIndicator: {
      // top: 0,
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
