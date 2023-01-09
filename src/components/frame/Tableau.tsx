import React from "react";
// @ts-ignore
import TableauReport from 'tableau-react';
import {Container} from "@mui/material";



type TableauData = {
    src: string
}
export const Tableau =(props: TableauData)=> {
    return (
        <Container style={{
            paddingTop: 25,
            paddingBottom: 25,
            height: 1000
        }} fixed> <TableauReport
            url={props.src}
            options={{
                hideTabs: true,

            }}
            query="&:jsdebug=false&:toolbar=no"
        />
        </Container>
    );
}