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
    iframeHeight?: number,
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
            title: "Lakehmon",
            description: "This is a game walking you through lakehouse.",
            linkRoute: "/lakehmon",
            iframeUrl: "https://stikkireddy.github.io/lakehmon/#/",
            animationJsonFile: "lakehmon-animation.json",
            techTags: [
                {
                    name: "MLflow",
                    link: "https://www.databricks.com/product/managed-mlflow",
                },
                {
                    name: "BERT",
                    link: "https://www.sbert.net/",
                },
                ],
            useCaseTags: [
                {
                    name: "Recommender Systems",
                    link: "https://www.databricks.com/solutions/accelerators/recommendation-engines",
                }
            ],
            learnMoreLink: "https://www.databricks.com/blog/2022/10/31/welcome-haunted-lakehouse.html",
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
        },
        {
            title: "Recipe Finder",
            description: "This is realtime anomaly detection using Databricks serverless model serving.",
            linkRoute: "/recipe",
            iframeUrl: "https://avisoori-databricks.github.io/databricksrecipeai/",
            iframeHeight: 850,
            animationJsonFile: "recipe-finder-animation.json",
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
                    name: "SBERT",
                    link: "https://www.sbert.net/",
                }
            ],
            useCaseTags: [
                {
                    name: "Image Based Search",
                    link: "https://www.databricks.com/blog/2022/11/08/theres-no-ai-pumpkin-pie-there-should-be-delivering-novel-application-experiences"
                }
            ],
            learnMoreLink: "https://www.databricks.com/blog/2022/11/08/theres-no-ai-pumpkin-pie-there-should-be-delivering-novel-application-experiences",
        }
    ].sort((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    }),
}))