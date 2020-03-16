import React from "react";
import {Alert} from "shards-react";

const AlertNotificationMessages = ({messages, theme = "primary", showIteration, messageTypePrefix = "Error"}) => (
    <div>
        {messages && messages.length > 0 && messages.map((message, iteration) => (
                <Alert theme={theme}>
                    {messageTypePrefix}{showIteration ? (" (" + (iteration + 1) + ")") : ""}: {message}
                </Alert>
            )
        )}
    </div>
);

export default AlertNotificationMessages;