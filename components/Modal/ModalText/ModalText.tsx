import React, {PropsWithChildren} from "react";
import cn from "classnames";
import styles from "./ModalText.module.scss";

type ModalTextProps = PropsWithChildren<{
    className?: string;
    isCentered?: boolean;
}>

const ModalText = ({className, isCentered, children}: ModalTextProps) => {

    const modalTextClassName = cn(
        styles.modalText,
        {[styles.modalTextCentered]: isCentered},
        className
    );

    return (
        <p className={modalTextClassName}>
            {children}
        </p>
    );
};

export type {ModalTextProps};

export default ModalText;