import React from "react";

const FunctionalGreetingWithProps = (props) => { 
    return <h1>Hello, {props.greeting} {props.name}</h1>;
}

export default FunctionalGreetingWithProps;