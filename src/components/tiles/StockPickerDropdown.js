import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormInput, InputGroup} from "shards-react";
import React from "react";

export default class StockPickerDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: "Some Ticker...",
            open: false
        };

        this.toggle = this.toggle.bind(this);
        this.populateList = this.populateList.bind(this);
        this.updateSelectedItem = this.updateSelectedItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle() {
        this.setState(prevState => {
            return {open: !prevState.open};
        });
    }

    handleChange(event) {
        this.setState(
            {
                selectedItem: event.target.value
            }
        );

        this.props.onTickerSelected(event.target.value)
    }

    updateSelectedItem(event) {
        event.preventDefault();

        this.setState({
            selectedItem: event.target.name,
        });

        this.props.onTickerSelected(event.target.name)
    }

    populateList() {
        var tickerList = this.props.tickerList;

        if (tickerList === null || tickerList.length === 0) {
            return (
                <DropdownItem>Tickers will appear here when you have transactions added to your account</DropdownItem>)
        }
        return this.props.tickerList.map((x) =>
            <DropdownItem name={x} onClick={this.updateSelectedItem}>{x}</DropdownItem>
        )
    }

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormInput onChange={this.handleChange}
                               placeholder={this.state.placeholder} value={this.state.selectedItem}/>
                    <Dropdown
                        open={this.state.open} toggle={this.toggle}>
                        <DropdownToggle caret>Tickers</DropdownToggle>
                        <DropdownMenu small>
                            {this.populateList()}
                        </DropdownMenu>
                    </Dropdown>
                </InputGroup>
            </div>
        );
    }
}