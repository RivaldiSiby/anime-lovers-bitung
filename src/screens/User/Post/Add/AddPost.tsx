import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  lightColor,
  primaryColor,
  secondaryColor,
} from "../../../../helpers/colors";
import HeaderBackHandler from "../../../../components/layouts/HeaderBackHandler";
import ButtonPress from "../../../../components/layouts/ButtonPress";
import InputForm from "../../../../components/forms/InputForm";
import { MaterialIcons } from "@expo/vector-icons";
import InputImg from "../../../../components/forms/InputImg";
import InputRadio from "../../../../components/forms/InputRadio";
import InputFormArea from "../../../../components/forms/InputFormArea";

export default function AddPost() {
  const [payload, setPayload] = useState({
    isi: "",
    img: "",
  });

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      <HeaderBackHandler label="Buat Postingan" />
      <View
        className="flex-1 rounded-t-[30px] px-5"
        style={{ backgroundColor: lightColor }}
      >
        <InputFormArea />
        <InputImg
          text="Upload jika ingin menambah gambar"
          img={""}
          handler={() => console.log("Add img")}
        />
        <ButtonPress
          fontBold={false}
          handler={() => console.log("Add Data")}
          width="100%"
          label="Submit"
          textColor={"white"}
          bgcolor={primaryColor}
        />
      </View>
    </View>
  );
}
