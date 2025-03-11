import Button from "@/components/button";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
      <View style={tw`gap-2`}>
        {options.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              tw`p-4 rounded-lg`,
              selected === item ? tw`bg-gray-700` : tw`bg-gray-900`,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text style={tw`text-white text-lg text-center`}>{item}</Text>
          </TouchableOpacity>
        ))}

    <View style={tw`mt-50 justify-center items-center`}>
      <Button title="Selanjutnya" bgbtn="[#4285F4]" bgtext="black" rute="home"/>
    </View>
      </View>
    </SafeAreaView>
  );
};

export default SurveyScreen;
