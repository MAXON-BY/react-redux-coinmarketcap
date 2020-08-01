import React from 'react';
import {PropagateLoader} from "react-spinners";

const Spinner = () => {

    return (
        <div className="spinner">
            <PropagateLoader
                color={"#123abc"}
            />
        </div>
    );
};

export default Spinner;