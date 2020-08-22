import React from 'react';
import LogoHeader from "../../../../common/images/logoHeader.svg";
import Typography from "@material-ui/core/Typography";

const Logo = () => {
    return (
        <Typography className="makeStyles-title-1" noWrap>
            <img className="logoimg"
                 src={LogoHeader}
                 alt="logo"/>
        </Typography>
    );
};

export default Logo;