import React, {useState} from "react";
import IframeResizer from "iframe-resizer-react";
import {Backdrop, CircularProgress, Container,} from "@mui/material";
import {AnimatedDatabricks} from "../navbar/Navbar";

const IFrameDataAppStyleDefaults = {
    width: "10vw",
    minWidth: "100%",
    border: "0px",
    minHeight: "80vh",
    overflow: "visible",
}

type IFrameData = {
    src: string
    optionalHeight?: number
}
export const AppIFrame = (props: IFrameData) => {
    const [loading, setLoading] = useState(true)

    return <Container style={{
        paddingTop: 25,
        paddingBottom: 25
    }} fixed>
        {loading && (
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}>
                <AnimatedDatabricks height={90} width={90} scale={1}/>
            </Backdrop>
        )}
        <IframeResizer
            checkOrigin={false}
            // log
            height={props.optionalHeight}
            scrolling={true}
            onResized={(msg) => {
                setLoading(false)
            }}
            onLoad={() => {
                setLoading(false)
            }}
            src={props.src}
            style={{...IFrameDataAppStyleDefaults}}
        />
    </Container>
}