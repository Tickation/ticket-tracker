import React from 'react';
import { Navbar as FlowbiteNavBar } from 'flowbite-react';
import { ConnectWalletButton } from './ConnectWalletButton';

export const Navbar = () => {
    return (
        <FlowbiteNavBar fluid rounded 
            className="bg-gradient-to-b  from-yellow-400 to-yellow-600"
        >
            <FlowbiteNavBar.Brand href="https://flowbite-react.com"
            >
                <img src="Tickation.png" 
                    className="my-2 mx-2 h-24 rounded-lg" 
                    alt="Tickation Logo" />
                <span className="self-center whitespace-nowrap 
                mx-2
                text-5xl font-semibold dark:text-white
                ">
                    Tickation</span>
            </FlowbiteNavBar.Brand>
            
            <div className="flex md:order-2
            mr-8
            ">
                <ConnectWalletButton />
                <FlowbiteNavBar.Toggle />
            </div>
            </FlowbiteNavBar>
    )
}
