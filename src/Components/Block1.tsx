import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from './Button';
import {DataType} from '../App'
import s from './Block1.module.css'

type BlockPropsType = {
    data: DataType
    setBasicDataValue: (start: number, max: number) => void
    setError: (value: string) => void
    error: string
}

const Block1 :React.FC<BlockPropsType> = ({data, setBasicDataValue, setError, error}) => {

    let [inputValue, setInputValue] = useState<DataType>(data)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value
        let id = e.currentTarget.id

        if (id === "start") {
            setInputValue({...inputValue, [id]: value}) 
            if (value < 0) {setError('Invalid value')} else
            if (value >= inputValue.max) {setError('Invalid value')} else
            if (!inputValue.max) {setError('Invalid value')} else
            {setError('press set')}
        } else {
            setInputValue({...inputValue, [id]: value}) 
            if (value <= inputValue.start) {setError('Invalid value')} else
            if (inputValue.start < 0) {setError('Invalid value')} else
            if (!inputValue.start && inputValue.start !== 0) {setError('Invalid value')} else
            {setError('press set')}
        }
    }

    useEffect(() => {
        setInputValue(data)
    }, [data])

    const setData = () => {
        setError('')
        setBasicDataValue(inputValue.start, inputValue.max)
    }


    return (
        <div className={"block"}>
            <div className="display">
                <div >
                    <span className={s.span}>max value:</span>
                    <input id={'max'} onChange={onChangeInputHandler} type="number" value={inputValue.max} className={s.input} />
                </div>
                <div>
                    <span className={s.span}>start value:</span>
                    <input id={'start'} onChange={onChangeInputHandler} type="number" value={inputValue.start} className={s.input} />
                </div>
            </div>
            <div className="btnWrapper">
                <Button disable={error === 'Invalid value'} callback={setData} title={"set"}/>
            </div>
        </div>
    )
}

export default Block1