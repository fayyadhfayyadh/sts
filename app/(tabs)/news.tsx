import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import tw from "twrnc";
import { AntDesign, EvilIcons } from "@expo/vector-icons"; // Menggunakan AntDesign
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/button";
import { useRouter } from "expo-router";
import Beritalainnya from "@/components/beritalainnya";
import News from "@/components/yangnews";
import Bannernews from "@/components/bannernews";

const DetailScreen = () => {
  const navigation = useRouter();


  const banners = [
    {  image: require('@/assets/images/gg.png'),des:"india sebar luaskan pembelajaran devlopment ke seluruh dunia dengan gratis",date:"29 april 2023" },
    {  image: require('@/assets/images/th.jpg'),des:"india sebar luaskan pembelajaran devlopment ke seluruh dunia dengan gratis",date:"29 april 2023",date:"29 april 2023" },
  ];

  const news = [
    {  title: "Fundamental for fronend" ,date:"23 febuari 2023"},
    {  title: "using javascript for website" ,date:"23 febuari 2023"},
    {  title: "Mahir Menjadi Frontend" ,date:"23 febuari 2023"},
    {  title: "Mahir Menjadi Frontend" ,date:"23 febuari 2023"},
  ];

  return (
    <ScrollView style={tw`flex-1 bg-black p-4`}>
      <View style={tw`p-5 bg-black flex-row items-center`}>
        <Text style={tw`text-white text-3xl font-bold ml-4`}>News</Text>
      </View>

      <View style={tw`bg-black justify-center p-3 mt-5 h-15 rounded-lg border border-gray-400`}>
        <View style={tw`flex-row justify-between `}>
            <Text style={tw`text-gray-300 `}>mau cari beripa apa hari ini</Text>
            <EvilIcons name="search" color={"white"} size={25}/>
        </View>

      </View>

     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={tw`flex-row justify-between mt-6 gap-4`}>
        {banners.map((item, index) => (
          <Bannernews
            key={index} 
            image={item.image} 
            des={item.des} 
            date={item.date} 
          />
        ))}
      </View>
      </ScrollView>

    
      <View style={tw`rounded-lg mt-4 mb-9`}>
        {news.map((item, index) => (
          <News
            key={index}  
            title={item.title}
            date={item.date} 
          />
        ))}

      </View>

    </ScrollView>
  );
};

export default DetailScreen;
