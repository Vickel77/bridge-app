import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/router/AppRouter";
import { darkTheme, lightTheme } from "./src/util/theme";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  const colorScheme = useColorScheme();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? darkTheme : lightTheme}
    >
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
          <AppRouter />
        </SafeAreaView>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
