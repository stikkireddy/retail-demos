import React from "react";
import IframeResizer from "iframe-resizer-react";
import {Container} from "@mui/material";

const IFrameDataAppStyleDefaults = {
    width: "10vw",
    minWidth: "100%",
    border: "0px",
    minHeight: "80vh",
    overflow: "visible",
}

type IFrameData = {
    src: string
}
export const AppIFrame = (props: IFrameData) => {
    return <Container style={{
        paddingTop: 25,
        paddingBottom: 25
    }} fixed>
        <IframeResizer
            checkOrigin={true}
            // log
            src={props.src}
            style={{...IFrameDataAppStyleDefaults}}
        />
    </Container>
}