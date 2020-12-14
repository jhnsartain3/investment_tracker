import * as React from "react";
import AuthenticationService from "../../authentication/services/AuthenticationService";

var authenticationService = new AuthenticationService();

let baseUrl;

class AccessApi extends React.Component {
    constructor(props) {
        super(props);

        let baseUrlTest = "https://investmenttrackerapitest.sartainstudios.com"; //"https://localhost:44344";
        let baseUrlProd = "https://investmenttrackerapi.sartainstudios.com";

        baseUrl = window.location.href.includes("localhost") || window.location.href.includes("test.sartainstudios.com") ?
            baseUrlTest :
            baseUrlProd
    }

    getData(urlExtension) {
        const completeUrl = baseUrl + urlExtension;

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const options = {headers: headers};

        return this.fetch(completeUrl, options)
    }

    postData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'POST';

        const headers = {
            'Authorization': 'Bearer ' + authenticationService.getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify(data);

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
    }

    postFormData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'POST';

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const body = data;

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
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

    fetch(completeUrl, options) {
        return new Promise(function (resolve) {
                fetch(completeUrl, options)
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

    render() {
        return (
            <p>AccessFirebase</p>
        )
    }
}

export default AccessApi;
