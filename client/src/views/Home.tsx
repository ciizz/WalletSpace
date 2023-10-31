import { StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title>Welcome to WalletSpace.</Title>
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