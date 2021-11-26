import React from "react";
import { Box } from "grommet";

interface TableBoxProps {
    content: String;
}

const TableBox: React.FC<TableBoxProps> = ({ content }) => {
    return <Box pad={{ vertical: "xsmall" }}>{content}</Box>;
};

export default TableBox;
