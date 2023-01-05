import * as React from 'react';
import {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';

import Lottie from 'react-lottie'
import {Button, CardActionArea, Chip} from "@mui/material";
import {BrowserView} from "react-device-detect";
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import {CardData} from "../../store/TileStore";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const defaultOptions = (animationData: any) => {
    return {
        loop: true,
        autoplay: true,
        animationData: animationData,
        // animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
};

export type MainPageCardData = {
    title: string,
    description: string,
    link: string,
    animation_json_file: string,
    tech_tags: string[],
    use_case_tags: string[],
    learn_more_link: string
}

export default function MainPageCard(props: CardData) {
    const [data, setData] = useState(undefined);
    const getData = (file: string) => {
        fetch(file
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .catch((error) => {
                    console.log(error);
                    getData("social-media-marketing.json")
                }
            )
            .then((myJson) => {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData(props.animationJsonFile)
    }, [])
    return (
        <Card>
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
                    <motion.div>
                        {data && <Lottie
                            options={defaultOptions(data)}
                            // height={400}
                            // width={400}
                        />}
                    </motion.div>
                </CardContent>
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                {/*<Stack direction="row" spacing={1} paddingTop={1}>*/}

                <Typography variant="body2" color="text.secondary" marginTop={3}>
                    {
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
                    {
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
    );
}