import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import {DataType} from '../App'
// import s from './Block_1.module.css'


type BlockPropsType = {
    data: DataType
    changeData: (start: number, max: number) => void
    setError: (value: string) => void
    error: string
}

const Block_1 :React.FC<BlockPropsType> = ({data, changeData, setError, error}) => {

    let [inputValue, setInputValue] = useState<DataType>(data)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        let id = e.currentTarget.id
        
        if (id === "start" &&  value < 0) {setError('Invalid start value')} else
        if (id === "start" && value > inputValue.max) {setError('Invalid start value')} else
        if (id === "max" && value < inputValue.start) {setError('Invalid max value')} else
        {setError('press set')}
        setInputValue({...inputValue, [id]: value})
    }

    const setData = () => {
        setError('')
        changeData(inputValue.start, inputValue.max)
    }

    return (
        <div className={"block"}>
            <div className="display">
                <div >
                    <span className={"span"}>max value:</span>
                    <input id={'max'} onChange={onChangeInputHandler} type="number" value={inputValue.max} />
                </div>
                <div>
                    <span className={"span"}>start value:</span>
                    <input id={'start'} onChange={onChangeInputHandler} type="number" value={inputValue.start} />
                </div>
            </div>
            <div className="btnWrapper">
                <Button disable={error === 'Invalid start value'} callback={setData} title={"set"}/>
            </div>
        </div>
    )
}

export default Block_1