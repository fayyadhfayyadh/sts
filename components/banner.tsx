import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Banner = ({ image}: any) => {
  return (
    <TouchableOpacity style={tw`rounded-xl overflow-hidden w-95 h-40 mb-3`}>
      <Image source={image} style={tw`w-full h-32`} />
    </TouchableOpacity>
  );
};

export default Banner;
