import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Member = ({ image,des}: any) => {
  return (
    <TouchableOpacity style={tw`rounded-xl overflow-hidden mb-3`}>
      <View style={tw`flex-row mt-3 justify-center items-center`}>
        <View style={tw`bg-blue-100 rounded-20 w-17 h-17`}>
      <Image source={image} style={tw`w-15 h-15`} />
      </View>
        <Text style={tw`text-4 ml-4 w-60`}>{des}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Member;
