import React from "react";
import '../App.css'

function Button(props){
    return(
        <div className="button">
            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
}
export default Button;