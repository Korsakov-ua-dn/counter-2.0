import React from 'react';
import Button from './Button';
import {DataType} from '../App'

type Block_2Type = {
    data: DataType
    error: string
    setError: (value: string) => void
    changeCurrentDataValue: (current: number) => void
}

const Block2: React.FC<Block_2Type> = ({data, error, setError, changeCurrentDataValue}) => {
    console.log('rerender B2');
    
    let current = data.current
    
    const content = (props: string) => {
        switch (error) {
            case 'Invalid value':
                return <div className={"error"} >{error}</div>
            case 'press set':
                return <div className={"error"} style={{color: "cyan"}} >{error}</div>
            case 'invalid current':
                return <div className={"error"} style={{fontSize: "75px", color: "red"}}>{current}</div>
            default: return <div className={"error"} style={{fontSize: "60px", color: "cyan"}}>{current}</div>
        }
    }

    const inc = () => {
        if (current || current === 0) changeCurrentDataValue(++current)
        if (current === data.max) setError('invalid current')
    }
    const reset = () => {
        setError('')
        changeCurrentDataValue(data.start)
    }

    return (
        <div className={"block"}>
            <div className="display">
               { content(error) }
            </div>
            <div className="btnWrapper">
                <Button disable={error !== ''} callback={inc} title={"inc"}/>
                <Button callback={reset} title={"reset"}/>
            </div>
        </div>
    )
}

export default Block2