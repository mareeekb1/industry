import React from 'react';
import { Box, Grid, Heading } from 'grommet';

import { Star, User } from 'grommet-icons';
import { Customer } from '../store/interfaces';
import {getSumOfOrders,dotDateFormat }from '../store/utils'

const CustomerDetail:React.FC<Customer> = (props) => {
    return (
        <Grid
            rows={['xsmall']}
            columns={['xsmall', 'small']}
            gap="small"
            areas={[
                { name: 'icon', start: [0, 0], end: [1, 0] },
                { name: 'main', start: [1, 0], end: [2, 0] },
            ]}
            >
            <Box gridArea="icon" animation="zoomIn">
                <User size="xlarge"/>
            </Box>
            <Box gridArea="main" justify="center" animation="zoomIn">
                <Heading  margin="0" level={2}>
                    {props.name}
                    {props.is_vip &&
                        <span style={styles.vip}><Star  color="blue" style={styles.vip}/>VIP</span>
                    }
                </Heading>
                <Heading level={6} margin="0">Birth date: {dotDateFormat(props.birth_date)}</Heading>
                {props.orders.length !== 0 &&
                <Box direction="row">
                    <Heading level={4} margin="0 1rem 0 0">Total price of orders: </Heading>
                    <Heading level={4} margin="0" color='blue'>{getSumOfOrders(props.orders)}</Heading>
                </Box>
                }
            </Box>
        </Grid>
    );
};
const styles={
    vip:{
        margin:'0 1rem'
    }
}
export default CustomerDetail;