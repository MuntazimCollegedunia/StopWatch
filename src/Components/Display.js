import React from "react";
import '../App.css'

function Display(props){
    const disp = (value) =>{
        console.log(value)
        if(value >= 10){
            return value;
        }
        else{
            return '0'+value;
        }
    }

    return(
        <div className="displayMain">
            <div className="heading">
                StopWatch
            </div>
            <div className="timer">
                <span>{disp(props.time.h)}</span>&nbsp;:&nbsp;
                <span>{disp(props.time.m)}</span>&nbsp;:&nbsp;
                <span>{disp(props.time.s)}</span>&nbsp;:&nbsp;
                <span>{disp(props.time.ms)}</span>
            </div>
        </div>
    );
}

export default Display;