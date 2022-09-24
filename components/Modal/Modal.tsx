import React, {PropsWithChildren, useId} from "react";
import {AnimatePresence, AnimationProps, motion} from "framer-motion";
import Image from "next/image";
import cn from "classnames";
import {defaultModalAnimation, defaultModalBackdropAnimation} from "./Modal.utils";
import CrossSvg from "../../public/cross.svg";
import styles from "./Modal.module.scss";

type ModalProps = PropsWithChildren<{
    isVisible: boolean; // Modal visibility
    heading: string; // Modal heading
    onClickCloseBtn: (e: React.MouseEvent) => void; // Callback when the close button is clicked
    onClickBackdrop?: (e: React.MouseEvent) => void; // Callback when the backdrop is clicked
    modalClassName?: string; // Additional class for the modal
    modalAnimation?: AnimationProps; // Alternative modal animation, type imported from framer-motion
    modalBackdropAnimation?: AnimationProps; // Alternative backdrop animation, type imported from framer-motion
}>

const Modal: React.FC<ModalProps> = ({
    isVisible,
    heading,
    onClickCloseBtn,
    onClickBackdrop = () => null,
    modalClassName,
    modalAnimation = defaultModalAnimation,
    modalBackdropAnimation = defaultModalBackdropAnimation,
    children
}) => {
    // headingId is used to set the "aria-labelledby" attribute of the modal dialog element
    const headingId = useId();

    // Combine the modal class names from the props and the default class names
    const modalMainClassName = cn(
        styles.modal,
        modalClassName
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
                        <h2 id={headingId} className={styles.modalHeading}>
                            {heading}
                        </h2>
                    </div>

                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </motion.div>

                <motion.div
                    key="modal-backdrop"
                    {...modalBackdropAnimation}
                    onClick={onClickBackdrop}
                    className={styles.modalBackdrop} />
            </>}
        </AnimatePresence>
    );
};

export type {ModalProps};

export default Modal;