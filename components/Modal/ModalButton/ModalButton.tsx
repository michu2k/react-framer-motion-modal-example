import React, {PropsWithChildren} from "react";
import cn from "classnames";
import styles from "./ModalButton.module.scss";

type ModalButtonProps = PropsWithChildren<{
    onClick: (e: React.MouseEvent) => void;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
}>

const ModalButton = ({onClick, type = "button", className, children, ...props}: ModalButtonProps) => {

    const modalBtnClassName = cn(
        styles.modalBtn,
        className
    );

    return (
        <button type={type} onClick={onClick} className={modalBtnClassName} {...props}>
            {children}
        </button>
    );
};

export type {ModalButtonProps};

export default ModalButton;