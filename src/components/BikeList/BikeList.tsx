import React, { useEffect, useState } from 'react'
import Bike from "./Bike/Bike"
export interface IBike {
    id: number;
    Name : string ;
    Year : number ;
    Description : string ;
    TypeOfBike : string ;
    Image: string ;
}

interface Props {
    bikes: IBike[]
}

export const BikeList = ({bikes}:Props) => {
    return(
        <div className="flex flex-col justify-center text-white items-center p-5">
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                {bikes.map((bike) => (
                 <Bike key={bike.id} bike={bike}/>   
                ))}
            </ul>
        </div>       
    );
};

 