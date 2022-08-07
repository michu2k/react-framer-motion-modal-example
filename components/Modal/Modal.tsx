import React, {PropsWithChildren, useId} from "react";
import {AnimatePresence, AnimationProps, motion} from "framer-motion";
import Image from "next/image";
import cn from "classnames";
import {defaultModalAnimation, defaultModalBackdropAnimation} from "./Modal.utils";
import CrossSvg from "../../public/cross.svg";
import styles from "./Modal.module.scss";

type ModalProps = PropsWithChildren<{
    isVisible: boolean;
    heading: string;
    onClickCloseBtn: () => void;
    modalClassName?: string;
    backdropClassName?: string;
    modalAnimation?: AnimationProps;
    modalBackdropAnimation?: AnimationProps;
}>

const Modal: React.FC<ModalProps> = ({
    isVisible,
    heading,
    onClickCloseBtn,
    modalClassName,
    backdropClassName,
    modalAnimation = defaultModalAnimation,
    modalBackdropAnimation = defaultModalBackdropAnimation,
    children
}) => {
    const modalId = useId();
    const headingId = `${modalId}-heading`;

    const modalMainClassName = cn(
        styles.modal,
        modalClassName
    );

    const modalBackdropClassName = cn(
        styles.modalBackdrop,
        backdropClassName
    );

    return (
        <AnimatePresence>
            {isVisible && <>
                <motion.div
                    key="modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={headingId}
                    {...modalAnimation}
                    className={modalMainClassName}>
                    <button type="button" className={styles.closeModalBtn} onClick={onClickCloseBtn}>
                        <Image src={CrossSvg} alt="" layout="responsive" />
                        <span className="sr-only">Close</span>
                    </button>

                    <div className={styles.modalHeader}>
                        <h2 id={headingId} className={styles.modalHeading}>{heading}</h2>
                    </div>

                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </motion.div>

                <motion.div
                    key="modal-backdrop"
                    {...modalBackdropAnimation}
                    className={modalBackdropClassName} />
            </>}
        </AnimatePresence>
    );
};

export type {ModalProps};

export default Modal;