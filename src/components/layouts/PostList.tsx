import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { fontOswaldB, fontRobotoB, fontRobotoM } from "../../helpers/fonts";
import { primaryColor } from "../../helpers/colors";
import { formatDuration } from "../../helpers/handlers/generateTime";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase/config";

export default function PostList(data: any) {
  return (
    <View className="w-full py-5 px-3 bg-white mt-3 rounded-lg">
      {/* header */}
      <View className="flex-row">
        <Image
          className="w-[40px] h-[40px] rounded-full"
          source={{ uri: data?.data?.created_by?.img }}
        />
        <View className="flex-1 pl-3">
          <Text style={{ ...fontRobotoB, color: primaryColor }}>
            {data?.data?.created_by?.name}
          </Text>
          <Text className="text-[12px] text-red-400" style={{ ...fontRobotoM }}>
            LORD
          </Text>
        </View>
      </View>
      {/* main */}
      {data?.data?.img !== "" ? (
        <View className=" w-full h-[200px] mt-5">
          <Image source={{ uri: data?.data?.img }} className="w-full h-full" />
        </View>
      ) : null}
      <Text className="pt-3 text-[12px]">{data?.data?.isi}</Text>
      <Text className="text-[10px] text-right pt-3">
        {formatDuration(data?.data?.created_at)}
      </Text>
    </View>
  );
}
