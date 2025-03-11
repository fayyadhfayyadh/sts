import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

interface FeatureItemProps {
  label: string;
  icon: JSX.Element;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={tw`w-[48%] border-l-8 border-blue-400 bg-gray-800 p-4 rounded-xl flex-row items-center mb-4`}
    >
      {icon}
      <Text style={tw`text-white text-lg ml-2`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FeatureItem;
