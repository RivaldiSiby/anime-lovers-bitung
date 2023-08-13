import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { fontOswaldB, fontRobotoB, fontRobotoM } from "../../helpers/fonts";
import { primaryColor } from "../../helpers/colors";
import LocationInfo from "../../screens/User/Event/components/LocationInfo";
import BoxImg from "../../screens/User/Event/components/BoxImg";
import { formatDuration } from "../../helpers/handlers/generateTime";
import { useSelector } from "react-redux";

export default function EventList({
  data,
  handler,
}: {
  data: any;
  handler: any;
}) {
  const [hadir, setHadir] = useState(0);
  const userdata = useSelector((state: any) => state.user.data);

  console.log(hadir);

  useEffect(() => {
    return () => {
      const check = data.menanggapi.find((f: any) => f.id === userdata.id);
      console.log("check tes");
      const payload = !check ? 0 : check.hadir ? 1 : 2;

      console.log(check.hadir);
      setHadir(payload);
    };
  }, []);

  console.log("hadir terubah");
  console.log(data.menanggapi.find((f: any) => f.id === userdata.id));
  return (
    <View className="w-full py-5 px-3 bg-white mt-3 rounded-lg ">
      {/* header */}
      <View className="flex-row">
        <Image
          className="w-[40px] h-[40px] rounded-full"
          source={{ uri: data.created_by.img }}
        />
        <View className="flex-1 pl-3">
          <Text style={{ ...fontRobotoB, color: primaryColor }}>
            {data.created_by.name}
          </Text>
          <Text className="text-[12px] text-red-400" style={{ ...fontRobotoM }}>
            LORD
          </Text>
        </View>
      </View>
      {/* main */}
      <Text className="pt-2" style={{ ...fontRobotoM, color: primaryColor }}>
        {data.title}
      </Text>
      {/* place */}
      <LocationInfo location={data.location} />
      {/* img */}
      <BoxImg img={data.img} date={data.date} />
      <Text className="pt-3 text-[12px]">{data.isi}</Text>
      <Text className="text-[10px] text-right pt-3">
        {formatDuration(data.created_at)}
      </Text>
      <View className="flex-row justify-between mt-5">
        <TouchableOpacity
          onPress={() => handler(true)}
          disabled={
            data.menanggapi.find((f: any) => f.id === userdata.id)?.hadir !==
            true
              ? false
              : true
          }
          className="h-[50px] w-[30%] rounded-lg justify-center items-center text-[12px]"
          style={{
            borderWidth: 3,
            borderColor: primaryColor,
            backgroundColor:
              data.menanggapi.find((f: any) => f.id === userdata.id)?.hadir ===
              true
                ? primaryColor
                : "white",
          }}
        >
          <Text
            className="text-[12px]"
            style={{
              ...fontRobotoB,
              color:
                data.menanggapi.find((f: any) => f.id === userdata.id)
                  ?.hadir === true
                  ? "white"
                  : primaryColor,
            }}
          >
            Hadir
          </Text>
          <Text
            className="text-[10px]"
            style={{
              ...fontRobotoB,
              color:
                data.menanggapi.find((f: any) => f.id === userdata.id)
                  ?.hadir === true
                  ? "white"
                  : primaryColor,
            }}
          >
            {data.menanggapi.filter((f: any) => f.hadir === true).length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            data.menanggapi.find((f: any) => f.id === userdata.id)?.hadir !==
            false
              ? false
              : true
          }
          onPress={() => handler(false)}
          className="h-[50px] w-[30%] rounded-lg justify-center items-center text-[12px]"
          style={{
            borderWidth: 3,
            borderColor: primaryColor,
            backgroundColor:
              data.menanggapi.find((f: any) => f.id === userdata.id)?.hadir ===
              false
                ? primaryColor
                : "white",
          }}
        >
          <Text
            className="text-[12px]"
            style={{
              ...fontRobotoB,
              color:
                data.menanggapi.find((f: any) => f.id === userdata.id)
                  ?.hadir === false
                  ? "white"
                  : primaryColor,
            }}
          >
            Tidak Hadir
          </Text>
          <Text
            className="text-[10px]"
            style={{
              ...fontRobotoB,
              color:
                data.menanggapi.find((f: any) => f.id === userdata.id)
                  ?.hadir === false
                  ? "white"
                  : primaryColor,
            }}
          >
            {data.menanggapi.filter((f: any) => f.hadir === false).length}
          </Text>
        </TouchableOpacity>
        <View
          className="h-[50px] w-[30%] rounded-lg justify-center items-center text-[12px]"
          style={{ borderWidth: 3, borderColor: primaryColor }}
        >
          <Text
            className="text-[12px]"
            style={{ ...fontRobotoB, color: primaryColor }}
          >
            Menanggapi
          </Text>
          <Text
            className="text-[10px]"
            style={{ ...fontRobotoB, color: primaryColor }}
          >
            {data.menanggapi.length}
          </Text>
        </View>
      </View>
    </View>
  );
}
