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



const events = ["Hackaton", "Design web", "Workshop", "Lomba"];

const banners = [
  {  image: require('@/assets/images/bn.png') },
  {  image: require('@/assets/images/th.jpg') },
];

const banners1 = [
  {  image: require('@/assets/images/dkv.jpg') },
  {  image: require('@/assets/images/tkj.jpg') },
];

const courses = [
  { 
    image: require('@/assets/images/dkv.jpg'), 
    title: "Fundamental Belajar Design", 
    description: "Belajar design tanpa gambar? Bisa!"
  },
  { 
    image: require('@/assets/images/tkj.jpg'), 
    title: "Fundamental Belajar MySQL", 
    description: "Belajar database dengan MySQL dari nol"
  },
  { 
    image: require('@/assets/images/tkj2.jpg'), 
    title: "Fundamental Belajar Jaringan", 
    description: "Belajar konsep jaringan komputer dasar"
  },
  { 
    image: require('@/assets/images/rpl.png'), 
    title: "Mahir Menjadi Frontend", 
    description: "Pelajari HTML, CSS, dan JavaScript!"
  },
];

const programs = [
  {  image: require('@/assets/images/g1.png') , title: "Mahir Menjadi Frontend"},
  {  image: require('@/assets/images/g2.png') ,  title: "Mahir Menjadi Frontend"},
  {  image: require('@/assets/images/g3.png') ,  title: "Mahir Menjadi Frontend"},
  {  image: require('@/assets/images/g4.png') ,  title: "Mahir Menjadi Frontend"},
];


const features = [
  { label: "Modul Akademi", icon: <FontAwesome5 name="book" size={20} color="white" /> },
  { label: "Community", icon: <FontAwesome name="users" size={20} color="white" /> },
  { label: "Event Hackton", icon: <MaterialIcons name="event" size={22} color="white" /> },
  { label: "Chat CS", icon: <AntDesign name="message1" size={20} color="white" /> },
];

const HomeScreen = () => {
  return (
    <View style={tw`bg-black flex-1 px-3`}>
      <ScrollView>
      <SafeAreaView>
       
        <View style={tw`flex-row justify-between`}>
          <Image style={tw`w-35 h-8 ml-5 mt-20`} source={require("@/assets/images/lg.png")} />
          <View style={tw`flex-row justify-between gap-4`}>
            <AntDesign style={tw`mt-20`} name="search1" size={24} color="white" />
            <AntDesign style={tw`mt-20`} name="bells" size={24} color="white" />
            <FontAwesome style={tw`mt-20`} name="user-circle-o" size={24} color="white" />
          </View>
        </View>

        
        <View style={tw`mt-9`}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image style={tw`w-95 h-40 ml-5 border rounded-2xl`} source={require("@/assets/images/bn.png")} />
            <Image style={tw`w-95 h-40 ml-5 border rounded-2xl`} source={require("@/assets/images/th.jpg")} />
            <Image style={tw`w-95 h-40 ml-5 border rounded-2xl`} source={require("@/assets/images/th.jpg")} />
          </ScrollView>
        </View>

       
        <View style={tw`flex-row flex-wrap justify-between mt-9 gap-2`}>
          {features.map((item, index) => (
        <FeatureItem key={index} label={item.label} icon={item.icon} />
          ))}
        </View>

        <View style={tw`flex-row justify-between ml-2 mr-2 `}>
          <Text style={tw`text-white text-4 font-bold`}>mau belajar apa</Text>
          <Text style={tw`text-white`}>Lihat lainnya</Text>
        </View>

      <View style={tw`flex-row flex-wrap justify-between mt-4`}>
        {courses.map((item, index) => (
          <CourseCard
            key={index} 
            image={item.image} 
            title={item.title} 
            description={item.description} 
          />
        ))}

      </View>

        <View style={tw`flex-row justify-between ml-2 mr-2 mt-4`}>
          <Text style={tw`text-white text-4 font-bold`}>Ikuti event terdekat</Text>
          <Text style={tw`text-white`}>Lihat lainnya</Text>
        </View>
       
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row gap-2 mt-4`}>
      {events.map((event, index) => (
        <EventButton key={index} label={event} />
      ))}
    </View>
    </ScrollView>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     
    <View style={tw`flex-row justify-between mt-6 gap-4`}>
        {banners.map((item, index) => (
          <Banner
            key={index} 
            image={item.image} 
          />
        ))}
      </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={tw`flex-row justify-between gap-4`}>
        {banners1.map((item, index) => (
          <Banner
            key={index} 
            image={item.image} 
          />
        ))}
      </View>
      </ScrollView>

      <View style={tw`flex-row justify-between ml-2 mr-2 mt-4`}>
          <Text style={tw`text-white text-4 font-bold`}>program Techperience</Text>
          <Text style={tw`text-white`}>Lihat lainnya</Text>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={tw`flex-row justify-between mt-4 gap-4`}>
        {programs.map((item, index) => (
          <Programbelajar
            key={index} 
            image={item.image} 
            title={item.title} 
          />
        ))}

      </View>
      </ScrollView>
      
      </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
