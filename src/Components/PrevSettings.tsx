import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
    import { StateType, setError, setBasicDataValue } from '../store/counter-reducer'
import s from './Block1.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../store/store'

type BlockPropsType = {
}

const PrevSettings :React.FC<BlockPropsType> = () => {
    console.log("PrevSettings");
    
    const state = useSelector<AppRootStateType, StateType>(state => state.data)
    const dispatch = useDispatch()

    let [inputValue, setInputValue] = useState({start: state.start, max: state.max})

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        
        let value = +e.currentTarget.value
        let id = e.currentTarget.id

        if (id === "start") {
            setInputValue({...inputValue, [id]: value}) 
            if (value < 0) {dispatch(setError('Invalid value'))} else
            if (value >= inputValue.max) {dispatch(setError('Invalid value'))} else
            if (!inputValue.max) {dispatch(setError('Invalid value'))} else
            {dispatch(setError('press set'))}
        } else {
            setInputValue({...inputValue, [id]: value}) 
            if (value <= inputValue.start) {dispatch(setError('Invalid value'))} else
            if (inputValue.start < 0) {dispatch(setError('Invalid value'))} else
            if (!inputValue.start && inputValue.start !== 0) {dispatch(setError('Invalid value'))} else
            {dispatch(setError('press set'))}
        }

    }

    const setDataToState = () => {
        dispatch(setError(''))
        dispatch(setBasicDataValue(inputValue.start, inputValue.max))
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
                <Button disable={state.error === 'Invalid value'} callback={setDataToState} title={"set"}/>
            </div>
        </div>
    )
}

export default PrevSettings