import Link from 'next/link';
import React, {FC} from 'react';
import { IBike } from '../BikeList';
import Image from 'next/image';

interface TProps {
    bike: IBike;
}
const Bike: FC<TProps> = ({bike}) => {
    return (
            <li>
                <Link href={`/bikes/${bike.id}`}>
                    <Image 
                    className='cursor-pointer'
                    src={`/images/${bike.id}.jpg`} 
                    alt={` ${bike.Name} Poster`}
                    width={800}
                    height={450}
                />
                </Link>
                <strong className='text-lg'>{bike.Name}</strong>
            </li>
            
    );
};

export default Bike;