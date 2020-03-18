import React from "react";
import {Button, CardBody, Progress} from "shards-react";
import AlertNotificationMessages from "../complex components/AlertNotificationMessages";

const CustomFileUpload = ({setFile, buttonClick, progressCounter, successMessages, errorMessages}) => (
    <div>
        <div className="example">
            <AlertNotificationMessages messages={successMessages} theme={"success"} showIteration={false}
                                       messageTypePrefix={"Success"}/>
            <AlertNotificationMessages messages={errorMessages} theme={"danger"} showIteration={true}
                                       messageTypePrefix={"Error"}/>
        </div>
        <div className="custom-file mb-3">
            <input type="file" className="custom-file-input" id="customFile2" accept={".csv"} onChange={setFile}/>
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
    </div>
);

export default CustomFileUpload;