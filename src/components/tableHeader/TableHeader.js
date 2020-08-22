import React, {useState} from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TableHead from "@material-ui/core/TableHead";

const TableHeader = ({tableCoin}) => {

    const [expand, setExpand] = useState(true);

    const handleClickExpand = () => {
        setExpand(!expand)
    };

    return (
        <TableHead>
            <TableRow>
                {tableCoin.map(table => (
                    <TableCell key={table} align={"right"} onClick={handleClickExpand}>
                        {table}
                        <IconButton aria-label="expand row" size="small">
                            {expand ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </IconButton>
                    </TableCell>
                ))}

            </TableRow>
        </TableHead>
    );
};

export default TableHeader;