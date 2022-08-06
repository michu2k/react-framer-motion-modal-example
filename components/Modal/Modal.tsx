import React, {PropsWithChildren, useId} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import cn from "classnames";
import {modalAnimation, modalBackdropAnimation} from "./Modal.utils";
import CrossSvg from "../../public/cross.svg";
import styles from "./Modal.module.scss";

type ModalProps = PropsWithChildren<{
    isVisible: boolean;
    heading: string;
    onClickCloseBtn: () => void;
    modalClassName?: string;
    backdropClassName?: string;
}>

const Modal: React.FC<ModalProps> = ({
    isVisible,
    heading,
    onClickCloseBtn,
    modalClassName,
    backdropClassName,
    children
}) => {
    const modalId = useId();

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
                    aria-labelledby={`${modalId}-heading`}
                    {...modalAnimation}
                    className={modalMainClassName}>
                    <button type="button" className={styles.closeModalBtn} onClick={onClickCloseBtn}>
                        <Image src={CrossSvg} alt="" layout="responsive" />
                        <span className="sr-only">Close</span>
                    </button>

                    <div className={styles.modalHeader}>
                        <h2 id={`${modalId}-heading`} className={styles.modalHeading}>{heading}</h2>
                    </div>

                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </motion.div>

                <motion.div key="modal-backdrop" {...modalBackdropAnimation} className={modalBackdropClassName} />
            </>}
        </AnimatePresence>
    );
};

export type {ModalProps};

export default Modal;