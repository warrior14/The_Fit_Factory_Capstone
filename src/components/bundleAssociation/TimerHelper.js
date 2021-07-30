import { speak } from "./SpeechHelper";

export let timer = (sets, setsTimeMinutes, setsTimeSeconds, coolDownTimeMinutes, coolDownTimeSeconds ,setNewTime, setTimeoutState, setTimeoutHandleState, setTimeoutCooldownState, setTimeoutCooldownHandleState) => {
    sets--
    let timeout;
    let timeoutHandle;
    let timeoutCoolDownHandle;
    let timeoutCoolDown;
    // This is the resting time function, is in charge of giving the user a break after completing a set

    // the time for this is set by the user in the exercise card.
    let countdownRestTime = (minutesCD, secondsCD, minutesT, seconds) => {
        let coolDownTick = () => {

            let newTime = minutesCD.toString() + ":" + (secondsCD < 10 ? "0" : "") + String(secondsCD);
            setNewTime(newTime)
            secondsCD--;
            // everytime seconds is fulfilled this will trigger until seconds and minutes both reach 0
            if (secondsCD >= 0) {
                timeoutCoolDownHandle = setTimeout(coolDownTick, 1000);
                setTimeoutCooldownHandleState(timeoutCoolDownHandle)
            } else {
                // everytime a minute is fulfilled this is triggered until minutes reaches 0
                if (minutesCD >= 1) {
                    timeoutCoolDown = setTimeout(() => {
                        countdownRestTime(minutesCD - 1, 59, minutesT, seconds);
                    }, 1000);
                    setTimeoutCooldownState(timeoutCoolDown);
                } else {
                    // when there are 0 more minutes but seconds left this section is triggered
                    if (minutesCD === 0) {
                        speak("Cool Down Finished", "en-GB")
                        speak("Next Set Start", "en-GB");
                        countdownMinutesAndSeconds(minutesT - 1, 59)
                    } else {
                        timeoutCoolDown = setTimeout(() => {
                            countdownRestTime(minutesCD - 1, 59, minutesT, seconds);
                        }, 1000);
                        setTimeoutCooldownState(timeoutCoolDown);
                    }
                }
            }
        }
        coolDownTick();
    }
    // This function is in charge of counting down, it accepts two parameters of minutes and seconds
    let countdownMinutesAndSeconds = (minutes, seconds) => {
        // let startingMinutes = setTimeInput.value;
        console.log("minues", minutes, "seconds", seconds, "cooldown minutes", coolDownTimeMinutes , "cooldown seconds", coolDownTimeSeconds)
        let startingMinutes = setsTimeMinutes;
        let minutesAndSecondsTick = () => {
          
            let newTime = minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            setNewTime(newTime)
            seconds--;
            // everytime seconds is fulfilled this will trigger until seconds and minutes both reach 0
            if (seconds >= 0) {
                timeoutHandle = setTimeout(minutesAndSecondsTick, 1000);
                setTimeoutHandleState(timeoutHandle);
            } else {
                // everytime a minute is fulfilled this is triggered until minutes reaches 0
                if (minutes >= 1) {
                    timeout = setTimeout(() => {
                        countdownMinutesAndSeconds(minutes - 1, 59);
                    }, 1000);
                    setTimeoutState(timeout)
                } else {
                    // when there are 0 more minutes but seconds left this section is triggered
                    if (sets === 0) {
                        speak("Workout Finished, GREAT JOB!", "en-GB", 0.6)
                        setNewTime("");
                    } else {
                        speak("Set Complete", "en-GB", 0.6)
                        minutes = startingMinutes;
                        timeout = setTimeout(() => {
                            speak("Cool down start", "en-GB");
                            countdownRestTime(coolDownTimeMinutes, coolDownTimeSeconds, minutes, seconds);
                        }, 1000);
                        setTimeoutState(timeout)
                        sets--
                    }
                }
            }
        }
        minutesAndSecondsTick();
    }
    
    let functions = {
            start: () => {
                speak("Workout Begin", "en-GB");
                countdownMinutesAndSeconds(setsTimeMinutes, setsTimeSeconds)
            },
            stop: () => {
                speak("Workout Finished", "en-GB");
            }
        }
    

    return functions;
}