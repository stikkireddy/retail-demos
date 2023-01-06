import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';

import Lottie from 'react-lottie'
import {Button, CardActionArea, Chip, Skeleton} from "@mui/material";
import {BrowserView} from "react-device-detect";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
import {CardData} from "../../store/TileStore";
import {useQrModal} from "../qrmodal/QrModal";

const defaultOptions = (animationData: any) => {
    return {
        loop: true,
        autoplay: true,
        animationData: animationData,
        // animationData,
        rendererSettings: {
            preserveAspectRatio: "none"
            // preserveAspectRatio: "xMidYMin slice"
        }
    }
};

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// @ts-ignore
export default function MainPageCard(props: CardData) {
    const [data, setData] = useState(undefined);
    const [handleOpen, modal] = useQrModal()
    const [loading, setLoading] = useState(true)
    const getData = async (file: string) => {
        console.log("loading true")
        fetch(file
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                // console.log(response)
                return response.json();
            })
            .catch((error) => {
                    console.log(error);
                    getData("social-media-marketing.json")
                    setLoading(false)
                }
            )
            .then((myJson) => {
                // console.log(myJson);
                setData(myJson)
                setLoading(false)
            })
    }


    useEffect(() => {
        getData(props.animationJsonFile)
    }, [])
    return (
        // make cards all the same size with flex
        <>
            <Card style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <CardActionArea
                    component={Link} to={props.linkRoute}
                >
                    <CardHeader
                        action={
                            <BrowserView>
                                <IconButton aria-label="share"
                                            onMouseDown={event => event.stopPropagation()}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                // @ts-ignore
                                                handleOpen();
                                                console.log("Button clicked");
                                            }}>
                                    <ShareIcon/>
                                </IconButton>
                            </BrowserView>
                        }
                        titleTypographyProps={{variant: 'h6'}}
                        title={props.title}
                    />
                    <CardContent>
                        <AnimatePresence exitBeforeEnter>
                            {!loading ?
                                <motion.div
                                    key={"lotte"}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.3}}
                                    exit={{opacity: 0}}>
                                    <Lottie
                                        options={defaultOptions(data)}
                                        height={320}/>
                                </motion.div> : (<>
                                        <motion.div
                                            key={"skeleton"}
                                            // initial={{opacity: 0}}
                                            // animate={{opacity: 1}}
                                            transition={{duration: 0.3,}}
                                            exit={{opacity: 0}}>
                                            {[...Array(7).keys()].map(() => {
                                                return <Skeleton variant="rounded" height={40} style={{
                                                    margin: 5
                                                }}/>
                                            })
                                            }
                                        </motion.div>
                                    </>
                                )
                            }
                        </AnimatePresence>
                    </CardContent>
                </CardActionArea>
                <CardContent style={{padding: 12}}>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                    {/*<Stack direction="row" spacing={1} paddingTop={1}>*/}

                    <Typography variant="body2" color="text.secondary" marginTop={1}>
                        Technology: {
                        props.techTags.map((tag) => {
                            return <Chip
                                clickable
                                label={tag.name}
                                component={"a"}
                                href={tag.link}
                                target={"_blank"}
                                color="primary"
                                size={"small"}
                                style={{margin: 2.5}}/>
                        })
                    }

                    </Typography>
                    <Typography variant="body2" color="text.secondary" marginTop={0}>
                        Use Cases: {
                        props.useCaseTags.map((tag) => {
                            return <Chip
                                clickable
                                label={tag.name}
                                component={"a"}
                                target={"_blank"}
                                href={tag.link}
                                color="secondary"
                                size={"small"}
                                style={{margin: 2.5}}/>
                        })
                    }
                    </Typography>
                    {/*</Stack>*/}
                </CardContent>
                <CardActions disableSpacing>
                    <Button size="small" href={props.learnMoreLink} target={"_blank"}>Learn More</Button>
                </CardActions>
            </Card>
            {modal}
        </>
    );
}