import React from "react";

import { Box, Heading } from "grommet";
import ListOfCustomers from "../components/ListOfCustomers";
import Loader from "../components/general/Loader";

import { useQuery } from "urql";
import { AllCustomersQuery } from "../store/queries";

const Main = () => {
    const [result] = useQuery({
        query: AllCustomersQuery,
    });
    const { data, fetching, error } = result;

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
                        <ListOfCustomers customers={data.Customers} />
                    )}
                </>
            )}
        </Box>
    );
};

export default Main;
