import { View, Text, Modal } from "react-native";
import React from "react";
import { darkTransparantColor, primaryColor } from "../../helpers/colors";
import { fontRobotoB, fontRobotoM } from "../../helpers/fonts";
import ButtonPress from "../layouts/ButtonPress";
import ButtonPressOutline from "../layouts/ButtonPressOutline";

export default function ModalConfirm(payload: {
  active: boolean;
  setActive: any;
  handler: any;
  text: string;
  icon: any;
}) {
  const { active, setActive, handler, text, icon } = payload;
  return (
    <Modal visible={active} transparent={true} animationType="fade">
      <View
        className="flex-1 opacity-70"
        style={{ backgroundColor: darkTransparantColor }}
      ></View>
      <View className="absolute z-20 w-full h-full items-center justify-center">
        <View className="w-[90%] m-h-2/6 py-5 bg-white rounded-xl shadow items-center justify-center px-5">
          {icon}
          <Text
            style={{ ...fontRobotoM, color: primaryColor }}
            className="text-center pt-3"
          >
            {text}
          </Text>
          <View className="flex-row justify-between w-full mt-5">
            <ButtonPress
              fontBold={false}
              handler={() => handler()}
              width="45%"
              label="Ya"
              textColor={"white"}
              bgcolor={primaryColor}
            />
            <ButtonPressOutline
              fontBold
              handler={() => setActive(false)}
              width="45%"
              label="Batal"
              textColor={primaryColor}
              borderColor={primaryColor}
            />
          </View>
        </View>
        <View></View>
      </View>
    </Modal>
  );
}
