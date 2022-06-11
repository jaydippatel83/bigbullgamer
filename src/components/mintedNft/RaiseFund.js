import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function RaiseFund(props) {
    const [fund, setFund] = useState();
    const [raised, setRaised] = useState([]);


    useEffect(() => { 
      const sum =  props.data.reduce((n, {raisedFund}) => n + parseFloat(raisedFund), 0);
      setRaised(sum); 
    }, [props]) 
    
    return (
        <Typography color="textPrimary" gutterBottom variant="h5">
            Fund Raised: {raised} ONE
        </Typography>
    )
}

export default RaiseFund