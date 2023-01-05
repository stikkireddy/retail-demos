import Grid from "@mui/material/Grid";
import MainPageCard from "../card/MainPageCard";
import React from "react";
import {Container} from "@mui/material";
import {CardData, useCards} from "../../store/TileStore";



const getGridItems = (cards: CardData[]) => {
    return cards.map(
        (cardData, index) => {
            return (<Grid
                item
                // xs={12} sm={6} md={4}
                xs={12} sm={6} md={4}
                lg={4}
                xl={4}
                key={index}
            >
                <MainPageCard {...cardData}/>
            </Grid>)
        }
    )
}

export const HomeGrid = () => {
    const {cards} = useCards()
    return <Container style={{
        paddingTop: 25,
        paddingBottom: 25
    }} fixed>
        <Grid container
              alignItems="center"
              spacing={{xs: 2, md: 3}}
        >
            {getGridItems(cards)}
        </Grid>
    </Container>
}