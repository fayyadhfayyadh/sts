import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

import { useRouter } from 'expo-router'
import Button from '@/components/button'
import { AntDesign } from '@expo/vector-icons'
import Metode from '@/components/metodelogin'

const SignIn = () => {
    const navigation = useRouter();
  return (
    <View style={tw`bg-black flex-1 px-3`}>
    <SafeAreaView>
    <View style={tw`mt-10 px-7`}>
    <Image style={tw`w-50 h-10 ml-5 mt-10`} source={require('@/assets/images/lg.png')} />
      <View style={tw`pt-`}>
      <TextInput style={tw` border-white border rounded-lg py-4 px-7 mt-3 `} placeholder="Masukan Nama Lengkap" placeholderTextColor="white"></TextInput>
      <TextInput style={tw` border-white border rounded-lg py-4 px-7 mt-3 `} placeholder="Masukan Email" placeholderTextColor="white" secureTextEntry></TextInput>
      <TextInput style={tw` border-white border rounded-lg py-4 px-7 mt-3 `} placeholder="Masukan Password" placeholderTextColor="white" secureTextEntry></TextInput>
      <TextInput style={tw` border-white border rounded-lg py-4 px-7 mt-3 `} placeholder="Konfirmasi Password" placeholderTextColor="white" secureTextEntry></TextInput>
      </View>
      <View style={tw`flex-row justify-between w-full px-2 mt-4`}>
        <Text style={tw`text-white`}>Ingat saya</Text>
        <Text style={tw`text-white`}>Lupa password?</Text>
      </View>
    </View>
    <View style={tw`mt-5 justify-center items-center`}>
      <Button title="Masuk" bgbtn="[#4285F4]" bgtext="black" rute="survei"/>
    </View>
   
    <View style={tw`bg-white w-full h-0.5 mt-7`}></View>
    <View style={tw`mr-3 items-center`}>
    <Metode img={require('@/assets/images/ggl.jpg')}   title="Masuk Dengan Google" rute="auth/signin"/>
    <Metode img={require('@/assets/images/fb.jpg')}   title="Masuk Dengan Google" rute="auth/signin"/>
    </View>
    </SafeAreaView>
    </View>
  )
}

export default SignIn