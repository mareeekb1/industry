import React from "react";

import { Box, Heading } from "grommet";

import { Orders } from "../store/interfaces";
import { dotDateFormat } from "../store/utils";

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
    const renderList = () => {
        return orders.map((order, key) => (
            <Box
                key={key}
                animation="zoomIn"
                elevation="large"
                border={{ color: "blue", size: "small" }}
                background="grey"
                pad="medium"
                alignContent="center"
                justify="between"
                round="1rem"
                margin="0.5rem 0"
            >
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <span style={{ width: "10%" }}>#{order.id}</span>
                    <span style={{ width: "40%" }}>
                        {dotDateFormat(order.date_of_order)}
                    </span>
                    <span style={{ width: "40%" }}>
                        {order.sum_of_order} eur
                    </span>
                    <span style={{ width: "10%" }}>
                        {order.number_of_products}
                    </span>
                </div>
            </Box>
        ));
    };
    const HeaderBox = () => (
        <Box
            animation="zoomIn"
            pad="0 2rem"
            alignContent="center"
            justify="between"
            border={{
                color: "blue",
                size: "medium",
                style: "groove",
                side: "bottom",
            }}
            margin="1rem 0"
        >
            <div
                style={{ display: "flex", width: "100%", alignItems: "center" }}
            >
                <b style={{ width: "10%" }}>ID</b>
                <b style={{ width: "40%" }}>Date of order</b>
                <b style={{ width: "40%" }}>Price of order</b>
                <b style={{ width: "10%" }}>Number of products</b>
            </div>
        </Box>
    );

    return (
        <>
            <HeaderBox />
            {renderList()}
        </>
    );
};

export default ListOfOrders;
