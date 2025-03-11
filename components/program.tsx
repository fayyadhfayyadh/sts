import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Programbelajar = ({ image, title, description }: any) => {
  return (
    <TouchableOpacity style={tw`bg-gray-800 rounded-xl overflow-hidden w-40  mb-4 border-r-8 border-blue-400 items-center`}>
    <Image source={image} style={tw`w-20 h-20 align-self-center`} />
    <View>
      <Text style={tw`text-white text-lg font-bold mt-2`}>{title}</Text>
    </View>
  </TouchableOpacity>
  
  );
};

export default Programbelajar;
