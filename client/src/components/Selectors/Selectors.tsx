import React from 'react';
import { Dropdown } from 'flowbite-react';

export const Selectors = () => {
    return (
        <div className="flex w-full justify-center gap-2
        py-3
        ">
            

            <Dropdown color="green" 
                className="mx-2"
                label="Select Your Genre">
                
            </Dropdown>

            <Dropdown color="green" 
                className="mx-2"
                label="Select Your Date">
                
            </Dropdown>

            <Dropdown color="green" 
                className="mx-2"
                label="Select Your Distance">
                
            </Dropdown>
        </div>
    )
}
