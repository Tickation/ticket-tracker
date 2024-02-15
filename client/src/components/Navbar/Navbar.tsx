import React from 'react';
import { Navbar as FlowbiteNavBar, Flowbite } from 'flowbite-react';
import { ConnectWalletButton } from './ConnectWalletButton';
import type { CustomFlowbiteTheme } from 'flowbite-react';


const customTheme: CustomFlowbiteTheme = {
    navbar: {
        collapse: {
            base: "w-full md:block md:w-auto",
            list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8",
            hidden: {
                on: "hidden",
                off: ""
            }
        },
        link: {
            base: "block py-2 pr-4 pl-3 md:p-0 font-semibold",
            active: {
                on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-green-800",
                off: "border-b border-gray-100  text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            },
            disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: ""
            }
        },
            toggle: {
                base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
                icon: "h-6 w-6 shrink-0"
        }
    }
};

export const Navbar = () => {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <FlowbiteNavBar fluid
                className="bg-gradient-to-b from-yellow-400 to-yellow-600
                text-2xl
                "
            >
                <FlowbiteNavBar.Brand href="https://flowbite-react.com"
                >
                    <img src="Tickation.png" 
                        className="my-2 mx-2 h-16 rounded-lg" 
                        alt="Tickation Logo" />
                    <span className="self-center whitespace-nowrap 
                    mx-2 font-semibold dark:text-white text-xl
                    ">
                        Tickation</span>

                </FlowbiteNavBar.Brand>
                <input className="eventsSearchBar
                    rounded-lg bg-gray-400 placeholder:text-gray-600 flex-grow
                    mx-3
                    " 
                    type="text" placeholder='Find millions of experiences' />
                <div className="flex md:order-2
                mr-8
                ">  
                    <ConnectWalletButton />
                    <FlowbiteNavBar.Toggle />
                </div>

                <FlowbiteNavBar.Collapse className="text-xl mx-4">
                    <FlowbiteNavBar.Link href="#" active>
                    Events
                    </FlowbiteNavBar.Link>
                    <FlowbiteNavBar.Link href="#">Concerts</FlowbiteNavBar.Link>
                    <FlowbiteNavBar.Link href="#">Sports</FlowbiteNavBar.Link>
                    <FlowbiteNavBar.Link href="#">Arts & Theater</FlowbiteNavBar.Link>
                    <FlowbiteNavBar.Link href="#">More</FlowbiteNavBar.Link>
                </FlowbiteNavBar.Collapse>

            </FlowbiteNavBar>
        </Flowbite>
    )
}
