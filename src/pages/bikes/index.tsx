import React, {GetStaticProps, NextPage} from "next";
import {IBike, BikeList } from "../../components/BikeList/BikeList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";

interface TProps {
    bikes: IBike[],
    response: string;
  }

const Bikes: NextPage<TProps> = ( ) => {
    return (
        <ApplicationWrapper
            title = "Bikes"
            description = "The best bike catalogue on internet"
        >
            <BikeList bikes={bikes}/>           
        </ApplicationWrapper>
    );
};

export default Bikes;

//export const getStaticProps : GetStaticProps = async (context) => {
   // const bikes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bikes`)
    //    .then((res) => res.json({bikes: bikes||[] }))
  //      .then((data: IBike[]) => data.slice(0,6))
 //       .catch((error) => console.error())
//    return {
  //      props: {
 //         //  bikes
        },

 //      revalidate: 10
//    };
//};
