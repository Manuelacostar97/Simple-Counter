//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0
setInterval (() => {
    const four = Math.floor(counter/1000 % 10);
    const three = Math.floor(counter/100 % 10);
    const two = Math.floor(counter/10 % 10);
    const one = Math.floor(counter/1 % 10);
    counter++;
    console.log(four, three, two, one)
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, document.querySelector("#app"));    
}, 1000)