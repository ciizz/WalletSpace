import { StyleSheet, View } from 'react-native';
import { W3mButton } from '@web3modal/wagmi-react-native'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <W3mButton />
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
