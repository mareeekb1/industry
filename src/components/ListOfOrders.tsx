import React from "react";

import { Box, Heading, DataTable } from "grommet";
import TableBox from "./general/TableBox";

import { Orders } from "../store/interfaces";
import { dotDateFormat, resolveSum } from "../store/utils";

const ListOfOrders: React.FC<Orders> = ({ orders }) => {
    if (orders.length === 0) {
        return (
            <Box align="center">
                <Heading level={2} color="blue">
                    No orders found
                </Heading>
            </Box>
        );
    }

    return (
        <DataTable
            sortable
            columns={[
                {
                    property: "id",
                    header: "ID",
                },
                {
                    property: "date_of_order",
                    header: "Date of order",
                    render: ({ date_of_order }) => (
                        <TableBox content={dotDateFormat(date_of_order)} />
                    ),
                },
                {
                    property: "sum_of_order",
                    header: "Sum",
                    render: ({ sum_of_order }) => (
                        <TableBox content={resolveSum(sum_of_order)} />
                    ),
                },
                {
                    property: "number_of_products",
                    header: "Number of products",
                    render: ({ number_of_products }) => (
                        <TableBox content={number_of_products.toString()} />
                    ),
                },
            ]}
            data={orders}
        />
    );
};

export default ListOfOrders;
