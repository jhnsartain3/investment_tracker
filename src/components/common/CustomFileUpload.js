import React from "react";
import {Button, CardBody, Progress} from "shards-react";

const CustomFileUpload = ({setFile, buttonClick, progressCounter}) => (
    <div className="custom-file mb-3">
        <input type="file" className="custom-file-input" id="customFile2" onChange={setFile}/>
        <label className="custom-file-label" htmlFor="customFile2">
            Choose file...
        </label>

        <CardBody>
            <center><Button onClick={buttonClick}>Submit File</Button></center>
        </CardBody>
        <Progress hidden={progressCounter === 0}
                  theme="success"
                  style={{height: "10px"}}
                  value={progressCounter}
        />
    </div>
);

export default CustomFileUpload;
