import React from "react";
import { useHistory } from "react-router-dom";
import { Box, DataTable } from "grommet";
import { Star } from "grommet-icons";

import { Customer } from "../store/interfaces";
import { routes } from "../store/routes";
import { dotDateFormat, resolveSum } from "../store/utils";

const ListOfCustomers: React.FC<[Customer]> = (props) => {
    const history = useHistory();
    const array_of_customers = Object.values(props);

    return (
        <DataTable
            sortable
            onClickRow={({ datum }) => history.push(routes.DETAIL + datum.id)}
            columns={[
                {
                    property: "id",
                    header: "ID",
                },
                {
                    property: "name",
                    header: "Name",
                    render: ({ name }) => (
                        <Box pad={{ vertical: "xsmall" }}>{name}</Box>
                    ),
                },
                {
                    property: "birth_date",
                    header: "Birth date",
                    render: ({ birth_date }) => (
                        <Box pad={{ vertical: "xsmall" }}>
                            {dotDateFormat(birth_date)}
                        </Box>
                    ),
                },
                {
                    property: "orders_aggregate",
                    header: "Sum",
                    render: ({ orders_aggregate }) => (
                        <Box pad={{ vertical: "xsmall" }}>
                            {resolveSum(
                                orders_aggregate.aggregate.sum.sum_of_order
                            )}
                        </Box>
                    ),
                },
                {
                    property: "is_vip",
                    header: "VIP",
                    render: ({ is_vip }) => (
                        <Box pad={{ vertical: "xsmall" }}>
                            {is_vip && <Star />}
                        </Box>
                    ),
                },
            ]}
            data={array_of_customers}
        />
    );
};

export default ListOfCustomers;
