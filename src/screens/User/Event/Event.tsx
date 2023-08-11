import { View, Text } from "react-native";
import React from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import EventList from "../../../components/layouts/EventList";
import AddBox from "../../../components/layouts/AddBox";

export default function Event({ navigation }: any) {
  return (
    <View className="flex-1">
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        View Event
      </Text>
      <View className="flex-1 px-5">
        <EventList />

        <AddBox handler={() => navigation.navigate("AddEvent")} />
      </View>
      <TabBarMenu active="event" />
    </View>
  );
}
