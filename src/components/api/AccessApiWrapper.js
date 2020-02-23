import * as React from "react";
import AccessAPI from "./AccessApi";

class AccessApiWrapper extends AccessAPI {
    getData(item) {
        return super.getData(item);
    }

    postData(urlExtension, data) {
        return super.postData(urlExtension, data);
    }

    postFormData(urlExtension, data) {
        return super.postFormData(urlExtension, data);
    }

    deleteData(urlExtension, uid) {
        return super.deleteData(urlExtension, uid);
    }

    render() {
        return (
            <p>AccessAPIWrapper</p>
        )
    }
}

export default AccessApiWrapper;
