import React from 'react';
import { Box, Spinner} from 'grommet'

const Loader = () => {
    return (
        <Box align='center'>
            <Spinner size="large" color="blue"/> 
        </Box>
    );
};

export default Loader;