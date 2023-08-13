import { View, Text } from "react-native";
import React from "react";
import { fontRobotoM } from "../../../../helpers/fonts";
import { primaryColor } from "../../../../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function LocationInfo({ location }: { location: string }) {
  return (
    <View className="flex-row items-center  mt-2 pr-3">
      <View className="h-[30px] justify-center mr-2">
        <MaterialIcons name="location-pin" size={20} color={primaryColor} />
      </View>
      <Text
        className=" text-[12px] "
        style={{ ...fontRobotoM, color: primaryColor }}
      >
        {location}
      </Text>
    </View>
  );
}
