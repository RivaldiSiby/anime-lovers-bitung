import { View, Text } from "react-native";
import React, { useState } from "react";
import { lightColor, primaryColor } from "../../../../../helpers/colors";
import ModalConfirm from "../../../../../components/modal/ModalConfirm";
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { app } from "../../../../../config/firebase/config";
import HeaderProfile from "../../../../../components/layouts/HeaderProfile";
import ButtonPress from "../../../../../components/layouts/ButtonPress";
import InputForm from "../../../../../components/forms/InputForm";
import { FontAwesome } from "@expo/vector-icons";

export default function EditName() {
  const user: any = getAuth(app).currentUser;
  const [img, setImg] = useState<any>(user?.photoURL);
  const [username, setUsername] = useState("");

  // modal
  const [active, setActive] = useState(false);
  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      <ModalConfirm
        handler={() => console.log("test")}
        text="Apakah Anda yakin untuk Logout ?"
        icon={<Ionicons name="warning-outline" size={100} color="black" />}
        active={active}
        setActive={setActive}
      />
      <HeaderProfile img={img} />

      <View
        className="flex-1 px-5"
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: lightColor,
        }}
      >
        <InputForm
          secure={false}
          setVal={setUsername}
          type="username"
          val={username}
          placeholder={"Username ..."}
          icon={<FontAwesome name="user" size={22} color={primaryColor} />}
        />
        <ButtonPress
          fontBold={false}
          handler={() => console.log("Ubah Username")}
          width="100%"
          label="Submit"
          textColor={"white"}
          bgcolor={primaryColor}
        />
      </View>
    </View>
  );
}
