import React from 'react';
import { Modal, Button, Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { abi } from '../../constants/abi/TicketTracker.json';
import { networkConfig } from '../../constants';
import { useReadContract, useChainId, useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
import { writeContract } from '@wagmi/core';
import { wagmiConfig } from '../../constants';

const customTheme: CustomFlowbiteTheme = {
    modal: {
        content: {
            base: "relative h-full w-full p-4 md:h-auto",
            inner: "relative rounded-lg bg-gradient-to-b from-green-700 to-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]"
        },
        header: {
            base: "flex items-start justify-between rounded-t p-5 px-10",
            popup: "p-2",
            title: "text-2xl font-light text-white dark:text-white",
            close: {
                base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-black hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "h-5 w-5"
            }
        },
    },
};

export const SeatModal = ({
    openModal,
    setOpenModal,
    occasion,
    occasionId,
    cost,
    maxSeats
    }:
    {
        openModal: boolean,
        setOpenModal: (open: boolean) => void,
        occasion: string,
        occasionId: number,
        cost: number,
        maxSeats: number
    }) => {
    const chainId = useChainId()
        //console.log("occasionId: ", occasionId)
    const seatsTaken = useReadContract({
        abi,
        address: networkConfig?.chainId[chainId]?.ticketMasterAddress as `0x${string}`,
        functionName: 'getSeatsTaken',
        args:[occasionId]
    })?.data as bigint[]

    // console.log("seatsTaken: ")
    // console.log(seatsTaken)

    // console.log(networkConfig?.chainId[chainId]?.ticketMasterAddress)

    const { writeContract: writeMintTicket } = useWriteContract()
    const handleMint = async (id:number, seatNumber:number, ticketCost:string) => {
        await writeContract(wagmiConfig, {
            address: networkConfig?.chainId[chainId]?.ticketMasterAddress as `0x${string}`,
            abi,
            functionName: 'mint',
            args:[id, seatNumber],
            value: parseEther(ticketCost)
        })
    }

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Modal show={openModal} onClose={() => setOpenModal(false)} 
                    size="7xl">
                <Modal.Header>
                    {occasion}
                </Modal.Header>
                <Modal.Body>
                    <div className="text-white text-sm flex justify-center items-center
                    border-2 border-gray-900
                    bg-gray-800/90 rounded-b-2xl
                    h-32 mb-2
                    ">
                        STAGE
                    </div>

                    <div className="flex h-[60vh]">

                        {/* left seats */}
                        <div className="w-1/5 flex justify-center">
                            <div className="w-full h-fit
                            grid grid-cols-5 gap-1
                            flex-col justify-center items-center
                            p-1">
                            {

                                Array(25).fill(0).map((_, i) => {
                                    return (
                                        <button key={i} className={`
                                        ${(seatsTaken?.includes(
                                            BigInt(i+1)
                                            ) || (i+1) > maxSeats )? "bg-gray-600" :
                                            "bg-green-600"} 
                                        rounded-full
                                        w-8 h-8 text-white
                                        flex justify-center items-center
                                        border border-gray-800
                                        m-0`}
                                        
                                        onClick={() => {
                                            //console.log(i+1)
                                            handleMint(
                                                occasionId,
                                                i+1,
                                                cost.toString())
                                        }}
                                        >{i+1}</button>
                                    )
                                }
                                )
                            }
                            </div>
                        </div>

                        {/* left walkway */}
                        <div className="bg-gray-800/90 rotate-180 text-white text-center"
                        style={{ writingMode: 'vertical-rl' }}
                        >
                                WALKWAY
                        </div>

                        {/* mid seats */}
                        <div className="flex-grow px-2 py-1
                        flex-col justify-center items-start
                        ">
                            <div className="w-full h-fit
                            grid grid-cols-12 justify-center items-center gap-1
                            "
                            >
                            {
                                Array(156).fill(0).map((_, i) => {
                                    return (
                                        <button key={i} className={`
                                        ${(seatsTaken?.includes(
                                            BigInt(i+26)) || (i+26) > maxSeats )? "bg-gray-600" :
                                            "bg-green-600"} 
                                        rounded-full
                                        w-8 h-8 text-white
                                        flex justify-center items-center
                                        border border-gray-800
                                        m-0`}
                                        onClick={() => {
                                            handleMint(
                                                occasionId,
                                                i+26,
                                                cost.toString())
                                        }}
                                        >{i+26}</button>
                                    )
                                }
                                )
                            }
                            </div>
                        </div>

                        {/* right walkway */}
                        <div className="bg-gray-800/90 rotate-180 text-white text-center"
                        style={{ writingMode: 'vertical-lr' }}
                        >
                            WALKWAY
                        </div>

                        {/* right seats */}
                        <div className="w-1/5 flex justify-center">
                            <div className="w-full h-fit
                            grid grid-cols-5 gap-1
                            flex-col justify-center items-center
                            p-1"
                            >
                            {

                                Array(25).fill(0).map((_, i) => {
                                    return (
                                        <button key={i} className={`
                                        ${ (seatsTaken?.includes(BigInt(i+182)) || (i+182) > maxSeats )? "bg-gray-600" :
                                            "bg-green-600"} 
                                        rounded-full
                                        w-8 h-8 text-white
                                        flex justify-center items-center
                                        border border-gray-800
                                        m-0`}
                                        onClick={()=>{
                                            handleMint(
                                                occasionId,
                                                i+182,
                                                cost.toString())
                                        }}
                                        >{i+182}</button>
                                    )
                                }
                                )
                            }
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </Flowbite>
    )
}
