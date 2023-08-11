import { View, Text, ScrollView } from "react-native";
import React from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import PostList from "../../../components/layouts/PostList";
import AddBox from "../../../components/layouts/AddBox";

export default function Post({ navigation }: any) {
  return (
    <View className="flex-1">
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        View Post
      </Text>
      <View className="flex-1 px-5 pb-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          <PostList />
          <PostList />
          <PostList />
          <PostList />
        </ScrollView>
        <AddBox handler={() => navigation.navigate("AddPost")} />
      </View>
      <TabBarMenu active="post" />
    </View>
  );
}
