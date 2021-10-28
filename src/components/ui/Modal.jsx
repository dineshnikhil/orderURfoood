import React from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

function Backdrop(props) {
    return(
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
};

function ModalOverlay(props) {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onCartDeactivate} />, document.getElementById('overlays'))}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </React.Fragment>
    )
}

export default Modal
