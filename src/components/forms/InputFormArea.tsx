import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { fontRobotoM } from "../../helpers/fonts";
import { primaryColor, secondaryColor } from "../../helpers/colors";

export default function InputFormArea({
  val,
  setVal,
}: {
  val: string;
  setVal: any;
}) {
  const [height, setHeight] = useState(40);
  return (
    <View className="w-full mt-5">
      <TextInput
        className="bg-white rounded-xl px-3 text-[14px] py-4"
        multiline
        value={val}
        onChangeText={(text) => setVal(text)}
        placeholder="Isi Postingan..."
        style={{
          ...fontRobotoM,
          color: primaryColor,
          height: height,
          borderWidth: 1,
          borderColor: secondaryColor,
        }}
        onContentSizeChange={(e) =>
          e.nativeEvent.contentSize.height >= 100
            ? ""
            : setHeight(e.nativeEvent.contentSize.height)
        }
      />
    </View>
  );
}
