import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { fontRobotoM } from "../../helpers/fonts";
import { primaryColor, secondaryColor } from "../../helpers/colors";

export default function InputRadio() {
  const [height, setHeight] = useState(30);
  return (
    <View className="w-full ">
      <TextInput
        className="  rounded-full px-3 text-[12px] py-2"
        multiline
        placeholder="Buat Pesan ..."
        style={{
          ...fontRobotoM,
          color: primaryColor,
          height: height,
          borderWidth: 1,
          borderColor: secondaryColor,
        }}
        onContentSizeChange={(e) =>
          e.nativeEvent.contentSize.height >= 70
            ? ""
            : setHeight(e.nativeEvent.contentSize.height)
        }
      />
    </View>
  );
}
