import {AnimationProps} from "framer-motion";

const modalAnimation: AnimationProps = {
    transition: {duration: 0.2, delay: 0.1, ease: "easeInOut"},
    initial: {opacity: 0, scale: 0.9, y: 20},
    animate: {opacity: 1, scale: 1, y: 0},
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};

const modalBackdropAnimation: AnimationProps = {
    transition: {duration: 0.2, ease: "easeInOut"},
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0}
};

export {modalAnimation, modalBackdropAnimation};