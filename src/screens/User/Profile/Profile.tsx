import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";
import HeaderUser from "../../../components/layouts/HeaderUser";
import * as ImagePicker from "expo-image-picker";
import { resizeHanlder } from "../../../helpers/handlers/resizeHandler";
import {
  lightColor,
  primaryColor,
  secondaryColor,
} from "../../../helpers/colors";
import ButtonPress from "../../../components/layouts/ButtonPress";
import { logoutUserHandler } from "../../../service/fireauth/fireauth";
import ModalConfirm from "../../../components/modal/ModalConfirm";
import { Ionicons } from "@expo/vector-icons";

export default function Profile({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [img, setImg] = useState<any>(user?.photoURL);

  useEffect(() => {
    if (user === null) return navigation.replace("Splash");
  }, []);

  // modal
  const [active, setActive] = useState(false);

  const pickImg = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        return Alert.alert("OOPS!", "Premmision denied", [{ text: "ok" }]);
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        const uri: any = await resizeHanlder(result.assets[0].uri);

        setImg(uri.uri);
      }
    } catch (error) {}
  };

  const submitLogout = () => {
    logoutUserHandler()
      .then(() => navigation.replace("Splash"))
      .catch((err) => console.log(err));
  };

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      <ModalConfirm
        handler={submitLogout}
        text="Apakah Anda yakin untuk Logout ?"
        icon={<Ionicons name="warning-outline" size={100} color="black" />}
        active={active}
        setActive={setActive}
      />
      <HeaderUser img={img} handler={pickImg} />

      <View
        className="flex-1 px-5"
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: lightColor,
        }}
      >
        <ButtonPress
          fontBold={false}
          handler={() => navigation.navigate("EditName")}
          width="100%"
          label="Ubah Username"
          textColor={"white"}
          bgcolor={primaryColor}
        />
        <ButtonPress
          fontBold={false}
          handler={() => navigation.navigate("EditPass")}
          width="100%"
          label="Ubah Password"
          textColor={"white"}
          bgcolor={primaryColor}
        />
        <ButtonPress
          fontBold={false}
          handler={() => setActive(true)}
          width="100%"
          label="Logout"
          textColor={"white"}
          bgcolor={primaryColor}
        />
      </View>
      <TabBarMenu active="profile" />
    </View>
  );
}
