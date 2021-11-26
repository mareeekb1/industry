import React, { useEffect } from "react";

import { Box, Heading } from "grommet";
import ListOfCustomers from "../components/ListOfCustomers";
import Loader from "../components/general/Loader";

import { useQuery } from "urql";
import { AllCustomersQuery } from "../store/queries";

const Main = () => {
    const [result, reexecuteQuery] = useQuery({
        query: AllCustomersQuery,
    });
    const { data, fetching, error } = result;

    const refresh = () => {
        reexecuteQuery({ requestPolicy: "network-only" });
    };

    useEffect(() => {
        refresh();
        // eslint-disable-next-line
    }, []);
    return (
        <Box>
            <Heading color="blue">List of customers</Heading>
            {fetching ? (
                <Loader />
            ) : (
                <>
                    {error ? (
                        <p>Oh no... {error.message}</p>
                    ) : (
                        <ListOfCustomers data={data.Customers} />
                    )}
                </>
            )}
        </Box>
    );
};

export default Main;
