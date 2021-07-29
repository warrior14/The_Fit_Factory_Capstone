import React from "react";

export const ExerciseTimerModal = () => {
    return (
                    <div className="modal is-active">
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <section className="bundle"> 
                            {/* <h3 className="">{exercise.name}</h3>
                            <p className="">{exercise.description}</p> */}
                            <h1>Timer Countdown:</h1>
                            <button>Begin</button>
                            <button>Stop</button>
                            </section>
                        </div>
                        <button className="modal-close is-large" aria-label="close"></button>
                    </div>
    )
}