import CoinPage from "../../pages/CoinPage/CoinPage";
import CoinItemPage from "../../pages/CoinItemPage/CoinItemPage";
import ExchangesPage from "../../pages/ExchangesPage/ExchangesPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ToolsPage from "../../pages/ToolsPage/ToolsPage";
import LearnPage from "../../pages/LearnPage/LearnPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export const routes = [
    {
        path: "/",
        exact: true,
        component: CoinPage
    },
    {
        path: "/coin/:id",
        component: CoinItemPage,
    },
    {
        path: "/exchange",
        component: ExchangesPage,
    },
    {
        path: "/products",
        component: ProductsPage,
    },
    {
        path: "/tools",
        component: ToolsPage,
    },
    {
        path: "/learn",
        component: LearnPage,
    },
    {
        path: "*",
        component: NotFoundPage,
    }
];