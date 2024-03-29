import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { wagmiConfig } from './constants';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}> 
          <App />
        </QueryClientProvider> 
    </WagmiProvider>
  </React.StrictMode>,
)
