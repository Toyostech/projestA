import React from "react";
import Card from "./Card";
import Button from "./Button";
import errorstyle from './ErrorModel.module.css'

const ErrorModel = (props) => {
    return (
        <React.Fragment>
            <div className={errorstyle.backdrop} onClick={props.onConfirm} />
            <Card className={errorstyle.modal}>
                <header className={errorstyle.header}>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>


            </Card>


            
        </React.Fragment>
    )
}
export default ErrorModel;