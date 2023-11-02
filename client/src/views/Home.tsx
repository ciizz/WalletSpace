import { StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import { useAccount } from 'wagmi';

export default function HomeScreen() {
  
  const { address, isConnected } = useAccount()

  return (
    <View style={styles.container}>
      <Title>Welcome to WalletSpace.</Title>
      <View style={{ height: 25 }} />
      <Text>WalletSpace is a platform for safely navigating the Web3 space.</Text>
      <View style={{ height: 50 }} />
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