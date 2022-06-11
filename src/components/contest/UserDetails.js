import React, { useEffect, useState } from 'react'
import {
    useNewMoralisObject,
    useMoralisCloudFunction,
    useMoralis,
} from "react-moralis";

function UserDetails(props) {
    const { Moralis, user } = useMoralis(); 
    const [ owner, setOwner] = useState();
    const { data, isLoading, error } = useMoralisCloudFunction("getAllUser");

    useEffect(async()=>{
      const fatchContest = JSON.parse(JSON.stringify(data)); 

     const sdf=  fatchContest && fatchContest.filter((e)=>{ 
      if(e.objectId === props.data){ 
        setOwner(e.username);
      }
    } ) 
    },[props,isLoading,error])
 
  return (
    <div>{owner}</div>
  )
}

export default UserDetails