import Login from "../screens/Auth/Login/Login";
import Splash from "../screens/Splash/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starter from "../screens/Starter/Starter";
import Daftar from "../screens/Auth/Daftar/Daftar";
import Home from "../screens/User/Home/Home";
import StarterUser from "../screens/User/Starter/StarterUser";
import Post from "../screens/User/Post/Post";
import Event from "../screens/User/Event/Event";
import Chat from "../screens/User/Chat/Chat";
import Profile from "../screens/User/Profile/Profile";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ animation: "fade" }}
    >
      {/* starter */}

      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Starter"
        component={Starter}
      />

      {/* auth screen */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Daftar"
        component={Daftar}
      />
      {/* user screen */}
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StarterUser"
        component={StarterUser}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="Post"
        component={Post}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="Event"
        component={Event}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="Chat"
        component={Chat}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export default Router;
