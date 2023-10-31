// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './types';
import HomeScreen from './views/Home';
import ProfileScreen from './views/Profile';
import { NavigationContainer } from '@react-navigation/native';

// const Tab = createMaterialBottomTabNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Pages() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
