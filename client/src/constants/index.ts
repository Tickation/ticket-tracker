import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, foundry } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
    chains: [foundry, mainnet, sepolia],
    connectors: [injected()],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [foundry.id]: http(),
    },
})

export const networkConfig = {

    chainId: {
        1: {
            ticketMasterAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        },
        11155111: {
            ticketMasterAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        },
        31337: {
            ticketMasterAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        }

    },
}