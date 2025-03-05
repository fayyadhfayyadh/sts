import { View, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const Button = ({title,bgbtn,bgtext,rute}:any ) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`border-white border bg-${bgbtn} w-80 h-12 py-3 rounded-lg mx-12`} onPress={ () => navigation.navigate(rute)}>
    <Text style={tw`text-${bgtext} text-center`}>{title}</Text>
    </TouchableOpacity>
)
}

export default Button

