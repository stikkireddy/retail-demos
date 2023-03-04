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
    iframeUrl?: string
    iframeHeight?: number,
    tableauUrl?: string
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
            iframeUrl: "https://dev.railway.tsriharsha.io/gradio/nrf/forecast/",
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
            learnMoreLink: "https://www.databricks.com/blog/2022/02/09/jumpstart-your-machine-learning-forecasting-with-databricks-automl.html",
        },
        {
            title: "Anomaly Detection",
            description: "This is realtime anomaly detection using Databricks serverless model serving.",
            linkRoute: "/anomaly",
            iframeUrl: "https://dev.railway.tsriharsha.io/gradio/nrf/anomaly/",
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
            title: "Propensity to Purchase",
            description: "Understand the likelihood a customer will be predisposed to purchasing a product based on prior actions.",
            linkRoute: "/propensity-purchase",
            iframeUrl: "https://dev.railway.tsriharsha.io/gradio/nrf/purchase-propensity/",
            animationJsonFile: "propensity-purchase-animation.json",
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
                    name: "Scikit-Learn",
                    link: "https://scikit-learn.org/stable/",
                }
            ],
            useCaseTags: [
                {
                    name: "Propensity Scoring",
                    link: "https://www.databricks.com/blog/2022/06/03/getting-started-with-personalization-through-propensity-scoring.html"
                }
            ],
            learnMoreLink: "https://www.databricks.com/blog/2022/06/03/getting-started-with-personalization-through-propensity-scoring.html",
        },
        {
            title: "Recipe Finder",
            description: "Find new recipes with description or image of your favorite food.",
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
        },
        {
            title: "Retail Executive Dashboard",
            description: "Executive summary of your retail business.",
            linkRoute: "/dashboard-retailsummary",
            tableauUrl: "https://public.tableau.com/views/LovelyticsRetailDashboards/RetailExecutiveSummary?:language=en-US&:display_count=n&:origin=viz_share_link",
            animationJsonFile: "dashboard-animation.json",
            techTags: [
                {
                    name: "SQL",
                    link: "https://www.databricks.com/product/databricks-sql",
                },
                {
                    name: "Serverless",
                    link: "https://www.databricks.com/blog/2021/08/30/announcing-databricks-serverless-sql.html",
                },
                {
                    name: "Tableau",
                    link: "https://www.databricks.com/partners/tableau",
                }
            ],
            useCaseTags: [
                {
                    name: "Brickbuilder Solutions",
                    link: "https://www.databricks.com/company/partners/consulting-and-si/partner-solutions"
                },
                {
                    name: "Lovelytics",
                    link: "https://lovelytics.com/partners/databricks/"
                }
            ],
            learnMoreLink: "https://www.databricks.com/company/partners/consulting-and-si/partner-solutions",
        },
        {
            title: "Purchase Analytics Dashboard",
            description: "Purchase analytics for your consumers.",
            linkRoute: "/dashboard-purchaseanalytics",
            tableauUrl: "https://public.tableau.com/views/LovelyticsRetailDashboards/PurchaseAnalysis?:language=en-US&:display_count=n&:origin=viz_share_link",
            animationJsonFile: "purchase-analytics-animation.json",
            techTags: [
                {
                    name: "SQL",
                    link: "https://www.databricks.com/product/databricks-sql",
                },
                {
                    name: "Serverless",
                    link: "https://www.databricks.com/blog/2021/08/30/announcing-databricks-serverless-sql.html",
                },
                {
                    name: "Tableau",
                    link: "https://www.databricks.com/partners/tableau",
                }
            ],
            useCaseTags: [
                {
                    name: "Brickbuilder Solutions",
                    link: "https://www.databricks.com/company/partners/consulting-and-si/partner-solutions"
                },
                {
                    name: "Lovelytics",
                    link: "https://lovelytics.com/partners/databricks/"
                }
            ],
            learnMoreLink: "https://www.databricks.com/company/partners/consulting-and-si/partner-solutions",
        },
        {
            title: "Data Sharing Explorer",
            description: "Share data securely to anyone, anywhere!",
            linkRoute: "/delta-sharing",
            iframeUrl: "https://dev.railway.tsriharsha.io/gradio/nrf/delta-sharing/",
            // iframeHeight:
            animationJsonFile: "share-animation.json",
            techTags: [
                {
                    name: "Delta Sharing",
                    link: "https://www.databricks.com/product/delta-sharing",
                },
                {
                    name: "Delta Lake",
                    link: "https://delta.io/",
                }
            ],
            useCaseTags: [
                {
                    name: "Data Marketplace",
                    link: "https://www.databricks.com/blog/2022/06/28/introducing-databricks-marketplace-an-open-marketplace-for-all-data-and-ai-assets.html"
                },
                {
                    name: "Open Data Sharing",
                    link: "https://www.databricks.com/blog/2021/05/26/introducing-delta-sharing-an-open-protocol-for-secure-data-sharing.html"
                }
            ],
            learnMoreLink: "https://www.databricks.com/discover/demos/deltasharing",
        },
        {
            title: "Delta Sharing Query Editor With Webassembly",
            description: "Query a delta share using only your browser.",
            linkRoute: "/delta-sharing-browser",
            iframeUrl: "https://stikkireddy.github.io/delta-sharing-browser/",
            iframeHeight: 850,
            animationJsonFile: "data-sharing-animation.json",
            techTags: [
                {
                    name: "Open Data Sharing",
                    link: "https://www.databricks.com/blog/2021/05/26/introducing-delta-sharing-an-open-protocol-for-secure-data-sharing.html"
                },
                {
                    name: "Delta Lake",
                    link: "https://delta.io/",
                },
                {
                    name: "Webassembly",
                    link: "https://webassembly.org/",
                },
                {
                    name: "DuckDB Wasm",
                    link: "https://duckdb.org/2021/10/29/duckdb-wasm.html",
                }
            ],
            useCaseTags: [
                {
                    name: "Data Marketplace",
                    link: "https://www.databricks.com/blog/2022/06/28/introducing-databricks-marketplace-an-open-marketplace-for-all-data-and-ai-assets.html"
                },
                {
                    name: "Open Data Sharing",
                    link: "https://www.databricks.com/blog/2021/05/26/introducing-delta-sharing-an-open-protocol-for-secure-data-sharing.html"
                }
            ],
            learnMoreLink: "https://www.databricks.com/discover/demos/deltasharing",
        },
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