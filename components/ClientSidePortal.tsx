import {PropsWithChildren, useEffect, useState} from "react";
import ReactDOM from "react-dom";

type ClientSidePortalProps = PropsWithChildren

const ClientSidePortal = ({children}: ClientSidePortalProps) => {
    const [isClientSide, setIsClientSide] = useState(false);

    useEffect(() => setIsClientSide(true), []);

    return isClientSide ? ReactDOM.createPortal(children, document.body) : null;
};

export {ClientSidePortal};
