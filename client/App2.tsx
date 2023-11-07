import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { goerli, mainnet, polygon, arbitrum } from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { SafeAreaView } from 'react-native';
import Pages from './src/Pages';
import { DefaultTheme, PaperProvider } from 'react-native-paper';


const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli],
    [alchemyProvider({ apiKey: 't5PIpF3Be9dEe4BjcW8h18uiAufGhyZv' }), publicProvider()],
)

const connector = new WalletConnectConnector({
    chains, 
    options: {
        projectId: 'befc90b7551eca7bb224e9a498145b5c',
        metadata: {
            name: 'WalletSpace',
            description: 'my wagmi app',
            url: 'https://web3modal.com',
            icons: ['https://avatars.githubusercontent.com/u/37784886'],
            redirect: {
                native: 'YOUR_APP_SCHEME://',
                universal: 'YOUR_APP_UNIVERSAL_LINK.com'
            }
        },
    },
})

// const connector = new MetaMaskConnector({ chains })

const config = createConfig({
    autoConnect: true,
    connectors: [connector],
    publicClient,
    webSocketPublicClient
})


export default function App() {
    return (
        <WagmiConfig config={config}>
            <SafeAreaView style={{ flex: 1 }}>
                <PaperProvider theme={theme}>
                    <Pages />
                </PaperProvider>
            </SafeAreaView>
        </WagmiConfig>
    )
}

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'white',
      secondary: 'white',
    }, 
};