import { useState } from 'react';
import { Navbar } from './components/Navbar';


function App() {

  return (
    <>
      <div>
        <div className="flex flex-col">
          <Navbar/>
          <div className="bg-yellow-600">
              <div className="container text-6xl my-4 mx-auto">
                <span className="text-white font-semibold">Event </span>
                <span className="font-extralight">Tickets</span>
              </div>
            </div>
        </div>
        Henlos
        </div>
    </>
  )
}

export default App
