import React from "react";

import {useParams} from 'react-router-dom';

const User = () => {
    const {userId} = useParams();

    return(
        <div>
            <h2>User profile</h2>
            <p>User ID: {userId}</p>
        </div>
    );
}

export default User;
