import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Selectors } from './components/Selectors/Selectors';


function App() {

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
          
        </div>
    </>
  )
}

export default App
