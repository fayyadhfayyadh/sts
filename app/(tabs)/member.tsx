import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, FontAwesome, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import EventButton from "@/components/eventbutton";
import FeatureItem from "@/components/fituritem";
import CourseCard from "@/components/cart";
import Banner from "@/components/banner";
import Programbelajar from "@/components/program";
import Member from "@/components/memberfitur";
import Harga from "@/components/paketharga";
import Button from "@/components/button";



const membership = [
  {  image: require('@/assets/images/g1.png'),des:"akses ke semua modul pembelajaran" },
  {  image: require('@/assets/images/g2.png'),des:"jalur penmpelajaran yg di rancang    " },
  {  image: require('@/assets/images/g3.png'),des:"mendapat sertifikat dari keuntungan" },
  {  image: require('@/assets/images/g4.png'),des:"mentoring selama 46x ,pertemuan  " },
];

const harga = [
  { label: "12 Bulan", harga:"Rp 120.000",harga2:"Rp120.000/bulan" },
  { label: "4 Bulan",  harga:"Rp 120.000",harga2:"Rp120.000/bulan"},
  { label: "1 Bulan", harga:"Rp 120.000",harga2:"Rp120.000/bulan"},
  
];





const HomeScreen = () => {
  return (
    <View style={tw`bg-black flex-1`}>
      <ScrollView>
      <SafeAreaView>

        <View style={tw`flex-col gap-3 mt-5 justify-center items-center`}>
          <Text style={tw`text-white text-8l`}>Start your 7-free trial today!</Text>
          <Text style={tw`text-white`}>buka fitur exklusif dengan techexperience membership</Text>
        </View>

        <View style={tw`bg-gray-300 h-455 rounded-10 mt-10`}>
          <View >
            <Text style={tw`text-6 font-bold justify-center items-center text-center mt-8`}>Kamu akan mendapatkan:</Text>
          </View>

        <View style={tw`mt-4`}>
        {membership.map((item, index) => (
          <Member
            key={index} 
            image={item.image} 
            des={item.des} 
          />
        ))}
      </View>

      <View style={tw`flex-row flex-wrap justify-between mt-9 gap-2`}>
          {harga.map((item, index) => (
        <Harga key={index} title={item.label}  harga={item.harga} harga2={item.harga2}/>
          ))}
        </View>

        <View style={tw`mt-5 justify-center items-center mb-10`}>
        <Button title="Ikuti kelas" bgbtn="[#4285F4]" bgtext="black"/>
      </View>
      
        </View>     
        

      </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
