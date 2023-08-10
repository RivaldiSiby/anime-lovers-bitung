import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { primaryColor } from "../../helpers/colors";
import { fontOswaldB, fontRobotoB } from "../../helpers/fonts";

export default function ButtonPressOutline(payload: {
  borderColor: string;
  textColor: string;
  label: any;
  width: string;
  handler: any;
  fontBold: boolean;
}) {
  const {
    borderColor = primaryColor,
    textColor = "white",
    label = "Button",
    width = "300",
    handler = false,
    fontBold = false,
  } = payload;

  const wFix: any = width.split("%")[1] === "" ? width : parseFloat(width);
  const fontFix: any = fontBold ? { ...fontOswaldB } : { ...fontRobotoB };
  return (
    <TouchableOpacity
      onPress={() => (!handler ? "" : handler())}
      className="w-full h-[50px] items-center justify-center rounded-full shadow-lg mt-5"
      style={{
        borderWidth: 2,
        borderColor: borderColor,
        width: wFix,
      }}
    >
      <Text style={{ ...fontFix, color: textColor }}>{label}</Text>
    </TouchableOpacity>
  );
}
