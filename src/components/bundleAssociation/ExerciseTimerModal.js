import React, { useState, useContext, useEffect }from "react";
import { speak } from "./SpeechHelper.js";
import { BundleAssociationContext } from "./BundleAssociationProvider";
import { timer } from "./TimerHelper";
import "./BundleAssociation.css"



export const ExerciseTimerModal = ({setTimerModalIsDisplayed, bundle, sets, setsTimeMinutes, setsTimeSeconds, coolDownTimeMinutes, coolDownTimeSeconds }) => {

    const {getBundleAssociationExercises} = useContext(BundleAssociationContext);


    const [timerIsRunning, setTimerIsRunning ] = useState(false)
    const [timeState, setNewTime] = useState("");
    const [exerciseSets, setExerciseSets] = useState(3);
    const [timeoutState, setTimeoutState] = useState("");
    const [timeoutHandleState, setTimeoutHandleState] = useState("");
    const [timeoutCooldownState, setTimeoutCooldownState] = useState("");
    const [timeoutCooldownHandleState, setTimeoutCooldownHandleState] = useState("");

    useEffect(() => {
        console.log('bundle use effect', bundle);
    },[])

    // have to parseInt because the numbers are strings in the database.
    let exerciseCountdown = timer(parseInt(sets), parseInt(setsTimeMinutes), parseInt(setsTimeSeconds), parseInt(coolDownTimeMinutes), parseInt(coolDownTimeSeconds) ,setNewTime, setTimeoutState, setTimeoutHandleState, setTimeoutCooldownState, setTimeoutCooldownHandleState);
    
    let startTimer = () => {
        console.log("setsTimeMinutes", setsTimeMinutes, "setsTimeSeconds", setsTimeSeconds)
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
                <div className="modal-background areYouSure"></div>
                <div className="modal-content sureBundle">
                    <section className="bundle"> 
                    <h1 className="sureHeader title">Timer Countdown: {timeState}</h1>
                    <h1 className="startExercise exerciseTitle">{bundle.exercise.name}</h1>
                    <button className="button is-rounded beginButton" onClick={() => {
                        
                        startTimer();
                    }}>Begin</button>
                    <button className="button is-rounded stopButton" onClick={() => {
                        stopTimer()
                    }}>Stop</button>

                    </section>
                </div>
                <button onClick={() => {setTimerModalIsDisplayed(false)}}className="modal-close is-large exitBundle" aria-label="close"></button>
            </div>
    )
} 




// import React, { useState, useContext, useEffect }from "react";
// import { speak } from "./SpeechHelper.js";
// import { BundleAssociationContext } from "./BundleAssociationProvider";
// import { timer } from "./TimerHelper";



// export const ExerciseTimerModal = ({setTimerModalIsDisplayed, bundle, sets, setsTimeMinutes, setsTimeSeconds, coolDownTimeMinutes, coolDownTimeSeconds }) => {

//     const {getBundleAssociationExercises} = useContext(BundleAssociationContext);


//     const [timerIsRunning, setTimerIsRunning ] = useState(false)
//     const [timeState, setNewTime] = useState("");
//     const [exerciseSets, setExerciseSets] = useState(3);
//     const [timeoutState, setTimeoutState] = useState("");
//     const [timeoutHandleState, setTimeoutHandleState] = useState("");
//     const [timeoutCooldownState, setTimeoutCooldownState] = useState("");
//     const [timeoutCooldownHandleState, setTimeoutCooldownHandleState] = useState("");

//     useEffect(() => {
//         console.log('bundle use effect', bundle);
//     },[])

//     // have to parseInt because the numbers are strings in the database.
//     let exerciseCountdown = timer(parseInt(sets), parseInt(setsTimeMinutes), parseInt(setsTimeSeconds), parseInt(coolDownTimeMinutes), parseInt(coolDownTimeSeconds) , setNewTime, setTimeoutState, setTimeoutHandleState, setTimeoutCooldownState, setTimeoutCooldownHandleState);
    
//     let startTimer = () => {
//         console.log("setsTimeMinutes", setsTimeMinutes, "setsTimeSeconds", setsTimeSeconds)
//         exerciseCountdown.start();
//     }

//     let stopTimer = () => {
//         clearTimeout(timeoutState);
//         clearTimeout(timeoutHandleState)
//         clearTimeout(timeoutCooldownState);
//         clearTimeout(timeoutCooldownHandleState)
//         setNewTime("");
//         exerciseCountdown.stop();
//     }


//     return (
//             <div className="modal is-active">
//                 <div className="modal-background"></div>
//                 <div className="modal-content">
//                     <section className="bundle"> 
//                     <h1>Timer Countdown: {timeState}</h1>
//                     <h1>{bundle.exercise.name}</h1>
//                     <button onClick={() => {
                        
//                         startTimer();
//                     }}>Begin</button>
//                     <button onClick={() => {
                        
//                         stopTimer()
//                     }}>Stop</button>
//                     </section>
//                 </div>
//                 <button onClick={() => {setTimerModalIsDisplayed(false)}}className="modal-close is-large" aria-label="close"></button>
//             </div>
//     )
// } 