import React, {Component} from "react";
import {Card, CardBody, CardHeader} from "shards-react";

class AllTransactionsByCompany extends Component {
    constructor(props) {
        super(props);
    }

    generateHeaders() {
        return this.props.headers.map((header) => (<th scope="col" className="border-0">{header}</th>));
    }

    generateRows() {
        console.log(this.props.transactions)
        return this.props.transactions.map((x, i) => (
                <tr>
                    <td>{x.name}</td>
                    <td>{x.ticker}</td>
                    <td>${x.totalProfit.toFixed(2)}</td>
                    <td>{x.totalProfitPercentage}</td>
                </tr>
            )
        );
    }

    formatDate(unformattedDate) {
        let year = unformattedDate.substring(0, 4);
        let month = unformattedDate.substring(5, 7);
        let day = unformattedDate.substring(8, 10);

        return month + "/" + day + "/" + year;
    }

    displayChart() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{this.props.title}</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                        <thead className="bg-light">
                        <tr>
                            {this.generateHeaders()}
                        </tr>
                        </thead>
                        <tbody>
                        {this.generateRows()}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        )
    }

    render() {
        let {transactions} = this.props;

        if (transactions.length === 0)
            return (
                <Card small className="mb-4">
                    <CardHeader>
                        <h1 className="m-0">No Transactions Found</h1>
                    </CardHeader>
                </Card>
            );
        else if (transactions.length > 0)
            return this.displayChart();
    }
}

export default AllTransactionsByCompany;
