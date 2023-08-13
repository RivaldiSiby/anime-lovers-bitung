import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { darkTransparantColor, primaryColor } from "../../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { fontRobotoB, fontRobotoM } from "../../helpers/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase/config";

export default function HeaderUser(payload: { handler: any; img: any }) {
  const user = getAuth(app).currentUser;
  const { handler, img } = payload;
  return (
    <View
      className="w-full h-2/6 justify-center items-center"
      style={{ backgroundColor: primaryColor }}
    >
      <TouchableOpacity
        onPress={() => handler()}
        className="w-[85px] h-[85px] bg-white rounded-full items-center justify-center mb-5"
      >
        {img === "" ? (
          <MaterialIcons
            name="add-photo-alternate"
            size={35}
            color={primaryColor}
          />
        ) : (
          <>
            <View className="absolute z-20 w-[30px] h-[30px] bg-white items-center justify-center rounded-full top-0 right-0">
              <MaterialCommunityIcons
                name="square-edit-outline"
                size={20}
                color={primaryColor}
              />
            </View>
            <Image
              className="w-full h-full rounded-full"
              source={{ uri: img }}
            />
          </>
        )}
      </TouchableOpacity>
      <Text className="text-white text-[30px]" style={fontRobotoB}>
        Hi, {user?.displayName}
      </Text>
      <Text className="text-white text-[12px]" style={fontRobotoM}>
        {user?.email}
      </Text>
      <Image
        className="absolute right-0 top-0"
        source={require("../../assets/img/layout/layout1.png")}
      />
      <Image
        className="absolute left-0 top-0"
        source={require("../../assets/img/layout/layout2.png")}
      />
    </View>
  );
}
