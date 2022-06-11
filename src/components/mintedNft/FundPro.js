import { Box, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

function FundPro(props) {
    const [progress, setProgress] = React.useState(0);
    const [raised, setRaised] = useState([]);


    useEffect(() => {
        const sum =  props.data.reduce((n, {raisedFund}) => n + parseFloat(raisedFund), 0);
        setRaised(sum); 

        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= props.goal ? raised : prevProgress ));
        });
        return () => {
          clearInterval(timer);
        };

    }, [props]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1, padding: '10px' }}>
                <LinearProgress variant="determinate" value={progress}   /> <span>{`${Math.round(
                    progress,
                )}%`}</span>
            </Box>
        </Box>
    )
}

export default FundPro