import React from 'react'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { GetServerSideProps, NextPage } from 'next'
import {IBike} from "../../components/BikeList/BikeList"
import Link from 'next/link';
import Image from 'next/image';


interface TProps{
    bike: IBike;
}

const BikeDetailPage: NextPage<TProps> = ({bike}) => {
    return (
        <ApplicationWrapper title={bike.Name}>
            <div className='justify-items-center'>
                <Image className='justify-items-center'
                    src={`/images/${bike.id}.jpg`} 
                    alt={` ${bike.Name} Poster`}
                    width={800}
                    height={450}
                />
            </div>
            <div>
                {bike.Name}                            
            </div>
            <div>
                {bike.Year}
            </div>
            <div>
                {bike.Description}
            </div>
            <div>
                {bike.TypeOfBike}
            </div>
        </ApplicationWrapper>
        
    );
};

//export const getServerSideProps: GetServerSideProps = async (context) => {
  //  const res = await fetch(
 //       `${process.env.NEXT_PUBLIC_API_URL}/bikes/${context.params?.id}`
 //   );
 //   const bike = await res.json();
  //  return{
 //       props:{
  //          bike,
  //      },
 //   };
//};
//export default BikeDetailPage;
