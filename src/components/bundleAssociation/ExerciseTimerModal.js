import React, { useState, useContext, useEffect }from "react";
import { speak } from "./SpeechHelper.js";
import { BundleAssociationContext } from "./BundleAssociationProvider";
import { timer } from "./TimerHelper";

export const ExerciseTimerModal = ({setTimerIsDisplayed}) => {

    const {getBundleAssociationExercises} = useContext(BundleAssociationContext);

    const [timerIsRunning, setTimerIsRunning ] = useState(false)
    const [timeState, setNewTime] = useState("");
    const [exerciseSets, setExerciseSets] = useState(3);
    const [timeoutState, setTimeoutState] = useState("");
    const [timeoutHandleState, setTimeoutHandleState] = useState("");
    const [timeoutCooldownState, setTimeoutCooldownState] = useState("");
    const [timeoutCooldownHandleState, setTimeoutCooldownHandleState] = useState("");

    let exerciseCountdown = timer(exerciseSets, setNewTime, setTimeoutState, setTimeoutHandleState, setTimeoutCooldownState, setTimeoutCooldownHandleState);
    
    let startTimer = () => {
            exerciseCountdown.start(); 
    }

    let stopTimer = () => {
        clearTimeout(timeoutState);
        clearTimeout(timeoutHandleState)
        clearTimeout(timeoutCooldownState);
        clearTimeout(timeoutCooldownHandleState)
        setNewTime("");
        exerciseCountdown.stop();
    }


    return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <section className="bundle"> 
                    {/* <h3 className="">{exercise.name}</h3>
                    <p className="">{exercise.description}</p> */}
                    <h1>Timer Countdown: {timeState}</h1>
                    <button onClick={() => {

                    }}>changeState</button>
                    <button onClick={() => {

                    }}>what is thing</button>
                    <button onClick={() => {
                        
                        startTimer();
                    }}>Begin</button>
                    <button onClick={() => {
                        
                        stopTimer()
                    }}>Stop</button>
                    </section>
                </div>
                <button onClick={() => {setTimerIsDisplayed(false)}}className="modal-close is-large" aria-label="close"></button>
            </div>
    )
}