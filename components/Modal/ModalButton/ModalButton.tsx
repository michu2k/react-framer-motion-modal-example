import React, {PropsWithChildren} from "react";
import cn from "classnames";
import styles from "./ModalButton.module.scss";

type ModalButtonProps = PropsWithChildren<{
    onClick: (e: React.MouseEvent) => void;
    className?: string;
}>

const ModalButton = ({onClick, className, children, ...props}: ModalButtonProps) => {

    const modalBtnClassName = cn(
        styles.modalBtn,
        className
    );

    return (
        <button onClick={onClick} className={modalBtnClassName} {...props}>
            {children}
        </button>
    );
};

export type {ModalButtonProps};

export default ModalButton;