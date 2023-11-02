import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SendScreen() {
    const [targetAddress, setTargetAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [cryptoType, setCryptoType] = useState("");

    const handleSendCrypto = async () => {
        alert(`Successfully sent ${amount} ${cryptoType} to ${targetAddress}`);
    };

    return (
        <View>
            <Text>Send Crypto</Text>
            <View>
                <Text>Target Address:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={targetAddress}
                    onChangeText={(text) => setTargetAddress(text)}
                />
            </View>
            <View>
                <Text>Amount:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                />
            </View>
            <View>
                <Text>Crypto Type:</Text>
                <Picker
                    selectedValue={cryptoType}
                    onValueChange={(value) => setCryptoType(value)}
                >
                    <Picker.Item label="Select a cryptocurrency" value="" />
                    <Picker.Item label="Ethereum" value="ETH" />
                    <Picker.Item label="MATIC" value="MATIC" />
                </Picker>
            </View>
            <Button title="Send" onPress={handleSendCrypto} />
        </View>
    );
};
