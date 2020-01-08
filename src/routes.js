import React from "react";
import {Redirect} from "react-router-dom";
// Layout Types
import {DefaultLayout} from "./components/layout/default layout";
// Route Views
import DashboardOverview from "./pages/DashboardOverview";
import TransactionsTables from "./pages/TransactionsTables";
import StockOverview from "./pages/StockOverView";

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
        component: DashboardOverview
    },
    {
        path: "/stock-overview",
        layout: DefaultLayout,
        component: StockOverview
    },
    {
        path: "/transactions-list",
        layout: DefaultLayout,
        component: TransactionsTables
    }
];
