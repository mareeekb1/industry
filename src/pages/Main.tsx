import React from 'react';

import {Box, Heading} from 'grommet'
import ListOfCustomers from '../components/ListOfCustomers'
import Loader from '../components/general/Loader';

import { useQuery } from 'urql';

const Main = () => {

    const Query = `
    query MyQuery {
        Customers {
          orders {
            customer_id
            date_of_order
            id
            number_of_products
            sum_of_order
          }
          birth_date
          id
          is_vip
          name
        }
      }
    `;

    const [result] = useQuery({
        query: Query,
      });
    const { data, fetching, error } = result;

    return (
        <Box>
            <Heading color="blue">List of customers</Heading>
            {fetching ?
                <Loader/>
            :
            <>
                {error ?
                    <p>Oh no... {error.message}</p> :
                    <ListOfCustomers customers={data.Customers}/>
                }
            </>
            }
        </Box>
    );
};

export default Main;