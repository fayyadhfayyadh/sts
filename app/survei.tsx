import { View, Text, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Button from '@/components/button'

const index = ({}) => {
  return (
    
    <View style={tw`bg-black flex-1 px-3`}>

    <SafeAreaView style={tw`justify-center items-center`}>
    <Image style={tw`w-55 h-10 mt-5`} source={require('@/assets/images/lg.png')} />
      </SafeAreaView>
    </View>
    
  )
}

export default index