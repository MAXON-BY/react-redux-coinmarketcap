import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const SearchForm = () => {

    const [search, setSearch] = useState('')

    const onSearchHandle = (e) => {
        setSearch(e.target.value)
    }

    const onClickSearch = (e) => {
        if (e.keyCode === 13) {
            console.log('search icon: ', search)
        }
    }

    return (
        <div className="makeStyles-search-1">
            <div className="makeStyles-searchIcon-1">
                <SearchIcon />
            </div>
            <InputBase
                onKeyDown={onClickSearch}
                onChange={onSearchHandle}
                placeholder="Search coin…"
                className="MuiInputBase-root-1 makeStyles-inputInput-2"
                inputProps={{'aria-label': 'search'}}
                value={search}
            />
        </div>
    );
};

export default SearchForm;