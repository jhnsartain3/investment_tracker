export default function () {
    return [
        {
            title: "Dashboard",
            to: "/dashboard-overview",
            htmlBefore: '<i class="material-icons">table_chart</i>'
        },
        {
            title: "Stock Overview",
            to: "/stock-overview",
            htmlBefore: '<i class="material-icons">vertical_split</i>'
        },
        {
            title: "Transactions",
            to: "/transactions-list",
            htmlBefore: '<i class="material-icons">view_module</i>'
        }
    ];
}
