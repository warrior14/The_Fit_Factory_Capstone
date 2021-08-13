import Radium from 'radium';
import { jello, lightSpeedIn, shake } from 'react-animations';


export const JelloAnimation = (seconds) => {
    let jelloAnimation = {
        animationDuration: `${seconds}s`,
        animationName: Radium.keyframes(jello, "jello")
    };
    return jelloAnimation;
};


export const LightSpeedInAnimation = (seconds) => {
    let lightSpeedInAnimation = {
        animationDuration: `${seconds}s`,
        animationName: Radium.keyframes(lightSpeedIn, "lightSpeedIn")
    };
    return lightSpeedInAnimation
}

export const ShakeAnimation = (seconds) => {
    let shakeAnimation = {
        animationDuration: `${seconds}s`,
        animationName: Radium.keyframes(shake, "shake")
    }
    return shakeAnimation
}