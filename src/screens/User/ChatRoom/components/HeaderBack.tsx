import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fontOswaldM } from "../../../../helpers/fonts";
import { Entypo } from "@expo/vector-icons";
import { primaryColor } from "../../../../helpers/colors";
import { useNavigation } from "@react-navigation/native";
import { app } from "../../../../config/firebase/config";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

export default function HeaderBack({
  label,
  handler,
  lock,
}: {
  label: string;
  handler: any;
  lock: boolean;
}) {
  const navigation: any = useNavigation();
  const userdata = useSelector((state: any) => state.user.data);
  return (
    <View style={{ backgroundColor: primaryColor }}>
      <View className="w-full absolute py-5 px-3 flex-row justify-between z-20">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-[30px] z-20"
        >
          <Entypo name="chevron-left" size={24} color={"white"} />
        </TouchableOpacity>
        {userdata.role === "admin" ? (
          <TouchableOpacity onPress={() => handler()} className="w-[30px] z-20">
            <Entypo
              name={!lock ? "lock-open" : "lock"}
              size={20}
              color={"white"}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
      <Text className="w-full text-white text-center my-5" style={fontOswaldM}>
        {label}
      </Text>
    </View>
  );
}
