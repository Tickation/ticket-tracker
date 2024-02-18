import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, foundry, blastSepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
    chains: [blastSepolia, foundry, mainnet, sepolia],
    connectors: [injected()],
    transports: {
        [blastSepolia.id]: http(),
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
            ticketMasterAddress: "0x63C332621c6617f6F2783Cf4E1F5cF720D0D915b"
        },
        168587773: {
            ticketMasterAddress: "0x9BB3C09ed3E273Cc9BFC6185A11d91cB08056460"
        },
        31337: {
            ticketMasterAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        }

    },
}