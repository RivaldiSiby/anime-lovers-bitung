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
import { Entypo } from "@expo/vector-icons";

export default function AddEvent() {
  const [payload, setPayload] = useState({
    isi: "",
    img: "",
    title: "",
    location: "",
    date: "",
  });

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      <HeaderBackHandler label="Buat Event" />
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
        <InputForm
          secure={false}
          setVal={(val: string) => setPayload({ ...payload, location: val })}
          type="location"
          val={payload.location}
          placeholder={"Lokasi ..."}
          icon={<Entypo name="location" size={24} color={primaryColor} />}
        />
        <InputForm
          secure={false}
          setVal={(val: string) => setPayload({ ...payload, date: val })}
          type="date"
          val={payload.date}
          placeholder={"Kapan Event dilaksanakan ? ..."}
          icon={
            <MaterialIcons name="date-range" size={24} color={primaryColor} />
          }
        />
        <InputFormArea />
        <InputImg
          text="Upload Gambar Event ..."
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
