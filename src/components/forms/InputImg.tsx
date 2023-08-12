import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { primaryColor, secondaryColor } from "../../helpers/colors";
import { fontRobotoR } from "../../helpers/fonts";
import { resizeHanlder } from "../../helpers/handlers/resizeHandler";
import * as ImagePicker from "expo-image-picker";

export default function InputImg({
  text,
  img,
  setImg,
}: {
  text: string;
  img: any;
  setImg: any;
}) {
  const pickImg = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        return Alert.alert("OOPS!", "Premmision denied", [{ text: "ok" }]);
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        const uri: any = await resizeHanlder(result.assets[0].uri);

        setImg(uri.uri);
      }
    } catch (error) {}
  };
  console.log(img);
  return (
    <View
      className="w-full h-[200px] bg-white rounded-xl mt-5 items-center justify-center"
      style={{ borderWidth: 1, borderColor: primaryColor }}
    >
      <TouchableOpacity
        onPress={() => pickImg()}
        className="items-center w-full h-full"
      >
        {img === "" ? (
          <>
            <MaterialIcons
              name="add-photo-alternate"
              size={100}
              color={secondaryColor}
            />
            <Text className="text-[12px]" style={fontRobotoR}>
              {text}
            </Text>
          </>
        ) : (
          <Image source={{ uri: img }} className="w-full h-full rounded-xl" />
        )}
      </TouchableOpacity>
    </View>
  );
}
