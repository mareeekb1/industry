import React from 'react';
import { Box, Heading } from 'grommet';
import {useHistory, useParams} from 'react-router-dom'
import CustomerDetail from '../components/CustomerDetail';
import { Previous } from 'grommet-icons';
import ListOfOrders from '../components/ListOfOrders';
import { useQuery } from 'urql';
import { GetCustomerByIdQuery } from '../store/queries';
import Loader from '../components/general/Loader';
import { routes } from '../store/routes';

const Detail = () => {

    const params = useParams<{id:string}>()
    const history = useHistory()


    const [result] = useQuery({
        query: GetCustomerByIdQuery,
        variables: { id: parseInt(params.id) },
    });

    const { data, fetching, error} = result


    return (
        <Box animation="zoomIn">
            <Box direction="row" align='center' >
                <Previous size='large' style={styles.back_btn} onClick={()=>history.push(routes.MAIN)}/>
                <Heading color="blue" alignSelf="center">
                    <span style={{textAlign:'center'}}>Customer detail</span>
                </Heading>
            </Box>
            {(fetching  || !data) ?
                <Loader/>
            :
            <>
                {error ?
                    <p>Oh no... {error.message}</p> :
                    <>
                        <CustomerDetail {...data.Customers_by_pk}/>
                        <ListOfOrders orders={data.Customers_by_pk.orders}/>
                    </>
                }
            </>
            }
        </Box>
    );
};
const styles={
    back_btn:{
        cursor:'pointer',
        border:'2px solid white',
        borderRadius:'50rem',
        padding:'0.5rem',
        marginRight:'2rem',
    }
}
export default Detail;