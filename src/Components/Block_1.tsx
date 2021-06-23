import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import {DataType} from '../App'
import style from './Block_1.module.css'

// const spanStyle = {
//     color: "cyan",
//     fontSize: "24px",
// }
const inputStyle = {
    fontSize: "24px",
}

type BlockPropsType = {
    data: DataType
    changeData: () => void
}

const Block_1 :React.FC<BlockPropsType> = ({data, changeData}) => {

    let [inputValue, setInputValue] = useState<DataType>(data)

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, [e.currentTarget.id]:  +e.currentTarget.value})
    }

    const setToLocalstorage = () => {
        localStorage.setItem("start", JSON.stringify(inputValue.start))
        localStorage.setItem("max", JSON.stringify(inputValue.max))
        changeData()
    }

    return (
        <div className={"block"}>
            <div className="display">
                <div>
                    <span className={style.span}>max value:</span>
                    <input id={'max'} onChange={changeInputHandler} type="number" value={inputValue.max} />
                </div>
                <div>
                    <span style={inputStyle}>start value:</span>
                    <input id={'start'} onChange={changeInputHandler} type="number" value={inputValue.start} />
                </div>
            </div>
            <div className="btnWrapper">
                <Button callback={setToLocalstorage} title={"set"}/>
            </div>
        </div>
    )
}

export default Block_1