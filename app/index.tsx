import { View, Text, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Button from '@/components/button'

const index = () => {
  return (
    
    <View style={tw`bg-black flex-1 px-3`}>

    <SafeAreaView style={tw`justify-center items-center`}>
    <Image style={tw`w-95 h-15 ml-5 mt-40`} source={require('@/assets/images/lg.png')} />
     <View style={tw`mt-25 jusify-center items-center`}>
      <Text style={tw`text-white font-bold text-6 text-center`}>Belajar Teknelogi{'\n'} & Dapatkan Pengalamnya</Text>
      <Text style={tw`text-white text-center`}>Belajar paling mudah praktis Dengan menonton vidio{'\n'} secara onlie dangan lebih 150++ lebih dari mentor yamg sudah ahli</Text>
      </View>
      <View style={tw`mt-30`}>
      <Button title="Mulai Belajar Sekar" bgtext="white" rute="auth/register"/>
      <View style={tw`mt-3`}>
      <Button title="Masuk" bgbtn="[#4285F4]" bgtext="white" rute="auth/signin"/>
      </View>
      <Text style={tw`text-white text-center text-3 mt-2`}>#Dari baris pertama, sampai project pertama</Text>
      </View>
      </SafeAreaView>
    </View>
    
  )
}

export default index