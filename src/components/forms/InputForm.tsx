import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { primaryColor, secondaryColor } from "../../helpers/colors";
import { fontRobotoM } from "../../helpers/fonts";
import { Ionicons } from "@expo/vector-icons";

export default function InputForm(payload: {
  placeholder: string;
  val: string;
  setVal: any;
  icon: any;
  secure: boolean;
  type: string;
}) {
  const { placeholder, val, setVal, icon, secure = false, type } = payload;

  const [hide, setHide] = useState<boolean>(secure);
  return (
    <View
      className="w-full mt-5 border h-[50px] rounded-full shadow-sm bg-white flex-row items-center"
      style={{ borderWidth: 1, borderColor: primaryColor }}
    >
      <View className="w-[50px]  items-center opacity-80">{icon}</View>
      <TextInput
        secureTextEntry={hide}
        value={val}
        onChangeText={(text) => setVal(text, type)}
        placeholder={placeholder}
        placeholderTextColor={secondaryColor}
        style={{ ...fontRobotoM, color: primaryColor }}
        className="flex-1  mr-2"
      />
      {secure ? (
        <>
          {hide ? (
            <TouchableOpacity
              onPress={() => setHide(false)}
              className="w-[30px] items-left opacity-80"
            >
              <Ionicons name="eye" size={20} color={primaryColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setHide(true)}
              className="w-[30px] items-left opacity-80"
            >
              <Ionicons name="eye-off" size={20} color={primaryColor} />
            </TouchableOpacity>
          )}
        </>
      ) : (
        ""
      )}
    </View>
  );
}
