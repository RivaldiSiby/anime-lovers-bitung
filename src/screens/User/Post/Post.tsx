import { View, Text, ScrollView } from "react-native";
import React from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import PostList from "../../../components/layouts/PostList";

export default function Post() {
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
      </View>
      <TabBarMenu active="post" />
    </View>
  );
}
