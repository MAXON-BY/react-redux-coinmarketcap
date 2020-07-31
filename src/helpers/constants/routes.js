import CoinPage from "../../pages/CoinPage/CoinPage";
import CoinItemPage from "../../pages/CoinItemPage/CoinItemPage";
import ExchangesPage from "../../pages/ExchangesPage/ExchangesPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ToolsPage from "../../pages/ToolsPage/ToolsPage";
import LearnPage from "../../pages/LearnPage/LearnPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export const HOME_PAGE = '/'
export const COIN_ID_PAGE = "/coin/:id"
export const EXCHANGE_PAGE= "/exchange"
export const PRODUCTS_PAGE= "/products"
export const TOOLS_PAGE= "/tools"
export const LEARN_PAGE= "/learn"
export const NOT_FOUND_PAGE = "*"

export const routes = [
    {
        path: HOME_PAGE,
        exact: true,
        component: CoinPage
    },
    {
        path: COIN_ID_PAGE,
        component: CoinItemPage,
    },
    {
        path: EXCHANGE_PAGE,
        component: ExchangesPage,
    },
    {
        path: PRODUCTS_PAGE,
        component: ProductsPage,
    },
    {
        path: TOOLS_PAGE,
        component: ToolsPage,
    },
    {
        path: LEARN_PAGE,
        component: LearnPage,
    },
    {
        path: NOT_FOUND_PAGE,
        component: NotFoundPage,
    }
];