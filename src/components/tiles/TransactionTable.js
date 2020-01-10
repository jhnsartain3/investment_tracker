import React from "react";
import {Card, CardBody, CardHeader} from "shards-react";
import PropTypes from "prop-types";

class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
    }

    generateHeaders() {
        const {headers} = this.props;

        return headers.map((header) => (<th scope="col" className="border-0">{header}</th>));
    }

    generateRows() {
        const {data} = this.props;

        var w = data.map((x, i) => (
            <tr>
                {  Object.keys(x).map((r, t) => <td>{x[r]}</td>)}
            </tr>)
        );

        return w;
    }


    render() {
        const {title} = this.props;

        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{title}</h6>
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
    }
}

TransactionTable.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string,
    /**
     * The chart dataset.
     */
    chartData: PropTypes.object,
    /**
     * The Chart.js options.
     */
    chartOptions: PropTypes.object
};

TransactionTable.defaultProps = {
    title: "All Transactions",
    headers: ["Date", "Type", "Name", "X", "Price", "Total"],
    data: [
        {
            element1: "12/12",
            element2: "Sell",
            element3: "AAPL",
            element4: "13",
            element5: "$195.33",
            element6: "$2539.29"
        },
        {
            element1: "12/12",
            element2: "Buy",
            element3: "AAPL",
            element4: "13",
            element5: "$195.33",
            element6: "$2539.29"
        }
    ]
};

export default TransactionTable;
