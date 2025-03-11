import { View, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const Harga = ({title,harga,harga2}:any ) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-white w-90 h-20 py-3 rounded-lg ml-6`} onPress={ () => navigation.navigate(rute)}>
    <Text style={tw`text-5 font-bold ml-4`}>{title}</Text>
    <View style={tw`flex-row justify-between gap-6 ml-4`}>
    <Text style={tw`text-4 `}>{harga}</Text>
    <Text style={tw`text-4 mr-3`}>{harga2}</Text>
    </View>
    </TouchableOpacity>
)
}

export default Harga

