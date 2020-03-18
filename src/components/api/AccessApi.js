import * as React from "react";
import AuthenticationService from "../../authentication/services/AuthenticationService";

var authenticationService = new AuthenticationService();

class AccessApi extends React.Component {
    constructor(props) {
        super(props);

        let baseUrlTest = "https://sartain-studios-api.com:2083"; //"https://localhost:44344";
        let baseUrlProd = "https://sartain-studios-api.com:2053";

        this.state = {
            url: window.location.href.includes("localhost") ?
                baseUrlTest :
                baseUrlProd
        };
    }

    getData(urlExtension) {
        const url = this.state.url + urlExtension;

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const options = {headers: headers};

        return new Promise(function (resolve) {
                fetch(url, options)
                    .then(res => res.json())
                    .then((result) => {
                            return resolve(result)
                        },
                        (error) => {
                            return resolve(error)
                        });
            }
        )
    }

    postData(urlExtension, data) {
        const url = this.state.url + urlExtension;

        const httpMethod = 'POST';

        const headers = {
            'Authorization': 'Bearer ' + authenticationService.getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify(data);

        const options = {method: httpMethod, headers: headers, body: body};

        return new Promise(function (resolve) {
                fetch(url, options)
                    .then(res => res.json())
                    .then((result) => {
                            return resolve(result)
                        },
                        (error) => {
                            return resolve(error)
                        });
            }
        )
    }

    postFormData(urlExtension, data) {
        const url = this.state.url + urlExtension;

        const httpMethod = 'POST';

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const body = data;

        const options = {method: httpMethod, headers: headers, body: body};

        return new Promise(function (resolve) {
                fetch(url, options)
                    .then(res => res.json())
                    .then((result) => {
                            return resolve(result)
                        },
                        (error) => {
                            return resolve(error)
                        });
            }
        )
    }

    deleteData(urlExtension, uid) {
        const url = this.state.url + urlExtension;

        return new Promise(function (resolve) {
                fetch(url + uid, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then((result) => {
                            return resolve("Deleted: " + uid)
                        },
                        (error) => {
                            return resolve("Failed to delete: " + uid + " error: " + error)
                        });
            }
        )
    }

    render() {
        return (
            <p>AccessFirebase</p>
        )
    }
}

export default AccessApi;
