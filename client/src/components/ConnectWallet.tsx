import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

export default function ConnectWallet() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ name: address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <View>
        {ensAvatar && (
          <Image source={{ uri: ensAvatar }} style={{ width: 100, height: 100 }} />
        )}
        <Text>{ensName ? `${ensName} (${address})` : address}</Text>
        <Text>Connected to {connector?.name || 'Unknown'}</Text>
        <Button title="Disconnect" onPress={() => disconnect()} />
      </View>
    );
  }
  
  return (
    <View>
      {connectors.map((connector) => (
        <Button
          title={`${connector.name}${!connector.ready ? ' (unsupported)' : ''}${
            isLoading && connector.id === pendingConnector?.id ? ' (connecting)' : ''
          }`}
          onPress={() => connect({ connector })}
          disabled={!connector.ready}
          key={connector.id}
        />
      ))}

      {error && <Text>{error.message}</Text>}
    </View>
  );
}
