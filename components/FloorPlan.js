import React from 'react';
import Kitchen from './Kitchen';
import Bath from './Bath';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom'




const FloorPlan =() => {



    return(

        <div className="parent">

            
            <Bedroom />

            < Kitchen />
            < Bath />
            <Bedroom />
            < LivingRoom />
            < Bath />
            < Bedroom/>
            
        </div> 




    )



}

export default FloorPlan;
