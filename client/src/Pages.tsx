import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './types';
import HomeScreen from './views/Home';
import ProfileScreen from './views/Profile';
import SendTransaction from './views/Send';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();
// const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Pages() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'send', title: 'Send', focusedIcon: 'send', unfocusedIcon: 'send-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    send: SendTransaction,
    profile: ProfileScreen,
  });


  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
