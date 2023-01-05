import create from 'zustand'

export type Tag = {
    name: string
    link: string
    toolTip?: string
}

export type CardData = {
    title: string,
    description: string,
    linkRoute: string,
    iframeUrl: string
    animationJsonFile: string,
    techTags: Tag[],
    useCaseTags: Tag[],
    learnMoreLink: string

}

interface CardStore {
    cards: CardData[]
}

export const useCards = create<CardStore>(() => ({
    cards: [
        {
            title: "Shrimp and Chorizo Paella",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            linkRoute: "/test",
            iframeUrl: "https://dev.api.tsriharsha.io/gradio/outbreak/",
            animationJsonFile: "social-media-marketing.json",
            techTags: [
                {
                    name: "SQL",
                    link: "https://www.databricks.com/product/databricks-sql",
                }],
            useCaseTags: [
                {
                    name: "Demand Forecasting",
                    link: "https://www.databricks.com/solutions/accelerators/demand-forecasting",
                }
            ],
            learnMoreLink: "https://google.com",
        }
    ],
}))