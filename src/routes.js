import React from "react";
import {Redirect} from "react-router-dom";
// Layout Types
import {DefaultLayout} from "./components/layout/default layout";
// Route Views
import DashboardOverviewScreen from "./pages/DashboardOverviewScreen";
import AllTransactionsScreen from "./pages/AllTransactionsScreen";
import StockOverviewScreen from "./pages/StockOverviewScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import withAuthentication from "./authentication/higherOrderComponents/withAuthentication";
import Empty from "./components/layout/default layout/Empty";
import SignInScreen from "./pages/SignInScreen";
import OwnedCompaniesScreen from "./pages/OwnedTickersScreen";
import TransactionsByTicker from "./pages/TransactionsByTicker";
import ErrorScreen from "./pages/ErrorScreen";

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/dashboard-overview"/>
    },
    {
        path: "/dashboard-overview",
        layout: DefaultLayout,
        component: withAuthentication(DashboardOverviewScreen)
    },
    {
        path: "/stock-overview",
        layout: DefaultLayout,
        component: withAuthentication(StockOverviewScreen)
    },
    {
        path: "/transactions-list",
        layout: DefaultLayout,
        component: withAuthentication(AllTransactionsScreen)
    },
    {
        path: "/owned-tickers",
        layout: DefaultLayout,
        component: withAuthentication(OwnedCompaniesScreen)
    },
    {
        path: "/transactions-by-ticker",
        layout: DefaultLayout,
        component: withAuthentication(TransactionsByTicker)
    },
    {
        path: "/login",
        layout: Empty,
        component: SignInScreen
    },
    {
        path: "/registration",
        layout: Empty,
        component: ErrorScreen
    },
    {
        path: "/error-screen",
        layout: DefaultLayout,
        component: ErrorScreen
    }
];
