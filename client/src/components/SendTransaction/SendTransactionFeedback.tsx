import React, { useState } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Modal, Button, Text } from 'react-native-paper';


type Props = {
    success: boolean;
    recipient: string;
    amount: string;
    hash: any;
};

export default function SendTransactionFeedback(props : Props) {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      visible={visible}
      onDismiss={() => setVisible(false)}
      contentContainerStyle={{
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10,
      }}
    >
        <Text>
        {props.success ? 
            <View>
                <Text>
                    Transaction failed
                </Text>
                <Text>
                    Successfully sent {props.amount} ETH to {props.recipient}
                </Text>
                <View>
                    <Button
                        onPress={() => {
                            Linking.openURL(`https://etherscan.io/tx/${props.hash}`);
                        }}
                    >
                        View on Etherscan
                    </Button>
                </View>
            </View> : 
            <View>
                <Text>
                    Transaction failed
                </Text>
            </View>}
        </Text>
    </Modal>
  );
}
