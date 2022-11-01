import React, { GetStaticProps, NextPage } from "next";
import { IBike, BikeList } from "../../components/BikeList/BikeList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";

interface TProps {
    bikes: IBike[]
}

const Bikes: NextPage<TProps> = ({ bikes }) => {
    return (
        <ApplicationWrapper
            title="Bikes"
            description="The best bike catalogue on internet"
        >
            <BikeList bikes={bikes} />
        </ApplicationWrapper>
    );
};

export default Bikes;

export const getStaticProps: GetStaticProps = async (context) => {
    const bikes = await fetch(`api/bikes`)
        .then((res) => res.json())
        .then((data: IBike[]) => data.slice(0, 6))
        .catch((error) => console.error(error))
    return {
        props: {
            bikes: bikes || []
        },
        revalidate: 10
    };
};
