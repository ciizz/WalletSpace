import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Linking } from 'react-native';
import { W3mButton } from '@web3modal/wagmi-react-native'
import { useDebounce } from 'use-debounce';
import {
    useAccount, 
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from 'wagmi';
import "@ethersproject/shims"
import { ethers } from 'ethers';


export default function SendTransaction() {

    const { isConnected } = useAccount()

    const [to, setTo] = useState('');
    const [debouncedTo] = useDebounce(to, 500);

    const [amount, setAmount] = useState('');
    const [debouncedAmount] = useDebounce(amount, 500);

    const { config } = usePrepareSendTransaction({
        to: debouncedTo,
        value: debouncedAmount ? ethers.parseEther(amount) : undefined,
    });
    const { data, sendTransaction } = useSendTransaction(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    if (!isConnected) {
        return (
            <View style={styles.container}>
                <W3mButton />
            </View>
        );
    }

    return (
        <View>
        <TextInput
            placeholder="Recipient"
            onChangeText={(text) => setTo(text)}
            value={to}
        />
        <TextInput
            placeholder="Amount (ether)"
            onChangeText={(text) => setAmount(text)}
            value={amount}
        />
        <Button
            title={isLoading ? 'Sending...' : 'Send'}
            onPress={() => {
            sendTransaction?.();
            }}
            disabled={isLoading || !sendTransaction || !to || !amount}
        />
        {isSuccess && (
            <View>
            <Text>
                Successfully sent {amount} ether to {to}
            </Text>
            <View>
                <Button
                title="Etherscan"
                onPress={() => {
                    Linking.openURL(`https://etherscan.io/tx/${data?.hash}`);
                }}
                />
            </View>
            </View>
        )}
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
