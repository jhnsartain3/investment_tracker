import React from "react";
import {Card, CardBody, CardHeader} from "shards-react";
import AccessApiWrapper from "../api/AccessApiWrapper";

var accessApiWrapper = new AccessApiWrapper();

class AllTransactionsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            headers: ["Date", "Type", "Ticker", "X", "Price", "Total"],
            title: "All Transactions",
            isLoaded: false
        }
    }

    componentWillMount() {
        accessApiWrapper.getData("/Transaction").then((result) => {
            this.setState({transactions: result, isLoaded: true})
        });
    }

    generateHeaders() {
        return this.state.headers.map((header) => (<th scope="col" className="border-0">{header}</th>));
    }

    generateRows() {
        return this.state.transactions.map((x, i) => (
                <tr>
                    <td>{this.formatDate(x.date)}</td>
                    <td>{x.type}</td>
                    <td>{x.ticker}</td>
                    <td>{x.quantity}</td>
                    <td>${x.price}</td>
                    <td>${x.total}</td>
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

    render() {
        let isLoaded = this.state.isLoaded;

        if (isLoaded) {
            return (
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">{this.state.title}</h6>
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
            );
        } else {
            return (<p>Not yet loaded</p>)
        }
    }
}

export default AllTransactionsTable;
