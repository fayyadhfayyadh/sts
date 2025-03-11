import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Bannernews = ({ image,des,date}: any) => {
  return (
    <TouchableOpacity style={tw`rounded-xl overflow-hidden w-95 h-65 mb-3`}>
      <Image source={image} style={tw`w-full h-42`} />
      <View style={tw`p-3`}>
        <Text style={tw`text-blue-400 text-lg font-bold`}>{des}</Text>
        <Text style={tw`text-white `}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Bannernews;
