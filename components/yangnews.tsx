import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRouter } from "expo-router";

const News = ({title,date, rute }: any) => {
  const navigation = useRouter();

  return (
    <View style={tw`flex-row`}>
    <View style={tw`bg-gray-600 rounded-xl h-20 overflow-hidden w-22 ml-2 mt-3 mb-4`} ></View>
      <View style={tw`p-3`}>
        <Text style={tw`text-blue-400 text-lg font-bold text-center`}>{title}</Text>
        <Text style={tw`text-gray-400 `}>{date}</Text>
      </View>

    </View>
    
  );
};

export default News;
