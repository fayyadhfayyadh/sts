import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo size={28} name="home" color={color} />,
        }}
      />
      
       <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="newspaper" color={color} />,
        }}
      />
       <Tabs.Screen
        name="reals"
        options={{
          title: 'Reals',
          tabBarIcon: ({ color }) => <Foundation size={28} name="play-video" color={color} />,
        }}
      />
        <Tabs.Screen
        name="akademi"
        options={{
          title: 'Akademi',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          title: 'Membership',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="card-membership" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
