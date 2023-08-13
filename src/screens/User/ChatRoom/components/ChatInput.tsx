import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { secondaryColor } from "../../../../helpers/colors";
import InputRadio from "../../../../components/forms/InputRadio";

export default function ChatInput({
  val,
  setVal,
  handler,
  loading,
}: {
  val: string;
  setVal: any;
  handler: any;
  loading: boolean;
}) {
  return (
    <View className="w-full bg-white flex-row p-3 py-5 ">
      <View className=" flex-1">
        <InputRadio val={val} setVal={setVal} />
      </View>
      {!loading ? (
        <TouchableOpacity
          onPress={() => handler()}
          className="ml-5 justify-end"
        >
          <MaterialCommunityIcons
            name="send-circle"
            size={30}
            color={secondaryColor}
          />
        </TouchableOpacity>
      ) : (
        <ActivityIndicator
          className="ml-5"
          size="small"
          color={secondaryColor}
        />
      )}
    </View>
  );
}
