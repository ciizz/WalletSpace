import React, { useState } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Button, Card, Text, TextInput} from 'react-native-paper';
import { W3mButton } from '@web3modal/wagmi-react-native';
import { useDebounce } from 'use-debounce';
import {
    useAccount, 
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from 'wagmi';
import "@ethersproject/shims";
import { ethers } from 'ethers';

import SendTransactionFeedback from './SendTransactionFeedback';

export default function SendTransaction() {
    const { isConnected } = useAccount();
    const [to, setTo] = useState('');
    const [debouncedTo] = useDebounce(to, 500);
    const [amount, setAmount] = useState('');
    const [debouncedAmount] = useDebounce(amount, 500);

    const { config } = usePrepareSendTransaction({
        to: debouncedTo,
        value: debouncedAmount ? ethers.parseEther(amount) : undefined
    });
    const { data, sendTransaction } = useSendTransaction(config); // Add error variable

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
        <View style={styles.container}>
            <Card style={styles.card}>
                <TextInput
                    placeholder="Recipient"
                    onChangeText={(text) => setTo(text)}
                    value={to}
                    disabled={isLoading}
                />
                <TextInput
                    placeholder="Amount (ETH)"
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                    disabled={isLoading}
                />
                <Button
                    onPress={() => {
                        sendTransaction?.();
                    }}
                    disabled={isLoading || !sendTransaction || !to || !amount}
                >
                    {isLoading ? 'Sending...' : 'Send'}
                </Button>
            </Card>
            {isSuccess && (
                <SendTransactionFeedback success={true} recipient={to} amount={amount} hash={data?.hash} />
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
    card: {
        width: '90%',
    },
    errorText: {
        color: 'red', // Set error text color
        fontSize: 16,  // Adjust font size
        marginTop: 10, // Add spacing
    }
});
