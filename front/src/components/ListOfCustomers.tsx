import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from 'grommet';
import {Star} from 'grommet-icons'


import { Customers } from '../store/interfaces';
import { routes } from '../store/routes';
import { getSumOfOrders,dotDateFormat } from '../store/utils';

const ListOfCustomers:React.FC<Customers> = ({ customers }) => {
    const history = useHistory()
    const renderList = () =>{
        return customers.map((customer,key)=>(
                <Box
                    key={key}
                    animation="zoomIn"
                    elevation="medium"
                    border={{ color: 'blue', size: 'small' }}
                    background="grey"
                    pad="medium"
                    alignContent="center"
                    justify="between"
                    round="1rem"
                    onClick={()=>history.push(`${routes.DETAIL}${customer.id}`)}
                    hoverIndicator={
                        {
                        background: {
                          color: "white",
                          opacity: 0.05 ,
                          repeat: "no-repeat",
                          size: "xxlarge",
                        },
                        elevation: "xlarge"
                      }}
                    margin="0.5rem 0">
                    <div style={{display:'flex',width:'100%',alignItems:'center'}}>
                        <span style={{width:'10%'}}>#{customer.id}</span>
                        <span style={{width:'30%'}}>{customer.name}</span>
                        <span style={{width:'30%'}}>| {dotDateFormat(customer.birth_date)}</span>
                        <span style={{width:'20%'}}>{getSumOfOrders(customer.orders)}</span>
                        {customer.is_vip && <span style={{width:'10%',textAlign:'right'}}><Star color="blue"/></span>}
                    </div>
                </Box>
        ))
    }
    const HeaderBox = ()=>(
        <Box
            animation="zoomIn"
            pad="0 2rem"
            alignContent="center"
            justify="between"
            border={{
                color: 'blue',
                size: "medium",
                style: "groove",
                side: "bottom"
              } }
            margin="1rem 0">
            <div style={{display:'flex',width:'100%',alignItems:'center'}}>
                <b style={{width:'10%'}}>ID</b>
                <b style={{width:'30%'}}>Name</b>
                <b style={{width:'30%'}}>Birth date</b>
                <b style={{width:'20%'}}>Total price of orders</b>
                <b style={{width:'10%',textAlign:'right'}}>VIP</b>
            </div>
        </Box>
    )

    return (
        <>
            <HeaderBox/>
            {renderList()}
        </>
    );
};

export default ListOfCustomers;