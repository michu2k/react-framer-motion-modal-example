import {PropsWithChildren} from "react";
import ReactDOM from "react-dom";

type ClientSidePortalProps = PropsWithChildren

const ClientSidePortal = ({children}: ClientSidePortalProps) => {
    const isClientSide = typeof window !== "undefined";
    return isClientSide ? ReactDOM.createPortal(children, document.body) : null;
};

export {ClientSidePortal};
