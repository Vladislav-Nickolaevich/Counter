import React from 'react';

type ButtonType = {
    buttonClass: string
    onClickHandler: (value?: number) => void
    styleButton: string
    nameButton: string
    disabled?: boolean
}
const Button = (props: ButtonType) => {
    return (
            <button
                className={props.buttonClass}
                onClick={() => props.onClickHandler()}
                disabled={props.disabled}
            >
                <span className={props.styleButton}>{props.nameButton}</span>
            </button>
    );
};

export default Button;