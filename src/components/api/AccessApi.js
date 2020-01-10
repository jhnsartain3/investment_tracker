import * as React from "react";

class AccessAPI extends React.Component {
    constructor(props) {
        super(props);
        let baseUrlTest = "https://localhost:44344/";
        let baseUrlProd = "https://sartain-studios-api.com:10100/";

        this.state = {
            url: window.location.href.includes("localhost") ?
                baseUrlTest :
                baseUrlProd
        };
    }

    getData(urlExtension) {
        const url = this.state.url + urlExtension;

        return new Promise(function (resolve) {
                fetch(url)
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

        return new Promise(function (resolve) {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then((result) => {
                            console.log(result);
                            alert(result.error);
                            return resolve(result)
                        },
                        (error) => {
                            alert(error);
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

export default AccessAPI;
