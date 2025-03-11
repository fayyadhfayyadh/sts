import SurveyOption from "../components/SurveyOption";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



import tw from "twrnc";

const options = ["Co-Founders", "Instagram", "Tiktok", "Youtube", "Website", "Lainnya"];

const SurveyScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SafeAreaView style={tw`flex-1 bg-black p-4`}>
      <Text style={tw`text-white text-lg mb-4`}>
        Bagaimana kamu tahu tentang Techxperience?
      </Text>
      
      <FlatList
        data={options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <SurveyOption
            label={item}
            isSelected={selected === item}
            onPress={() => setSelected(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SurveyScreen;
