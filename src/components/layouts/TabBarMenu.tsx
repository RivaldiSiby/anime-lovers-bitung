import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { primaryColor, secondaryColor } from "../../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { fontRobotoM } from "../../helpers/fonts";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TabBarMenu({ active = "home" }: { active: string }) {
  const navigation: any = useNavigation();
  return (
    <View
      className="w-full h-[50px] flex-row"
      style={{ backgroundColor: primaryColor }}
    >
      {/* event */}
      {active === "event" ? (
        <View
          className=" w-[65px] h-[65px] mt-[-18px] justify-center items-center rounded-full "
          style={{
            borderWidth: 5,
            borderColor: "white",
            backgroundColor: primaryColor,
          }}
        >
          <MaterialIcons name="event-note" size={24} color={"white"} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Event")}
          className="flex-1 h-full justify-center items-center"
        >
          <MaterialIcons name="event-note" size={24} color={secondaryColor} />
          <Text
            style={{ ...fontRobotoM, color: secondaryColor }}
            className="text-[10px]"
          >
            Event
          </Text>
        </TouchableOpacity>
      )}
      {/* post */}
      {active === "post" ? (
        <View
          className=" w-[65px] h-[65px] mt-[-18px] justify-center items-center rounded-full "
          style={{
            borderWidth: 5,
            borderColor: "white",
            backgroundColor: primaryColor,
          }}
        >
          <MaterialIcons name="post-add" size={24} color={"white"} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Post")}
          className="flex-1 h-full justify-center items-center"
        >
          <MaterialIcons name="post-add" size={24} color={secondaryColor} />
          <Text
            style={{ ...fontRobotoM, color: secondaryColor }}
            className="text-[10px]"
          >
            Post
          </Text>
        </TouchableOpacity>
      )}

      {/* home */}
      {active === "home" ? (
        <View
          className=" w-[65px] h-[65px] mt-[-18px] justify-center items-center rounded-full "
          style={{
            borderWidth: 5,
            borderColor: "white",
            backgroundColor: primaryColor,
          }}
        >
          <MaterialIcons name="home" size={24} color={"white"} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="flex-1 h-full justify-center items-center"
        >
          <MaterialIcons name="home" size={24} color={secondaryColor} />
          <Text
            style={{ ...fontRobotoM, color: secondaryColor }}
            className="text-[10px]"
          >
            Home
          </Text>
        </TouchableOpacity>
      )}
      {/* chat */}
      {active === "chat" ? (
        <View
          className=" w-[65px] h-[65px] mt-[-18px] justify-center items-center rounded-full "
          style={{
            borderWidth: 5,
            borderColor: "white",
            backgroundColor: primaryColor,
          }}
        >
          <Ionicons name="chatbubbles" size={24} color={"white"} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          className="flex-1 h-full justify-center items-center"
        >
          <Ionicons name="chatbubbles" size={24} color={secondaryColor} />
          <Text
            style={{ ...fontRobotoM, color: secondaryColor }}
            className="text-[10px]"
          >
            Chat
          </Text>
        </TouchableOpacity>
      )}
      {/* profile */}
      {active === "profile" ? (
        <View
          className=" w-[65px] h-[65px] mt-[-18px] justify-center items-center rounded-full "
          style={{
            borderWidth: 5,
            borderColor: "white",
            backgroundColor: primaryColor,
          }}
        >
          <FontAwesome name="user" size={24} color={"white"} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          className="flex-1 h-full justify-center items-center"
        >
          <FontAwesome name="user" size={24} color={secondaryColor} />
          <Text
            style={{ ...fontRobotoM, color: secondaryColor }}
            className="text-[10px]"
          >
            Profile
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
