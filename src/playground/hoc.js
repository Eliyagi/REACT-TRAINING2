//  Higher Order Component (HOC)
console.log("Higher Order Component (HOC) hoc.js");

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>this is Authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="many words"/>, document.getElementById("app"));
