import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./src/router/Router";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.otf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.otf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.otf"),
    "Oswald-Bold": require("./src/assets/fonts/Oswald-Bold.otf"),
    "Oswald-Medium": require("./src/assets/fonts/Oswald-Medium.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={"#3E3D3D"} />
      <AppRouter />
    </>
  );
}
