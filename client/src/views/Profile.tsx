import { StyleSheet, View } from 'react-native';
import { W3mButton } from '@web3modal/wagmi-react-native'
import ConnectWallet from '../components/ConnectWallet';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <W3mButton />
            {/* <ConnectWallet /> */}
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
