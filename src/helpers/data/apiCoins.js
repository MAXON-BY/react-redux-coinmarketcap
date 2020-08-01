import {MONEY, PAGE, PER_PAGE, PRICE_TIME, SORT, URL} from '../constants/fetch'
import * as axios from "axios";

const coingeckoAPI = axios.create({baseURL : URL});

// get Coins
export const congeckoGetCoins = () => {
    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=${PER_PAGE}&page=${PAGE}&sparkline=true&price_change_percentage=${PRICE_TIME}`);
}

// get coinId
export const congeckoGetCoinId = (id) => {
    return coingeckoAPI.get(`/coins/${id}?sparkline=true`);
};

// get paginationCoins
export const congeckoGetPagination  = (page, per_page) => {
    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=${PRICE_TIME}`);
};

// get globalinfo
export const congeckoGetGlobalInfo = () => {
    return coingeckoAPI.get(`/global`)
}
