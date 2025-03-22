import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { View, Image, Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={{flex: 1, paddingBottom: 60}}>

      <ThemedView style={{flexDirection: 'row', alignItems: 'center', paddingTop: 30}}>
        
        <Image 
          source={require('@/assets/images/ztuedu-logo.png')} 
          style={{
            width: 150, 
            height: 80, 
            paddingLeft: 10
          }}
          resizeMode="contain"
        />

        <ThemedView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ThemedText style={{ fontSize: 20 }}>First Mobile App</ThemedText>
        </ThemedView>
      
      </ThemedView>

      <ThemedView style={{position: 'absolute', bottom: 25, width: "100%", alignItems: 'center'}}>
          <ThemedText>Шевчук Дмитрій Романович, ІПЗ-23-5</ThemedText>
      </ThemedView>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              top: 0,
              height: 60,
            },
            default: {
              position: 'absolute',
              top: 0,
              height: 60,
            },
          }),
          
        }}>


        <Tabs.Screen
          name="index"
          options={{
            title: 'Головна',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="photos"
          options={{
            title: 'Фотогалерея',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="camera.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Профіль',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          }}
        />
      </Tabs>
      
    </ThemedView>
  );
}
