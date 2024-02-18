import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Selectors } from './components/Selectors/Selectors';
import { useReadContract, useContractReads, useChainId } from 'wagmi';
import { abi } from './constants/abi/TicketTracker.json';
import { networkConfig } from './constants';
import { Card } from 'flowbite-react';
import { formatUnits } from 'viem';
import { SeatModal } from './components/Modal/SeatModal';

function App() {
  const chainId = useChainId()

  const [openModal, setOpenModal] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedOccasionsId, setSelectedOccasionsId] = useState(0);
  const [selectedCost, setSelectedCost] = useState(0.0);
  const [maxSeats, setMaxSeats] = useState(0);

  //desired chain id: import.meta.env.VITE_CHAIN_ID

  const totalOccasions = useReadContract({
      abi,
      address: networkConfig?.chainId[chainId]?.ticketMasterAddress as `0x${string}`,
      functionName: 'totalOccasions',
    })?.data

  const occasionsCalls = Array.from(Array(
      Number(totalOccasions ?? 0)
    ), (_,x) => x+1).map((i) => {
      return {
          address: networkConfig?.chainId[chainId]?.ticketMasterAddress as `0x${string}`,
          abi,
          functionName: 'getOccasion',
          args:[i]
      }
    })
  
  let { data: occasionsData, isError, isLoading } = useContractReads({
    contracts: occasionsCalls
  })

  occasionsData = occasionsData?.map((d)=>{
    return d?.result
  })
  //console.log(occasionsData)

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Navbar/>
          <div className="bg-yellow-600">
              <div className="container text-6xl my-4 mx-auto">
                <span className="text-white font-semibold">Event </span>
                <span className="font-extralight">Tickets</span>
              </div>
            </div>
        </div>


          {/* selectors */}
          <Selectors/>

          {/* cards */}
          <div className="flex flex-col gap-1
          items-center container mx-auto
          ">
          {
              occasionsData?.map((o, i) => {
                return(
                <Card href="#" 
                  className="w-full" key={i} >
                    
                    <div className="w-full flex flex-row justify-between items-center
                    px-7
                    ">
                      <div className="flex flex-col w-1/8 px-2">
                        <div className="font-bold">
                          {o?.date}
                        </div>
                        <div className="text-gray-700">
                          {o?.time}
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center flex-grow">
                        <div className="text-center text-black font-medium">
                          {o?.name}
                        </div>
                        <div className="text-center text-normal text-gray-700">
                          {o?.location}
                        </div>
                      </div>

                      <div className="w-1/6 flex justify-center items-center mx-3">
                        <span className="text-black font-semibold mx-1">
                          {Number(formatUnits(o?.cost, 18)).toFixed(2)}
                        </span>
                        <span className="text-gray-700">ETH</span>
                      </div>

                      <button className={`w-1/6 mx-2 text-white px-2 py-2 rounded-md ${Number(o?.tickets) ===0 ? 'bg-red-600': 'bg-blue-600'}`}
                      onClick={() => {
                        if(Number(o?.tickets) !== 0){
                            setOpenModal(true)
                            setSelectedOccasion(o?.name)
                            setSelectedOccasionsId(Number(o?.id))
                            setSelectedCost(Number(formatUnits(o?.cost, 18)))
                            setMaxSeats(Number(o?.tickets))
                          }
                        }
                      }
                      >
                        {Number(o?.tickets) ===0 ? "Sold Out" : "View Seats"}
                      </button>

                    </div>
                  </Card>
                  )
              
              })
          }
          </div>

          <SeatModal openModal={openModal} setOpenModal={setOpenModal} 
            occasion={selectedOccasion}
            occasionId={selectedOccasionsId}
            cost={selectedCost}
            maxSeats={maxSeats}
          />
        </div>
    </>
  )
}

export default App
