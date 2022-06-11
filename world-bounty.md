# World-coin integration 

**Using world id to give student a way to get their profile verified which will add authenticity while they communicate with other users on app or while applying for Scholorship or raising money through crowd funding campaifn on StudentDesk**


```javascript

import worldID from "@worldcoin/id";

   async function getVerified() {
        try {
          const result = await worldID.enable();
          console.log("World ID verified succesfully:", result); // <- Pass this result to your wallet transaction
        } catch (failure) {
          console.warn("World ID verification failed:", failure);
          // Re-activate here so your end user can try again
        }
      }
      
      <Button  
      variant="contained" 
      onClick={async () => {  
      try { 
          await getVerified();  
      } catch (error) {  
         console.log(error);  
      }  
      }}   >  Get verified 
    </Button>

```
