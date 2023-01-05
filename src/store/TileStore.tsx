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
            title: "Store Forecasting",
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
        },
        {
            title: "Anomaly Detection",
            description: "This is realtime anomaly detection using Databricks serverless model serving.",
            linkRoute: "/anomaly",
            iframeUrl: "https://dev.api.tsriharsha.io/gradio/nrf/anomaly/",
            animationJsonFile: "iot-anomaly-animation.json",
            techTags: [
                {
                    name: "ML",
                    link: "https://www.databricks.com/product/machine-learning",
                },
                {
                    name: "Model Serving",
                    link: "https://docs.databricks.com/mlflow/model-serving.html",
                },
                {
                    name: "Tensorflow",
                    link: "https://www.databricks.com/tensorflow",
                }
            ],
            useCaseTags: [
                {
                    name: "Anomaly Detection",
                    link: "https://www.databricks.com/glossary/anomaly-detection"
                }
            ],
            learnMoreLink: "https://www.databricks.com/blog/2022/08/08/near-real-time-anomaly-detection-with-delta-live-tables-and-databricks-machine-learning.html",
        }
    ],
}))