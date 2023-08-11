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

export default function AddRoom() {
  const [payload, setPayload] = useState({
    title: "",
    img: "",
  });

  console.log(payload);

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      <HeaderBackHandler label="Buat Room Chat" />
      <View
        className="flex-1 rounded-t-[30px] px-5"
        style={{ backgroundColor: lightColor }}
      >
        <InputForm
          secure={false}
          setVal={(val: string) => setPayload({ ...payload, title: val })}
          type="title"
          val={payload.title}
          placeholder={"Judul ..."}
          icon={<MaterialIcons name="title" size={24} color={primaryColor} />}
        />
        <InputImg
          text="Masukan Gambar Chat Room"
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
