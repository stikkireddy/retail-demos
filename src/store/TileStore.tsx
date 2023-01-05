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
            title: "Outbreak Demo",
            description: "This is a sample demo using gradio for plotting outbreak data.",
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
                    name: "Databricks",
                    link: "https://www.databricks.com/",
                }
            ],
            learnMoreLink: "https://google.com",
        },
        {
            title: "Forecasting Demo",
            description: "This is forecasting sales data using state of the art AI deep learning models.",
            linkRoute: "/forecast",
            iframeUrl: "https://dev.api.tsriharsha.io/gradio/nrf/forecast/",
            animationJsonFile: "forecasting-animation.json",
            techTags: [
                {
                    name: "SQL",
                    link: "https://www.databricks.com/product/databricks-sql",
                },
                {
                    name: "MLflow",
                    link: "https://www.databricks.com/product/managed-mlflow",
                },
                {
                    name: "Darts",
                    link: "https://github.com/unit8co/darts",
                }
                ],
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