import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import { WagmiConfig } from 'wagmi';
import { mainnet, polygon, arbitrum } from 'wagmi/chains';
import * as Clipboard from 'expo-clipboard';

import Pages from './src/Pages';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


// 1. Get projectId
const projectId = 'befc90b7551eca7bb224e9a498145b5c'

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ 
  projectId,
  chains,
  wagmiConfig,
  clipboardClient: {
    setString: async (value: string) => {
      await Clipboard.setStringAsync(value);
    }
  }
})

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider theme={theme}>
          <Pages />
        </PaperProvider>
      </SafeAreaView>
      <Web3Modal />
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
