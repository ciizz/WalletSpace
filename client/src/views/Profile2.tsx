import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function ProfileScreen2() {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()

    if (isConnected)
        return (
            <View style={styles.container}>
                <Text>Connected to {address}</Text>
                <View style={{ height: 50 }} />
                <Button buttonColor="blue" onPress={() => disconnect()}>Disconnect</Button>
            </View>
        )
    else
        return (
            <View style={styles.container}>
                <Button onPress={() => connect()}>Connect Wallet</Button>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
