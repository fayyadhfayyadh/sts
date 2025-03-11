import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const EventButton = ({ label }: { label: string }) => {
  return (
    <TouchableOpacity style={tw`border border-white px-4 py-2 rounded-lg`}>
      <Text style={tw`text-white font-bold`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default EventButton;
