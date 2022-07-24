import React from 'react';
import {Chip} from "@mui/material";

function PlaceUser({placeUser}){
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    console.log("???test")
    console.log(placeUser.nickname)

    return (
            <Chip
                label={placeUser.nickname}
                variant="filled"
                onDelete={handleDelete} />
    );
}

export default PlaceUser;