import React from "react";
import {Button, CardBody} from "shards-react";

const CustomFileUpload = ({setFile, buttonClick}) => (
    <div className="custom-file mb-3">
        <input type="file" className="custom-file-input" id="customFile2" onChange={setFile}/>
        <label className="custom-file-label" htmlFor="customFile2">
            Choose file...
        </label>

        <CardBody>
            <center><Button onClick={buttonClick}>Submit File</Button></center>
        </CardBody>
    </div>
);

export default CustomFileUpload;
