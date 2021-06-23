import React from 'react';

type ButtonPropsType = {
    title: string
    callback: () => void
}

const Button :React.FC<ButtonPropsType> = ({title, callback}) => {
    return (
        <button onClick={callback} className={"btn"}>{title}</button>
    )
}

export default Button