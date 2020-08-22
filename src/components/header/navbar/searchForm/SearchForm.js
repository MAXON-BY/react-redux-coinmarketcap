import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const SearchForm = () => {
    return (
        <div className="makeStyles-search-1">
            <div className="makeStyles-searchIcon-1">
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search coin…"
                className="MuiInputBase-root-1 makeStyles-inputInput-2"
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    );
};

export default SearchForm;