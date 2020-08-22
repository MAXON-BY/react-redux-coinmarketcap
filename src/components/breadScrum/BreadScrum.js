import React from 'react';
import {Link} from "react-router-dom";

const BreadScrum = ({id}) => {
    return (
        <div className="breadscrum">
            <Link to={'/'}>Home</Link> / {id}
        </div>
    );
};

export default BreadScrum;