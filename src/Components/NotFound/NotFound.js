import React from 'react';
import Notfound from '../../Images/notfound.jpg';
const NotFound = () => {
    return (
        <div>
            <h1>404,Not found the page.</h1>
            <img src={Notfound} alt="" width="500" height="400" />
        </div>
    );
};

export default NotFound;