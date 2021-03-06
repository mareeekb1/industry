import React from "react";
import { Box, Grid, Heading } from "grommet";

import { Star, User } from "grommet-icons";
import { Customer } from "../store/interfaces";
import { dotDateFormat } from "../store/utils";

const CustomerDetail: React.FC<Customer> = ({ name, is_vip, birth_date }) => {
    return (
        <Grid
            rows={["xsmall"]}
            columns={["xsmall", "small"]}
            gap="small"
            areas={[
                { name: "icon", start: [0, 0], end: [1, 0] },
                { name: "main", start: [1, 0], end: [2, 0] },
            ]}
        >
            <Box gridArea="icon" animation="zoomIn">
                <User size="xlarge" />
            </Box>
            <Box gridArea="main" justify="center" animation="zoomIn">
                <Heading margin="0" level={2}>
                    {name}
                    {is_vip && (
                        <span style={styles.vip}>
                            <Star color="blue" style={styles.vip} />
                            VIP
                        </span>
                    )}
                </Heading>
                <Heading level={6} margin="0">
                    Birth date: {dotDateFormat(birth_date)}
                </Heading>
            </Box>
        </Grid>
    );
};
const styles = {
    vip: {
        margin: "0 1rem",
    },
};
export default CustomerDetail;
