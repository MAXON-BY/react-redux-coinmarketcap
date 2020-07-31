import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TablePagination from "@material-ui/core/TablePagination";

const rowsInPage = [10, 30, 100, { label: 'All', value: -1 }]

const TablePag = () => {

    const {coins} = useSelector(state => state.coins)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(30);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <TablePagination
            rowsPerPageOptions={rowsInPage}
            component="div"
            count={coins.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
};

export default TablePag;