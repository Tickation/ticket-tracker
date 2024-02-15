import React from 'react';
import { Button } from 'flowbite-react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { addressShortener } from '../../utils';

export const ConnectWalletButton = () => {

    const { address, status } = useAccount()
    const { connect } = useConnect()
    const { disconnect } = useDisconnect()

    console.log("connected: ", status === 'connected')


    const handleConnect = async () => {
        if (status === 'connected') {
            disconnect()
        } else {
            connect({ connector: injected() })
        }
    }  

    return (
        <button className={`shadow-2xl 
        px-4 py-2 rounded-lg

        ${status === 'connected' ? 
            'bg-green-700 text-white hover:bg-green-500 border-2 border-green-700' :
            'bg-lime-500 hover:bg-yellow-200 text-black hover:border-green-700 border-2 border-lime-500'}
            `}
        
            onClick={handleConnect}
        >
            
            {status === 'connected' ? 
                addressShortener(address) : 
                'Connect Wallet'}
        </button>
    )
}
