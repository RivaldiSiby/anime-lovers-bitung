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
import RoomChat from "../screens/User/ChatRoom/RoomChat";
import EditName from "../screens/User/Profile/Handler/EditName/EditName";
import EditPass from "../screens/User/Profile/Handler/EditPass/EditPass";
import AddRoom from "../screens/User/Chat/Add/AddRoom";
import AddPost from "../screens/User/Post/Add/AddPost";
import AddEvent from "../screens/User/Event/Add/AddEvent";

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
        name="RoomChat"
        component={RoomChat}
      />
      {/* profile screen */}

      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="Profile"
        component={Profile}
      />

      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="EditName"
        component={EditName}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="EditPass"
        component={EditPass}
      />

      {/* admin handler screen  */}
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="AddRoom"
        component={AddRoom}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="AddPost"
        component={AddPost}
      />
      <Stack.Screen
        options={{ headerShown: false, animation: "none" }}
        name="AddEvent"
        component={AddEvent}
      />
    </Stack.Navigator>
  );
}

export default Router;
