import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { darkTransparantColor } from "../../helpers/colors";
import { fontRobotoB } from "../../helpers/fonts";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase/config";

export default function Splash({ navigation }: any) {
  const user = getAuth(app).currentUser;
  console.log(user);

  useEffect(() => {
    setTimeout(() => {
      if (user && user?.displayName === null)
        return navigation.replace("StarterUser");
      if (user) return navigation.replace("Home");
      return navigation.replace("Starter");
    }, 2000);
  }, []);

  return (
    <View className="flex-1">
      <Image
        className="w-full h-full"
        source={require("../../assets/img/bgp.jpeg")}
      />
      <View
        className="absolute w-full h-full items-center justify-center"
        style={{ backgroundColor: darkTransparantColor }}
      >
        <Image className="" source={require("../../assets/img/logoicon.png")} />
        <Text style={fontRobotoB} className="text-white">
          Tunggu Sebentar Ya ...{" "}
        </Text>
      </View>
    </View>
  );
}
