import React from "react";
import {Redirect} from "react-router-dom";
// Layout Types
import {DefaultLayout} from "./components/layout/default layout";
// Route Views
import DashboardOverviewScreen from "./pages/DashboardOverviewScreen";
import AllTransactionsScreen from "./pages/AllTransactionsScreen";
import StockOverviewScreen from "./pages/StockOverviewScreen";
import LoginScreen from "./pages/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen";

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
        component: DashboardOverviewScreen
    },
    {
        path: "/stock-overview",
        layout: DefaultLayout,
        component: StockOverviewScreen
    },
    {
        path: "/transactions-list",
        layout: DefaultLayout,
        component: AllTransactionsScreen
    },
    {
        path: "/login",
        layout: DefaultLayout,
        component: LoginScreen
    },
    {
        path: "/registration",
        layout: DefaultLayout,
        component: RegistrationScreen
    }
];
