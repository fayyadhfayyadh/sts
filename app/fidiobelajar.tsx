import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons"; // Menggunakan AntDesign
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/button";
import { useRouter } from "expo-router";
import Beritalainnya from "@/components/beritalainnya";

const DetailScreen = () => {
  const navigation = useRouter();

  const [playing, setPlaying] = useState(false);
  const videoId = "hm-6Hg69v_o";

  const berita = [
    {  title: "Fundamental for fronend" ,date:"23 febuari 2023"},
    {  title: "using javascript for website" ,date:"23 febuari 2023"},
    {  title: "Mahir Menjadi Frontend" ,date:"23 febuari 2023"},
    {  title: "Mahir Menjadi Frontend" ,date:"23 febuari 2023"},
  ];

  return (
    <ScrollView style={tw`flex-1 bg-black p-4`}>
      {/* Header */}
      <View style={tw`p-5 bg-black flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate("/(tabs)/akademi")}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-3xl font-bold ml-4`}>Details</Text>
      </View>

      {/* Video */}
      <View style={tw`w-full aspect-video mt-6 rounded-lg overflow-hidden`}>
        <YoutubePlayer
          height={230}
          play={playing}
          videoId={videoId}
          onChangeState={(state) => {
            if (state === "ended") setPlaying(false);
          }}
        />
      </View>

      {/* Deskripsi */}
      <View style={tw`bg-gray-900 p-4 mt-4 rounded-lg`}>
        <Text style={tw`text-blue-400 text-xl font-bold`}>
          Mahir Menjadi Frontend Dev
        </Text>
        <Text style={tw`text-gray-300 mt-2`}>
          Bergabung dengan kelas mahir menjadi frontend dev, maka kamu sudah
          mendapat fundamental menjadi seorang programmer untuk memahami dasar-dasar
          pemrograman.
        </Text>
      </View>

    
      <View style={tw` bg-gray-400 rounded-lg mt-4`}>
        {berita.map((item, index) => (
          <Beritalainnya
            key={index}  
            title={item.title}
            date={item.date} 
          />
        ))}

      </View>


    
      <View style={tw`mt-5 justify-center items-center mb-10`}>
        <Button title="Ikuti kelas" bgbtn="[#4285F4]" bgtext="black"/>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
