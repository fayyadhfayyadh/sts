import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useRouter } from 'expo-router'

const CourseCard = ({ image, title, description,rute }: any) => {
  const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-gray-800 rounded-xl overflow-hidden w-[48%] mb-4`}  onPress={ () => navigation.navigate(rute)}>
      <Image source={image} style={tw`w-full h-32`} />
      <View style={tw`p-4`}>
        <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
        <Text style={tw`text-gray-400 text-sm mt-1`}>{description}</Text>
        <Text style={tw`text-blue-400 mt-2 font-semibold`}>Mulai Belajar ⟶</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
