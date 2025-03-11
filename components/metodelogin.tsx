import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const Metode = ({title,img,rute}:any ) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-white ml-5 w-80 h-13 rounded-lg justify-center items-center mt-4`} onPress={ () => navigation.navigate(rute)}>
    
<View style={tw`flex-row`}>
    <Image source={ img } style={ tw `w-13 h-13` } />
    <Text style={tw`text-gray-500 text-center mt-4 ml-2`}>{title}</Text>
</View>
    
    </TouchableOpacity>
)
}

export default Metode
