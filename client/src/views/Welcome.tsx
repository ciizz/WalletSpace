import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';


type WelcomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: WelcomeScreenNavigationProp) {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <Text>Welcome young padawan</Text>
            <Button title="Go to app" onPress={() => navigation.navigate('Navbar')} />
            <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});