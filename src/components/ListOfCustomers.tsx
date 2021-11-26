import React from "react";
import { useHistory } from "react-router-dom";

import { Box, DataTable } from "grommet";
import { Star } from "grommet-icons";
import TableBox from "./general/TableBox";

import { Customer } from "../store/interfaces";
import { routes } from "../store/routes";
import { dotDateFormat, resolveSum } from "../store/utils";

interface TopCategoriesProps {
    data: Array<Customer>;
}

const ListOfCustomers: React.FC<TopCategoriesProps> = ({ data }) => {
    const history = useHistory();

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
                    render: ({ name }) => <TableBox content={name} />,
                },
                {
                    property: "birth_date",
                    header: "Birth date",
                    render: ({ birth_date }) => (
                        <TableBox content={dotDateFormat(birth_date)} />
                    ),
                },
                {
                    property: "orders_aggregate",
                    header: "Sum",
                    render: ({ orders_aggregate }) => (
                        <TableBox
                            content={resolveSum(
                                orders_aggregate.aggregate.sum.sum_of_order
                            )}
                        />
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
            data={data}
        />
    );
};

export default ListOfCustomers;
