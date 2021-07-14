import React from 'react';

type ButtonPropsType = {
    title: string
    callback: () => void
    disable?: boolean
}

const Button :React.FC<ButtonPropsType> = ({title, callback, disable}) => {
    return (
        <button disabled={disable} onClick={callback} className={"btn"}>{title}</button>
    )
}

export default Button