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




const courses = [
  { 
    image: require('@/assets/images/dkv.jpg'), 
    title: "Fundamental Belajar Design", 
    description: "Belajar design tanpa gambar? Bisa!",
    rute: "fidiobelajar"

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
  { 
    image: require('@/assets/images/tkj.jpg'), 
    title: "Fundamental Belajar MySQL", 
    description: "Belajar database dengan MySQL dari nol"
  },
  { 
    image: require('@/assets/images/dkv.jpg'), 
    title: "Fundamental Belajar Design", 
    description: "Belajar design tanpa gambar? Bisa!"
  },
];



const HomeScreen = () => {
  return (
    <View style={tw`bg-black flex-1 px-3`}>
      <ScrollView>
      <SafeAreaView>

        <View style={tw`flex-row gap-3 mt-5`}>
          <FontAwesome5 style={tw`mt-2`} name="book-open" size={30} color="white"/>
          <Text style={tw`text-white text-8   font-bold`}>Akademi</Text>
        </View>

      <View style={tw`flex-row flex-wrap justify-between mt-7`}>
        {courses.map((item, index) => (
          <CourseCard
            key={index} 
            image={item.image} 
            title={item.title} 
            description={item.description} 
            rute={item.rute}

          />
        ))}

      </View>
      </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
